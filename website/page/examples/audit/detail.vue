<template>
    <div class="audit-detail-example-demo">
        <div
            v-for="config in pageConfig"
            :key="config.title"
            class="audit-detail-example-demo-section"
        >
            <h3 class="audit-detail-example-demo-header">
                {{ config.title }}
            </h3>
            <Table
                class="audit-detail-example-demo-table"
                :columns="config.table.columns"
                :data="config.table.data"
                :show-header="false"
            >
                <template
                    v-for="column in config.table.columns"
                    :slot="column.slot"
                    :ref="column.slot"
                    slot-scope="{ row, index }"
                >
                    <template v-if="column.img">
                        <img
                            :key="column.slot"
                            class="audit-detail-example-demo-table-td-img"
                            :src="row[column.slot]"
                            alt=""
                            @click="handleImgClick(row[column.slot])"
                        >
                    </template>
                    <Form
                        v-if="column.formFields"
                        :key="column.slot"
                        :ref="row.key"
                        :model="row"
                    >
                        <FieldGenerator
                            v-for="(field, i) in column.formFields"
                            :key="i"
                            :field="field"
                            @on-field-change="handleFieldChange($event, row)"
                            @on-button-event="handleButtonEvent($event, row, index)"
                            @on-checkboxCard-click="handleCheckboxCardClick"
                        />
                    </Form>
                </template>
            </Table>
        </div>
        <div class="audit-detail-example-footer-actions">
            <Button type="primary" @click="handleSave">提交保存</Button>
        </div>
        <Modal v-model="modalOpen" :width="800">
            <img
                class="audit-detail-example-demo-modal-img"
                :src="modalImgUrl"
                alt=""
            >
        </Modal>
    </div>
</template>
<script>
/* eslint-disable no-console */
import {pageConfig} from './detail.config';
export default {
    data() {
        return {
            pageConfig,
            formModel: {},
            modalOpen: false,
            modalImgUrl: ''
        };
    },
    methods: {
        handleButtonEvent($event, row, index) {
            this[$event.name](row, index);
        },
        handleFieldChange({model, value}, {key}) {
            // eslint-disable-next-line no-console
            this.$refs[key][0].validate();
            if (!this.formModel[key]) {
                this.$set(this.formModel, key, {});
            }
            this.$set(this.formModel[key], model, value);
        },

        handleSave() {
            let validCount = 0;
            const refKeys = Object.keys(this.$refs);
            refKeys.forEach(form => {
                this.$refs[form][0].validate().then(valid => {
                    if (valid) {
                        validCount++;
                    }
                    else {
                        console.log('Valid Failed');
                    }
                    // 所有的都通过了验证
                    if (validCount === refKeys.length) {
                        console.log('All Valid!');
                        console.log('formModel', this.formModel);
                    }
                    else {
                        console.log('Valid Failed');
                    }
                }).catch(err => {
                    console.log(err);
                });
            });
        },

        handleImgClick(imgUrl) {
            this.modalOpen = true;
            this.modalImgUrl = imgUrl;
        },

        handleCheckboxCardClick({ url }) {
            this.modalOpen = true;
            this.modalImgUrl = url;
        }
    }
};
</script>
<style lang="less">
    .audit-detail-example-demo {
        &-table {
            &-td-img {
                width: 100%;
            }
        }
        &-modal-img {
            width: 100%;
        }
        &-section {
            margin: 30px auto;
        }
        &-header {
            margin-bottom: 10px;
            font-size: 16px;
        }
        .ivu-form-item {
            margin-top: 20px
        }
        .ivu-table, .ivu-table-wrapper, .ivu-table-cell {
            overflow: visible;
        }
    }
</style>
