webpackJsonp([25],{dhGC:function(e,t){},lD7C:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=i("a3Yh"),n=i.n(o),r=i("aA9S"),l=i.n(r),s=i("6iV/"),d=i.n(s),c=i("yt7g"),u=[{key:"id",label:"角色编号",width:""},{key:"name",label:"角色名称",width:""},{key:"description",label:"角色描述",width:""}],g={data:function(){return{allResourceTree:[],currentResourceTree:[],currentResourceIds:[],defaultProps:{children:"children",label:"name"},operationBtns:[{name:"查看",identifier:"assignee_role_search",isShow:!0},{name:"创建",identifier:"assignee_role_create",dialog:{dialogFormVisible:!1,form:{name:"",identifier:"",description:""},rule:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],identifier:[{required:!0,message:"标识不能为空",trigger:"blur"}]},formName:"createForm",url:"/api/assignee/authority/createAuthority",title:"角色创建"},isShow:!0},{name:"修改",identifier:"assignee_role_update",dialog:{dialogFormVisible:!1,form:{positionName:"",holder:"assignee",positionType:"",roleId:null,description:"",id:null},rule:{name:[{required:!0,message:"角色名称不能为空",trigger:"change"}],identifier:[{required:!0,message:"标识不能为空",trigger:"change"}]},formName:"editForm",url:"/api/assignee/authority/updateAuthority",title:"角色修改"},isShow:!0},{name:"删除",identifier:"assignee_role_delete",form:{id:null,identifier:""},url:"/api/assignee/authority/deleteAuthority",isShow:!0},{name:"详情",identifier:"assignee_role_detail",dialog:{dialogFormVisible:!1,form:{},rule:{},formName:"editForm",url:"/api/assignee/authority/getResourceByRoles",title:"该角色拥有的资源"},isShow:!0}],tb:{fields:u,data:[]},multipleSelection:[],selected:[],currentPage:1,pageSize:15,total:null,loading:!0}},computed:{queryParams:function(){return{currentPage:this.currentPage,pageSize:15,holder:"assignee"}}},created:function(){var e={identifier:this.$route.path.slice(1)};c.getPageResourceByMenu(e,this),this.getAllResourceTree()},methods:(a={holderChangeHandle:function(e){this.getList(this.queryParams),this.getAllResourceTree()},getList:function(e){var t=this;this.loading=!0,this.$axios.post("/api/assignee/authority/pageQueryRole",d.a.stringify(c.encodePostBody(e))).then(function(e){0==e.data.code?(t.tb.data=e.data.data.items,t.total=e.data.data.totalNum):c.failCallback(e.data,t),t.loading=!1}).catch(function(e){t.loading=!1})},getAllResourceTree:function(){var e=this;this.$axios.post("/api/assignee/authority/getResourceTree",d.a.stringify(c.encodePostBody({holder:"ASSIGNEE"}))).then(function(t){0==t.data.code?e.allResourceTree=t.data.data:c.failCallback(t.data,e)}).catch(function(e){})},getCurrentResourceTree:function(e,t){var i=this;this.$axios.post("/api/assignee/authority/getResourceByRoles",d.a.stringify(c.encodePostBody({roleId:e.id}))).then(function(e){0==e.data.code?(i.currentResourceTree=e.data.data,i.currentResourceIds=[],i.getIdsFromTree(i.currentResourceTree),t&&t(i)):c.failCallback(e.data,i)}).catch(function(e){})},getIdsFromTree:function(e){e.forEach(function(e){0==e.children.length?this.currentResourceIds.push(e.id):this.getIdsFromTree(e.children)},this)},resetHandle:function(){},searchHandle:function(){},handleSizeChange:function(){},handleCurrentChange:function(){},changeSize:function(e){this.currentPage=1,this.queryParams.pageSize=e,this.getList(this.queryParams),this.getAllResourceTree()},handleSelectionChange:function(e){this.selected=e},dialogSubmitHandle:function(e){var t=this;this.$refs[e.dialog.formName].validate(function(i){if(i){var a={};"assignee_role_create"==e.identifier&&(a={holder:t.queryParams.holder,resources:t.$refs.createTree.getCheckedKeys(!1).concat(t.$refs.createTree.getHalfCheckedKeys()).join(",")}),"assignee_role_update"==e.identifier&&(a={resources:t.$refs.updateTree.getCheckedKeys(!1).concat(t.$refs.updateTree.getHalfCheckedKeys()).join(",")}),e.dialog.form=l()(a,e.dialog.form),t.$axios.post(e.dialog.url,d.a.stringify(c.encodePostBody(e.dialog.form))).then(function(i){0==i.data.code?(e.dialog.dialogFormVisible=!1,t.getList(t.queryParams),t.$message({type:"success",message:i.data.msg})):c.failCallback(i.data,t)}).catch(function(e){})}})},openUpdateDialog:function(e,t){t.dialog.form=l()({},e),this.getCurrentResourceTree(e,function(e){t.dialog.dialogFormVisible=!0,e.$nextTick(function(){e.$refs.updateTree.setCheckedKeys(e.currentResourceIds)})})},openCreateDialog:function(e){void 0!==this.$refs[e.dialog.formName]&&this.$refs[e.dialog.formName].resetFields(),e.dialog.dialogFormVisible=!0,this.$nextTick(function(){this.$refs.createTree.setCheckedKeys([])})},deleteHandle:function(e){this.selected.length>0||this.$alert("请选择一条记录进行操作！","提示",{confirmButtonText:"确定"})},openDetailDialog:function(e,t){t.dialog.dialogFormVisible=!0,this.getCurrentResourceTree(e)},getAllResource:function(){},getCurrentResource:function(){},getCheckedKeys:function(e,t,i){}},n()(a,"deleteHandle",function(e){var t=this;1==this.selected.length?this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.form=t.selected[0],t.$axios.post(e.url,d.a.stringify(c.encodePostBody(e.form))).then(function(e){0==e.data.code?(t.getList(t.queryParams),t.$message({type:"success",message:e.data.msg})):c.failCallback(e.data,t)}).catch(function(e){})}).catch(function(){}):this.$alert("请选择一条记录进行操作！","提示",{confirmButtonText:"确定"})}),n()(a,"dialogCloseHandle",function(e){e.dialog.dialogFormVisible=!1}),a)},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"content-body"},[i("div",{staticClass:"bd-top"},[i("div",{staticClass:"md clearfix"},[e._m(0),e._v(" "),i("div",{staticClass:"md-right"},[e.operationBtns[1].isShow?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.openCreateDialog(e.operationBtns[1])}}},[e._v(e._s(e.operationBtns[1].name))]):e._e(),e._v(" "),e.operationBtns[3].isShow?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.deleteHandle(e.operationBtns[3])}}},[e._v("删除")]):e._e()],1)])]),e._v(" "),i("div",{staticClass:"bd-main"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{height:"750px","tooltip-effect":"dark","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:e.tb.data},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",fixed:"left"}}),e._v(" "),e._l(e.tb.fields,function(e){return i("el-table-column",{key:e.id,attrs:{align:"left",prop:e.key,label:e.label,width:e.width}})}),e._v(" "),i("el-table-column",{attrs:{width:"120",label:"操作",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.operationBtns[2].isShow?i("el-button",{attrs:{type:"text",disabled:t.row.isDefault,icon:"el-icon-edit"},nativeOn:{click:function(i){i.preventDefault(),e.openUpdateDialog(t.row,e.operationBtns[2])}}}):e._e(),e._v(" "),i("el-button",{attrs:{type:"text",icon:"el-icon-view"},nativeOn:{click:function(i){i.preventDefault(),e.openDetailDialog(t.row,e.operationBtns[4])}}})]}}])})],2),e._v(" "),i("el-pagination",{attrs:{small:"",layout:"sizes, total, prev, pager, next, jumper",total:e.total,"page-sizes":[15,50,100],"page-size":e.pageSize,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"current-change":e.holderChangeHandle,"size-change":e.changeSize}})],1)]),e._v(" "),i("el-dialog",{attrs:{title:e.operationBtns[1].dialog.title,visible:e.operationBtns[1].dialog.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.$set(e.operationBtns[1].dialog,"dialogFormVisible",t)},close:function(t){e.dialogCloseHandle(e.operationBtns[1])}}},[i("el-form",{ref:e.operationBtns[1].dialog.formName,staticClass:"dialog-main",attrs:{model:e.operationBtns[1].dialog.form,"label-width":"90px",size:"small",rules:e.operationBtns[1].dialog.rule}},[i("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色名称"},model:{value:e.operationBtns[1].dialog.form.name,callback:function(t){e.$set(e.operationBtns[1].dialog.form,"name",t)},expression:"operationBtns[1].dialog.form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色标识",prop:"identifier"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色标识"},model:{value:e.operationBtns[1].dialog.form.identifier,callback:function(t){e.$set(e.operationBtns[1].dialog.form,"identifier",t)},expression:"operationBtns[1].dialog.form.identifier"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色描述",prop:"description"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色描述"},model:{value:e.operationBtns[1].dialog.form.description,callback:function(t){e.$set(e.operationBtns[1].dialog.form,"description",t)},expression:"operationBtns[1].dialog.form.description"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"选择资源",required:""}},[i("div",{staticClass:"tree-wrap"},[i("el-tree",{ref:"createTree",attrs:{data:e.allResourceTree,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps,"check-strictly":!1},on:{"check-change":e.getCheckedKeys}})],1)])],1),e._v(" "),i("div",{staticClass:"dialog_submit"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogCloseHandle(e.operationBtns[1])}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.dialogSubmitHandle(e.operationBtns[1])}}},[e._v("提交")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.operationBtns[2].dialog.title,visible:e.operationBtns[2].dialog.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.$set(e.operationBtns[2].dialog,"dialogFormVisible",t)}}},[i("el-form",{ref:e.operationBtns[2].dialog.formName,staticClass:"dialog-main",attrs:{model:e.operationBtns[2].dialog.form,"label-width":"90px",size:"small",rules:e.operationBtns[2].dialog.rule}},[i("el-form-item",{attrs:{label:"角色编号",prop:"id"}},[i("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:e.operationBtns[2].dialog.form.id,callback:function(t){e.$set(e.operationBtns[2].dialog.form,"id",t)},expression:"operationBtns[2].dialog.form.id"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色名称"},model:{value:e.operationBtns[2].dialog.form.name,callback:function(t){e.$set(e.operationBtns[2].dialog.form,"name",t)},expression:"operationBtns[2].dialog.form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色标识",prop:"identifier"}},[i("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:e.operationBtns[2].dialog.form.identifier,callback:function(t){e.$set(e.operationBtns[2].dialog.form,"identifier",t)},expression:"operationBtns[2].dialog.form.identifier"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色描述",prop:"description"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色描述"},model:{value:e.operationBtns[2].dialog.form.description,callback:function(t){e.$set(e.operationBtns[2].dialog.form,"description",t)},expression:"operationBtns[2].dialog.form.description"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"选择资源",required:""}},[i("div",{staticClass:"tree-wrap"},[i("el-tree",{ref:"updateTree",attrs:{data:e.allResourceTree,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps,"check-strictly":!1},on:{"check-change":e.getCheckedKeys}})],1)])],1),e._v(" "),i("div",{staticClass:"dialog_submit"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogCloseHandle(e.operationBtns[2])}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.dialogSubmitHandle(e.operationBtns[2])}}},[e._v("提交")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.operationBtns[4].dialog.title,visible:e.operationBtns[4].dialog.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.$set(e.operationBtns[4].dialog,"dialogFormVisible",t)}}},[i("div",{staticClass:"tree-wrap",staticStyle:{width:"80%",margin:"0 auto"}},[i("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"tree",attrs:{data:e.currentResourceTree,"default-expand-all":"","node-key":"id","tooltip-effect":"dark","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","highlight-current":"",props:e.defaultProps,"check-strictly":!0}})],1),e._v(" "),i("div",{staticClass:"dialog_submit",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.dialogCloseHandle(e.operationBtns[4])}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"md-left"},[t("h5",[this._v("角色管理")])])}]};var p=i("vSla")(g,f,!1,function(e){i("dhGC")},"data-v-a16b2d24",null);t.default=p.exports}});