<template>
    <div
        v-if="notFormfield && show"
        :class="itemClasses"
        :style="itemStyle"
    >
        <component
            :is="getFieldCom(field.type)"
            :class="classes"
            :field="field"
            :inline="inline"
            :size="field.size || size"
        />
    </div>
    <FormItem
        v-else-if="show"
        :label="field.label"
        :prop="field.model"
        :required="field.required"
        :rules="getRules(field)"
        :label-width="field.labelWidth"
        :class="itemClasses"
        :style="itemStyle"
    >
        <component
            :is="getFieldCom(field.type)"
            :class="classes"
            :field="field"
            :inline="inline"
            :api-base="apiBase"
            :size="field.size || size"
            :request-interceptor="requestInterceptor"
            :params-container="paramsContainer"
            @on-change="handleFieldChange"
            @on-submit-click="handleSubmitClick($event)"
            @on-http-request="handleHttpRequest($event)"
            @on-reset-click="handleResetClick"
            @on-button-event="handleButtonClick"
            @on-checkboxCard-click="handelCheckboxCardClick"
        />
    </FormItem>
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
import {classPrefix} from './utils/const';
import {getValidType} from './utils/getValidType';
import schema from 'async-validator';
import axios from './utils/http';
const notFormfields = ['Divider'];
export default {
    inject: ['form'],
    name: 'FieldGenerator',
    components: {
        ...fieldComponents
    },
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        paramsContainer: {
            type: Object,
            default() {
                return {};
            }
        },
        field: {
            type: [Object, Array],
            required: true,
            default() {
                return {};
            }
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
        inline: {
            type: Boolean,
            default: false
        },
        apiBase: {
            type: String,
            default: ''
        },
        itemWidth: {
            type: [String, Number],
            default: ''
        }
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        itemClasses() {
            return `${classPrefix}-form-item`;
        },
        notFormfield() {
            return notFormfields.includes(this.field.type);
        },
        itemStyle() {
            const inline = this.field.inline || this.inline;
            const itemWidth = inline ? this.itemWidth : (this.itemWidth || '100%');
            let width = this.field.width || itemWidth;
            // 兼容老版本的字符串数值，如果是数值字符串，则转为int
            if (typeof width === 'string' && /^\d+$/.test(width)) {
                width = parseInt(width);
            }
            return {
                width: typeof width === 'string' ? width : width + 'px',
                display: inline ? 'inline-block' : 'block'
                // width: typeof width !== 'number' ? width + 'px' : width
            };
        },
        show() {
            const field = this.field;
            const model = this.form.model;
            let show = true;
            if (field.hiddenOn) {
                let descriptor = field.hiddenOn;
                let validator = new schema(descriptor);
                validator.validate(model, (errors) => {
                    if(!errors) {
                        show = false;
                    }
                });
            }
            if (field.showOn) {
                let descriptor = field.showOn;
                let validator = new schema(descriptor);
                validator.validate(model, (errors) => {
                    if(errors) {
                        show = false;
                    }
                });
            }
            // console.log(field.model, valid, model);
            return show;
        }
    },
    created() {
        let field = this.field;
        // 老版本兼容
        if (field.subType) {
            field.subtype = field.subType;
        }
        return field;
    },
    methods: {
        handleFieldChange(model, value) {
            this.$emit('on-field-change', {
                model,
                value
            });
        },
        handleSubmitClick(component) {
            this.submit(component).then(() => {

            }).catch(() => {

            });
        },
        handleResetClick() {
            this.$emit('on-reset');
        },
        handleButtonClick($event) {
            this.$emit('on-button-event', $event);
        },
        getFieldCom(comType = '') {
            return `field${comType}`;
        },
        handelCheckboxCardClick(value) {
            this.$emit('on-checkboxCard-click', value);
        },
        getRules(field) {
            const type = field.type.toLowerCase();
            const subtype = field.subtype;
            let rules = [];
            if (field.required) {
                if (type === 'datepicker' && ['daterange', 'datetimerange'].includes(subtype)) {
                    rules.push({
                        validator(rule, value, callback) {
                            if (value.length === 2 && value[0] && value[1]) {
                                callback();
                            }
                            else {
                                callback(new Error(field.label + '不可为空'));
                            }
                        },
                        trigger: 'change'
                    });
                }
                if (['logicinput', 'logicselect'].includes(type)) {
                    rules.push({
                        validator(rule, value, callback) {
                            if (value.logic && value.value) {
                                callback();
                            }
                            else {
                                callback(new Error(field.label + '不可为空'));
                            }
                        },
                        trigger: 'change'
                    });
                }
                rules.push({
                    required: true,
                    type: getValidType(field),
                    message: (field.label || field.model) + '不可为空',
                    trigger: 'change'
                });
            }
            if (field.rules) {
                rules = rules.concat(field.rules);
            }
            return rules;
        },

        submit(component) {
            let field = component.field;
            return new Promise((resolve, reject) => {
                try {
                    this.form.validate(
                        valid => {
                            if (valid) {
                                this.$emit('on-submit', this.form.model);
                                // 如果有api则需要在此处理请求
                                if (field.action && field.action.api) {
                                    component.loading = true;
                                    this.doAjaxAction(field).then(() => {
                                        resolve(this.form.model);
                                        component.loading = false;
                                        this.$Message.info(`${field.text}成功!`);
                                    }).catch(() => {
                                        component.loading = false;
                                        this.$Message.info(`${field.text}失败!`);
                                        reject();
                                    });
                                }
                            }
                            else {
                                reject(valid);
                            }
                        }
                    );
                }
                catch(err) {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    reject(err);
                }
            });
        },
        handleHttpRequest(component) {
            component.loading = true;
            let field = component.field;
            this.doAjaxAction(component.field).then(() => {
                component.loading = false;
                this.$Message.info(`${field.text}成功!`);
            }).catch(() => {
                component.loading = false;
                this.$Message.info(`${field.text}失败!`);
            });
        },

        doAjaxAction(field) {
            return new Promise((resolve, reject) => {
                try {
                    let apiBase = this.apiBase || '';
                    let finalApi = apiBase + field.action.api;
                    this.requestMethod(finalApi, this.getParams(field)).then(res => {
                        if (this.requestResolve(res)) {
                            resolve();
                            this.$emit('on-button-event', {
                                name: 'ajaxSuccess',
                                field
                            });
                        }
                        else {
                            reject();
                        }
                    }).catch(() => {
                        reject();
                    });
                }
                catch(err) {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    reject(err);
                }
            });
        },

        getParams({apiParams}) {
            let formModel = this.form.model || {};
            // put current formModel and outside param into paramsContainer
            let paramsContainer = Object.assign({}, formModel, this.paramsContainer || {});
            let params = {};
            // If set apiParams with 'all', then the params contain all the properties in paramsContainer
            if (apiParams === 'all') {
                params = paramsContainer;
            }
            else {
                if (Array.isArray(apiParams)) {
                    apiParams.forEach(param => {
                        params[param] = paramsContainer[param];
                    });
                }
            }
            return Object.assign({}, params);
        },

        requestResolve(res) {
            if (+res.status === 0 || +res.errno === 0 || +res.status === 200) {
                return true;
            }
            return false;
        },
        requestMethod(url, finalParams) {
            if (this.requestInterceptor) {
                return this.requestInterceptor(url, finalParams);
            }
            else if (this.FormGeneratorInstallOptions && this.FormGeneratorInstallOptions.requestInterceptor) {
                return this.FormGeneratorInstallOptions.requestInterceptor(url, finalParams);
            }
            return axios.request({
                url,
                method: 'get',
                params: finalParams
            });
        },
    }
};
</script>
