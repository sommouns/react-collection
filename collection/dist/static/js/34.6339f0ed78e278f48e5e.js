webpackJsonp([34],{"3Q5H":function(t,e){},TZaG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("9rMa");var i=[{key:"reminderDate",label:"通知时间",width:"150"},{key:"typeName",label:"类型",width:"200"}],s={components:{MyTabs:a("MS1A").a},data:function(){return{publishForm:{},publishFormVisible:!1,tabIndex:5,statusList:[{code:"",name:"全部消息"},{code:"0",name:"未读消息",count:0},{code:"1",name:"已读消息"}],currentType:5,typeList:[],tb:{data:[],fields:i},loading:!1,total:0,unReadCount:0,currentStatus:{}}},computed:{queryParams:function(){return{currentPage:1,pageSize:15,type:5,status:0}}},created:function(){this.getList(this.queryParams),this.gettypeList(),this.currentStatus=this.statusList[1]},methods:{getNumberList:function(){var t=this;this.$axios.post("/api/assignee/messageReminder/unread",{}).then(function(e){0==e.data.code?(t.unReadCount=e.data.data,t.unReadCount>0&&(t.statusList[1].count=t.unReadCount)):t.$util.failCallback(e.data,t)}).catch(function(t){})},getList:function(t){var e=this;this.getNumberList(),this.gettypeList(),this.loading=!0,this.$axios.post("/api/assignee/messageReminder/getReminderList",t).then(function(t){e.loading=!1,0==t.data.code?(e.tb.data=t.data.data.items,e.total=t.data.data.totalNum):e.$util.failCallback(t.data,e)}).catch(function(t){e.loading=!1})},statusChange:function(t){this.currentStatus=t,this.queryParams.status=t.code,this.getList(this.queryParams)},typeChange:function(t){this.tabIndex=t.code,this.queryParams.type=t.code,this.getList(this.queryParams)},gettypeList:function(){var t=this;this.$axios.post("/api/assignee/messageReminder/getReminderType",{}).then(function(e){0==e.data.code?t.typeList=e.data.data:t.$util.failCallback(e.data,t)}).catch(function(t){})},readMessage:function(t){var e=this;this.$axios.post("/api/assignee/messageReminder/readMessage",{id:t.id,type:t.type}).then(function(t){0==t.data.code?(e.getList(e.queryParams),e.$store.dispatch("getunReadCount")):e.$util.failCallback(t.data,e)}).catch(function(t){})},goDetail:function(t){var e=this;0==t.status&&this.readMessage(t);var a=null,i="";switch(t.type){case 0:a=this.$util.encrypt(t.sign,"message"),i=(window.location.origin?window.location.origin:"")+"/#/assignee_firstparty_complaint?caseCode="+a,window.open(i);break;case 1:a=this.$util.encrypt(t.sign,"message"),i=(window.location.origin?window.location.origin:"")+"/#/assignee_complaint_warn?caseCode="+a,window.open(i);break;case 2:a=this.$util.encrypt(t.sign,"message"),i=(window.location.origin?window.location.origin:"")+"/#/assignee_case_manage?allotStatus="+a,window.open(i);break;case 3:a=this.$util.encrypt(t.sign,"message"),i=(window.location.origin?window.location.origin:"")+"/#/assignee_case_manage?caseStatus="+a,window.open(i);break;case 4:a=this.$util.encrypt(t.sign,"message"),i=(window.location.origin?window.location.origin:"")+"/#/assignee_strategy_design?configureStatus="+a,window.open(i);break;case 9:this.$axios.post("/api/assignee/messageReminder/detailInfo",{id:t.id}).then(function(t){0==t.data.code&&(e.publishForm=t.data.data,e.publishFormVisible=!0)}).catch(function(t){})}},goCaseDetail:function(t,e){0==e.status&&this.readMessage(e);var a=this.$util.encrypt(t.caseCode+"_"+t.caseId.toString()+"_"+t.caseManageId.toString(),"caseDetail"),i=(window.location.origin?window.location.origin:"")+"/#/worker_case_detail?id="+a;window.open(i)},handleCurrentChange:function(t){this.queryParams.currentPage=t,this.getList(this.queryParams)},download:function(t){var e=this;this.$axios({method:"post",url:"/api/assignee/messageReminder/downLoad",data:{name:t.name,url:t.url},responseType:"blob"}).then(function(t){if("application/json"!=t.data.type){var a=t.data,i=new Blob([a]),s=decodeURI(t.headers["content-disposition"].split("=")[1]);if("download"in document.createElement("a")){var n=document.createElement("a");n.download=s,n.style.display="none",n.href=URL.createObjectURL(i),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}else navigator.msSaveBlob(i,s)}else e.$message({type:"error",message:"下载失败"})}).catch(function(t){})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticStyle:{height:"100%"}},[a("el-col",{staticClass:"message-aside",attrs:{span:3}},[a("p",{staticClass:"aside-title"},[t._v("消息中心")]),t._v(" "),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"0"}},t._l(t.statusList,function(e){return a("el-menu-item",{key:e.id,attrs:{index:e.code},on:{click:function(a){t.statusChange(e)}}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name)+"\n          "),e.count?a("span",[t._v(t._s("("+e.count+")"))]):t._e()])])}))],1),t._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"content-body"},[a("div",{staticClass:"bd-top"},[a("div",{staticClass:"md clearfix"},[a("div",{staticClass:"md-left"},[a("h5",[t._v(t._s(t.currentStatus.name))])]),t._v(" "),a("div",{staticClass:"md-right"})])]),t._v(" "),a("div",{staticClass:"bd-main"},[a("my-tabs",{attrs:{tabList:t.typeList,tabIndex:t.tabIndex},on:{changeTab:t.typeChange}},[a("keep-alive",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",attrs:{height:"700",data:t.tb.data,"tooltip-effect":"dark","empty-text":"暂无数据"}},[a("el-table-column",{attrs:{label:"标题内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[10==e.row.type?[a("span",{class:{"message-read":Boolean(e.row.status)}},[t._v("\n                      "+t._s(e.row.title)+"\n                    "),"[]"!=e.row.sign?[t._v("号码关联案件号\n                      "),t._l(JSON.parse(e.row.sign),function(i){return a("a",{key:i.id,staticClass:"el-button--text el-button--small alink",class:{"message-read":Boolean(e.row.status)},attrs:{href:"javascript:void(0)"},on:{click:function(a){t.goCaseDetail(i,e.row)}}},[t._v(t._s(i.caseCode)+" \n                      ")])})]:t._e()],2)]:[a("a",{staticClass:"el-button--text el-button--small alink",class:{"message-read":Boolean(e.row.status)},attrs:{href:"javascript:void(0)"},on:{click:function(a){t.goDetail(e.row)}}},[t._v("\n                      "+t._s(e.row.title)+"\n                    ")])]]}}])}),t._v(" "),t._l(t.tb.fields,function(t){return a("el-table-column",{key:t.id,attrs:{align:"left",prop:t.key,label:t.label,width:t.width}})})],2)],1)],1),t._v(" "),a("el-pagination",{attrs:{small:"",layout:"total, prev, pager, next, jumper",total:t.total,"current-page":t.queryParams.currentPage,"page-size":t.queryParams.pageSize},on:{"update:currentPage":function(e){t.$set(t.queryParams,"currentPage",e)},"current-change":t.handleCurrentChange}})],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"公告详情",visible:t.publishFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.publishFormVisible=e}}},[a("div",{staticClass:"dialog-main"},[a("el-form",{attrs:{model:t.publishForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"公告标题",prop:"title"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.publishForm.title,callback:function(e){t.$set(t.publishForm,"title",e)},expression:"publishForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"公告来源",prop:"orgName"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.publishForm.orgName,callback:function(e){t.$set(t.publishForm,"orgName",e)},expression:"publishForm.orgName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发布时间",prop:"createTime"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.publishForm.createTime,callback:function(e){t.$set(t.publishForm,"createTime",e)},expression:"publishForm.createTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"公告内容",prop:"content"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入",disabled:""},model:{value:t.publishForm.content,callback:function(e){t.$set(t.publishForm,"content",e)},expression:"publishForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"附件"}},t._l(t.publishForm.accessory,function(e){return a("el-button",{key:e.id,attrs:{type:"text"},on:{click:function(a){t.download(e)}}},[t._v(t._s(e.name))])}))],1)],1)])],1)},staticRenderFns:[]};var o=a("vSla")(s,n,!1,function(t){a("3Q5H")},"data-v-69ee5652",null);e.default=o.exports}});