(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{346:function(e,t,a){var l=a(380);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,a(16).default)("2e583dfb",l,!0,{})},379:function(e,t,a){"use strict";var l=a(346);a.n(l).a},380:function(e,t,a){(e.exports=a(15)(!1)).push([e.i,".audit-detail-example-demo-table-td-img {\n  width: 100%;\n}\n.audit-detail-example-demo-modal-img {\n  width: 100%;\n}\n.audit-detail-example-demo-section {\n  margin: 30px auto;\n}\n.audit-detail-example-demo-header {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.audit-detail-example-demo .ivu-form-item {\n  margin-top: 20px;\n}\n.audit-detail-example-demo .ivu-table,\n.audit-detail-example-demo .ivu-table-wrapper,\n.audit-detail-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},408:function(e,t,a){"use strict";a.r(t);a(89);const l=[{title:"用户信息",table:{columns:[{title:"项",key:"label",width:150},{title:"值",key:"value",width:"auto"},{title:"操作",slot:"action",width:"auto",formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],rules:[{required:!0,message:"请选择审核结论"}]},{type:"Select",model:"reason",placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],rules:[{required:!0,message:"请选择原因"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",rules:[{required:!0,message:"请输入原因"}],showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}],data:[{key:"name",label:"会员姓名",value:"张三",auditStatus:"",reason:"",reasonDesc:""},{key:"ID",label:"身份证号",value:"1234567890123",auditStatus:"",reason:"",reasonDesc:""},{key:"time",label:"确诊时间",value:"2019-11-20",auditStatus:"",reason:"",reasonDesc:""},{key:"diseaseName",label:"确诊疾病",value:"急性心肌梗塞伴",auditStatus:"",reason:"",reasonDesc:""},{key:"hospital",label:"确诊医院",value:"北京市协和医院",auditStatus:"",reason:"",reasonDesc:""}]}},{title:"案件描述",table:{columns:[{title:"项",key:"caseDesc",width:"auto"},{title:"操作",slot:"action",width:"auto",formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],required:!0},{type:"Select",model:"reason",required:!0,placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",required:!0,showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}],data:[{key:"caseDesc",caseDesc:"2016年10月20日，张三XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",auditStatus:"",reason:"",reasonDesc:""}]}},{title:"用户图片信息-img",table:{columns:[{title:"项",key:"label",width:"auto",img:!0},{title:"值一",slot:"value1",width:"auto",img:!0},{title:"值二",slot:"value2",width:"auto",img:!0},{title:"值三",slot:"value3",width:"auto",img:!0},{title:"值四",slot:"value4",width:"auto",img:!0},{title:"操作",slot:"action",width:250,formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],required:!0},{type:"Select",model:"reason",required:!0,placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",required:!0,showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}],data:[{key:"idImg",label:"身份证",value1:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value2:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value3:"",value4:"",auditStatus:"",reason:"",reasonDesc:""},{key:"idImg1",label:"身份证",value1:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value2:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value3:"",value4:"",auditStatus:"",reason:"",reasonDesc:""},{key:"idImg2",label:"身份证",value1:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value2:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value3:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value4:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",auditStatus:"",reason:"",reasonDesc:""}]}},{title:"用户图片信息-checkboxCard",table:{columns:[{title:"项",key:"label",width:100,img:!0},{title:"图拍列表",slot:"value1",width:"auto",formFields:[{type:"CheckboxCard",model:"card",checkAll:!1,cardWidth:"120px",cardHeight:"120px",options:[{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：这是北京鸟巢",header:"美丽北京",showCheckBox:!1},{id:"33",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：这是上海",header:"美丽上海",showCheckBox:!1},{id:"00",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：这是上海",header:"美丽上海",showCheckBox:!1},{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：这是北京鸟巢",header:"美丽北京",showCheckBox:!1},{id:"00",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：这是上海",header:"美丽上海",showCheckBox:!1},{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：这是北京鸟巢",header:"美丽北京",showCheckBox:!1}]}]},{title:"操作",slot:"action",width:250,formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],required:!0},{type:"Select",model:"reason",required:!0,placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",required:!0,showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}],data:[{key:"idImg",label:"身份证",value1:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value2:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value3:"",value4:"",auditStatus:"",reason:"",reasonDesc:""},{key:"idImg1",label:"身份证",value1:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value2:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value3:"",value4:"",auditStatus:"",reason:"",reasonDesc:""},{key:"idImg2",label:"身份证",value1:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value2:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value3:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",value4:"http://pic.rmb.bdstatic.com/166fccc45782aef93e251ea27776d780.jpeg",auditStatus:"",reason:"",reasonDesc:""}]}},{title:"案件审核结论",table:{columns:[{title:"项",key:"label",width:"auto"},{title:"值",key:"value",width:"auto"},{title:"操作",slot:"action",width:"auto",formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],required:!0},{type:"Select",model:"reason",required:!0,placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",required:!0,showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}],data:[{key:"conclusion",label:"结论",value:"选择「通过」后转到下个审核流程，选择「不通过」后转到终审员，选择「驳回」后转到用户侧补交材料",reasonDesc:""}]}},{table:{columns:[{title:"项",key:"label",width:100},{title:"操作",slot:"action",width:"auto",formFields:[{type:"Input",subtype:"textarea",model:"finalResult",placeholder:"请输入最终审核结论",required:!0}]}],data:[{key:"final_conclusion",label:"最终结论",finalResult:""}]}}];var i={data:()=>({pageConfig:l,formModel:{},modalOpen:!1,modalImgUrl:""}),methods:{handleButtonEvent(e,t,a){this[e.name](t,a)},handleFieldChange(e,t){let{model:a,value:l}=e,{key:i}=t;this.$refs[i][0].validate(),this.formModel[i]||this.$set(this.formModel,i,{}),this.$set(this.formModel[i],a,l)},handleSave(){let e=0;const t=Object.keys(this.$refs);t.forEach(a=>{this.$refs[a][0].validate().then(a=>{a?e++:console.log("Valid Failed"),e===t.length?(console.log("All Valid!"),console.log("formModel",this.formModel)):console.log("Valid Failed")}).catch(e=>{console.log(e)})})},handleImgClick(e){this.modalOpen=!0,this.modalImgUrl=e},handleCheckboxCardClick(e){let{url:t}=e;this.modalOpen=!0,this.modalImgUrl=t}}},o=(a(379),a(0)),d=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"audit-detail-example-demo"},[e._l(e.pageConfig,function(t){return a("div",{key:t.title,staticClass:"audit-detail-example-demo-section"},[a("h3",{staticClass:"audit-detail-example-demo-header"},[e._v("\n            "+e._s(t.title)+"\n        ")]),e._v(" "),a("Table",{staticClass:"audit-detail-example-demo-table",attrs:{columns:t.table.columns,data:t.table.data,"show-header":!1},scopedSlots:e._u([e._l(t.table.columns,function(t){return{key:t.slot,fn:function(l){var i=l.row,o=l.index;return[t.img?[a("img",{key:t.slot,staticClass:"audit-detail-example-demo-table-td-img",attrs:{src:i[t.slot],alt:""},on:{click:function(a){return e.handleImgClick(i[t.slot])}}})]:e._e(),e._v(" "),t.formFields?a("Form",{key:t.slot,ref:i.key,refInFor:!0,attrs:{model:i}},e._l(t.formFields,function(t,l){return a("FieldGenerator",{key:l,attrs:{field:t},on:{"on-field-change":function(t){return e.handleFieldChange(t,i)},"on-button-event":function(t){return e.handleButtonEvent(t,i,o)},"on-checkboxCard-click":e.handleCheckboxCardClick}})}),1):e._e()]}}})],null,!0)})],1)}),e._v(" "),a("div",{staticClass:"audit-detail-example-footer-actions"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("提交保存")])],1),e._v(" "),a("Modal",{attrs:{width:800},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[a("img",{staticClass:"audit-detail-example-demo-modal-img",attrs:{src:e.modalImgUrl,alt:""}})])],2)},[],!1,null,null,null);t.default=d.exports}}]);