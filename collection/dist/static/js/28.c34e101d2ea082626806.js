webpackJsonp([28],{ftfO:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("aA9S"),i=o.n(a),n=o("a3Yh"),l=o.n(n),r=o("6iV/"),s=o.n(r),c=[{key:"caseCode",label:"案件编号",width:"110",type:"0"},{key:"batchCode",label:"批次号",width:"",type:"0"},{key:"borrowerName",label:"姓名",width:"",type:"0"},{key:"borrowerIdnumber",label:"身份证号",width:"180",type:"0"},{key:"borrowerPhone",label:"手机号",width:"120",type:"0"},{key:"borrowerAge",label:"年龄",width:"50",type:"0"},{key:"borrowerGenderName",label:"性别",width:"50",type:"0"},{key:"latestDebtMoney",label:"最新欠款金额",width:"120",align:"right",type:"0",sortable:"custom"},{key:"commitMoney",label:"委案金额",width:"100",align:"right",type:"0",sortable:"custom"},{key:"totalRepayMoney",label:"已还款总额",width:"120",align:"right",type:"0",sortable:"custom"},{key:"totalReduceMoney",label:"减免总金额",width:"120",align:"right",type:"0",sortable:"custom"},{key:"overdueDay",label:"逾期天数",width:"",type:"0"},{key:"receivableAge",label:"账龄",width:"50",type:"0"},{key:"bacthTimes",label:"手别",width:"50",type:"0"},{key:"loanInstitution",label:"贷款机构",width:"",type:"0"},{key:"productName",label:"贷款产品",width:"100",type:"0"},{key:"commitDate",label:"委案时间",width:"100",type:"0",sortable:"custom"},{key:"limitDate",label:"退案时间",width:"100",type:"0",sortable:"custom"},{key:"caseArea",label:"案件地区",width:"",type:"0"},{key:"registeredAddress",label:"户籍地",width:"",type:"0"},{key:"staffName",label:"催收员",width:"120",type:"0"},{key:"departmentName",label:"部门",width:"",type:"0"},{key:"followDate",label:"跟进时间",width:"100",type:"0",sortable:"custom"},{key:"caseStatusName",label:"案件状态",width:"",type:"0"},{key:"collectionStatusName",label:"催收状态",width:"100",type:"0"},{key:"caseLabel",label:"案件标签",width:"100",type:"0"},{key:"telStatusName",label:"电话状态",width:"",type:"0"}],d={components:{myTable:o("4OB+").a},data:function(){var e;return{commitMoney:"",latestDebtMoney:"",departmentProps:{label:"name",value:"id"},dropdownData:{},departments:[],dateObjs:{followDate:"",commitDate:"",limitDate:""},result:"",selected:"",pickerOptions2:{onPick:function(e,t){}},conditionForm:(e={caseLabel:"",caseCode:"",batchCode:"",borrowerAgeMax:"",borrowerAgeMin:"",borrowerGender:"",borrowerIdnumber:"",borrowerName:"",borrowerPhone:"",batchTimes:"",caseArea:"",caseStatus:"",collectionStatus:"",commitMoneyMax:"",commitMoneyMin:"",collectionManageQueryType:"manual",departmentIds:[],departmentId:"",latestDebtMoneyMax:"",latestDebtMoneyMin:"",loanInstitution:"",overdueDayMax:"",overdueDayMin:"",productName:"",receivableAge:"",registeredAddress:"",staffId:"",telStatus:"",totalRepayMoneyMax:"",totalRepayMoneyMin:""},l()(e,"totalRepayMoneyMax",""),l()(e,"totalRepayMoneyMin",""),l()(e,"currentPage",1),l()(e,"pageSize",15),l()(e,"followDateMin",""),l()(e,"followDateMax",""),l()(e,"limitDateMin",""),l()(e,"limitDateMax",""),l()(e,"commitDateMin",""),l()(e,"commitDateMax",""),l()(e,"isExpired",""),e),isExpired:"",searchForm:{},hasSearch:!1,isShow:!0,total:0,operationBtns:[{name:"查看",identifier:"sponsor_position_search",isShow:!0}],tb:{fields:c,data:[],height:460,selectionBtn:!0},currentPage:1,roleList:[],positionTypeList:[],tempRow:[],filename:"",fileList:[],loading:!0,staffs:[]}},computed:{queryParams:function(){return{currentPage:this.currentPage,pageSize:15}}},created:function(){this.$route.path.slice(1);this.getdropdownData(),this.getDepartmentsTree(),this.searchForm=i()({},this.conditionForm),this.getList(this.conditionForm)},methods:{sortChange:function(e){this.conditionForm.sortField=e.prop,this.conditionForm.sequence="ascending"===e.order?"ASC":"DESC",this.conditionForm.currentPage,this.getList(this.conditionForm)},goCaseDetail:function(e){var t=this.$util.encrypt(e.caseCode+"_"+e.caseId.toString()+"_"+e.caseManageId.toString(),"caseDetail"),o=(window.location.origin?window.location.origin:"")+"/#/worker_case_detail?id="+t;window.open(o)},getStaffList:function(e){var t=this;0==e.length?(this.staffs=[],this.conditionForm.staffId="",this.conditionForm.departmentId=""):(this.conditionForm.departmentId=this.conditionForm.departmentIds[this.conditionForm.departmentIds.length-1],this.$axios.post("/api/assignee/caseManage/getStaffs",{departmentId:this.conditionForm.departmentId}).then(function(e){0==e.data.code?t.staffs=e.data.data:t.$util.failCallback(e.data,t)}).catch(function(e){}))},getDepartmentsTree:function(){var e=this;this.$axios.post("/api/assignee/caseManage/getDepartmentsCondition",{}).then(function(t){0==t.data.code?e.departments=t.data.data:e.$util.failCallback(t.data,e)}).catch(function(e){})},getfollowDate:function(e){if(null==e)return this.conditionForm.followDateMin="",void(this.conditionForm.followDateMax="");this.conditionForm.followDateMin=e[0],this.conditionForm.followDateMax=e[1]},getlimitDate:function(e){if(null==e)return this.conditionForm.limitDateMin="",void(this.conditionForm.limitDateMax="");this.conditionForm.limitDateMin=e[0],this.conditionForm.limitDateMax=e[1]},getcommitDate:function(e){if(null==e)return this.conditionForm.commitDateMin="",void(this.conditionForm.commitDateMax="");this.conditionForm.commitDateMin=e[0],this.conditionForm.commitDateMax=e[1]},search:function(){var e=this;this.$refs.conditionForm.validate(function(t){t&&(e.searchForm=i()({},e.conditionForm),1==e.conditionForm.currentPage?e.getList(e.conditionForm):(e.conditionForm.currentPage=1,e.getList(e.conditionForm),e.hasSearch=!0))})},reset:function(){this.$refs.conditionForm.resetFields(),this.conditionForm.followDateMin="",this.conditionForm.followDateMax="",this.conditionForm.limitDateMin="",this.conditionForm.limitDateMax="",this.conditionForm.commitDateMin="",this.conditionForm.commitDateMax="",this.staffs=[],this.conditionForm.departmentId="",this.dateObjs={followDate:"",commitDate:"",limitDate:""},this.searchForm=i()({},this.conditionForm),1==this.conditionForm.currentPage?this.getList(this.conditionForm):(this.conditionForm.currentPage=1,this.getList(this.conditionForm),this.hasSearch=!0)},getList:function(e){var t,o=this;t=e||this.conditionForm,this.loading=!0,this.$axios.post("/api/assignee/collectionManage/queryManualCollection",t).then(function(e){0==e.data.code?(o.tb.data=e.data.data.items,o.total=e.data.data.totalNum,o.loading=!1,o.commitMoney=e.data.data.countInfo?e.data.data.countInfo.commitMoney:0,o.latestDebtMoney=e.data.data.countInfo?e.data.data.countInfo.latestDebtMoney:0):o.$util.failCallback(e.data,o),o.loading=!1}).catch(function(e){o.loading=!1})},changeSize:function(e){this.conditionForm.pageSize=e,this.searchForm.pageSize=e,1==this.conditionForm.currentPage?this.getList(this.conditionForm):(this.conditionForm.currentPage=1,this.getList(this.conditionForm))},getdropdownData:function(e){var t=this;this.$axios.post("/api/assignee/collectionManage/queryManualConditionInit").then(function(e){0==e.data.code?(t.dropdownData=e.data.data,t.dropdownData.loanInstitution.unshift({name:"All",code:""}),t.dropdownData.productName.unshift({name:"All",code:""}),t.dropdownData.registeredAddress.unshift({name:"All",code:""}),t.dropdownData.gender.unshift({name:"All",code:""}),t.dropdownData.receivableAge.unshift({name:"All",code:""}),t.dropdownData.telStatus.unshift({name:"All",code:""}),t.dropdownData.collectionStatus.unshift({name:"All",code:""}),t.dropdownData.caseArea.unshift({name:"All",code:""}),t.dropdownData.bacthTimes.unshift({name:"All",code:""})):t.$util.failCallback(e.data,t)}).catch(function(e){})},handleSizeChange:function(){},changeCheckbox:function(e){var t=this;this.conditionForm.isExpired=e?1:0,this.$axios.post("/api/assignee/collectionManage/getCaseStatus",{isExpired:this.conditionForm.isExpired}).then(function(e){0==e.data.code&&(t.dropdownData.caseStatus=e.data.data)})},handleCurrentChange:function(e){this.searchForm.currentPage=e,this.hasSearch?(this.getList(this.conditionForm),this.hasSearch=!1):(this.conditionForm=i()({},this.searchForm),this.getList(this.searchForm))},handleSelectionChange:function(e){var t="";e.forEach(function(e,o){0===o?t=e.caseCode+"_"+e.caseId.toString()+"_"+e.caseManageId.toString():t+="__"+e.caseCode+"_"+e.caseId.toString()+"_"+e.caseManageId.toString()}),this.selected=t},stopIntelligentHandle:function(e,t){var o=this;this.$confirm("此操作将中断智能催收, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.form.caseCode=e.row.caseCode,o.$axios.post(t.url,s.a.stringify(o.$util.encodePostBody(t.form))).then(function(e){0==e.data.code?(o.getList(o.queryParams),o.$message({type:"success",message:e.data.msg})):o.$util.failCallback(e.data,o)},function(e){})}).catch(function(){})},batchCollection:function(){if(!this.selected)return this.$alert("未选择案件！","提示",{confirmButtonText:"确定",type:"warning"}),!1;var e=this.$util.encrypt(this.selected,"caseDetail"),t=(window.location.origin?window.location.origin:"")+"/#/worker_case_detail?id="+e;window.open(t)}}},m={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content-body"},[o("div",{staticClass:"bd-top"},[o("div",{staticClass:"md clearfix"},[e._m(0),e._v(" "),o("div",{staticClass:"md-right"},[o("el-button",{attrs:{size:"mini",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.batchCollection(t)}}},[e._v("批量催收")])],1)])]),e._v(" "),o("div",{staticClass:"bd-main"},[o("el-form",{ref:"conditionForm",staticClass:"condition-form",attrs:{model:e.conditionForm,"label-width":this.$util.LABEL_WIDTH,"label-position":"right",size:"mini"}},[o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"案件编号",prop:"caseCode"}},[o("el-input",{attrs:{clearable:""},model:{value:e.conditionForm.caseCode,callback:function(t){e.$set(e.conditionForm,"caseCode",t)},expression:"conditionForm.caseCode"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"姓名",prop:"borrowerName"}},[o("el-input",{attrs:{clearable:""},model:{value:e.conditionForm.borrowerName,callback:function(t){e.$set(e.conditionForm,"borrowerName",t)},expression:"conditionForm.borrowerName"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"身份证号",prop:"borrowerIdnumber"}},[o("el-input",{attrs:{clearable:""},model:{value:e.conditionForm.borrowerIdnumber,callback:function(t){e.$set(e.conditionForm,"borrowerIdnumber",t)},expression:"conditionForm.borrowerIdnumber"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"手机号",prop:"borrowerPhone"}},[o("el-input",{attrs:{clearable:""},model:{value:e.conditionForm.borrowerPhone,callback:function(t){e.$set(e.conditionForm,"borrowerPhone",t)},expression:"conditionForm.borrowerPhone"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"贷款机构",prop:"loanInstitution"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.loanInstitution,callback:function(t){e.$set(e.conditionForm,"loanInstitution",t)},expression:"conditionForm.loanInstitution"}},e._l(e.dropdownData.loanInstitution,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"贷款产品",prop:"productName"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.productName,callback:function(t){e.$set(e.conditionForm,"productName",t)},expression:"conditionForm.productName"}},e._l(e.dropdownData.productName,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"批次号",prop:"batchCode",clearable:""}},[o("el-input",{model:{value:e.conditionForm.batchCode,callback:function(t){e.$set(e.conditionForm,"batchCode",t)},expression:"conditionForm.batchCode"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"案件状态",prop:"caseStatus"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.caseStatus,callback:function(t){e.$set(e.conditionForm,"caseStatus",t)},expression:"conditionForm.caseStatus"}},[o("el-option",{attrs:{label:"All",value:""}}),e._v(" "),e._l(e.dropdownData.caseStatus,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})})],2)],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"案件地区",prop:"caseArea"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.caseArea,callback:function(t){e.$set(e.conditionForm,"caseArea",t)},expression:"conditionForm.caseArea"}},e._l(e.dropdownData.caseArea,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"户籍地",prop:"registeredAddress"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.registeredAddress,callback:function(t){e.$set(e.conditionForm,"registeredAddress",t)},expression:"conditionForm.registeredAddress"}},e._l(e.dropdownData.registeredAddress,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"性别",prop:"borrowerGender"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.borrowerGender,callback:function(t){e.$set(e.conditionForm,"borrowerGender",t)},expression:"conditionForm.borrowerGender"}},e._l(e.dropdownData.gender,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"年龄"}},[o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"borrowerAgeMin"}},[o("el-input",{attrs:{clearable:"",placeholder:"最小值"},model:{value:e.conditionForm.borrowerAgeMin,callback:function(t){e.$set(e.conditionForm,"borrowerAgeMin",t)},expression:"conditionForm.borrowerAgeMin"}})],1)],1),e._v(" "),o("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"borrowerAgeMax"}},[o("el-input",{attrs:{clearable:"",placeholder:"最大值"},model:{value:e.conditionForm.borrowerAgeMax,callback:function(t){e.$set(e.conditionForm,"borrowerAgeMax",t)},expression:"conditionForm.borrowerAgeMax"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"催收部门",prop:"departmentIds"}},[o("el-cascader",{attrs:{options:e.departments,"change-on-select":"",props:e.departmentProps,clearable:""},on:{change:e.getStaffList},model:{value:e.conditionForm.departmentIds,callback:function(t){e.$set(e.conditionForm,"departmentIds",t)},expression:"conditionForm.departmentIds"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"催收员",prop:"staffId"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.staffId,callback:function(t){e.$set(e.conditionForm,"staffId",t)},expression:"conditionForm.staffId"}},e._l(e.staffs,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"跟进时间",prop:"followDate"}},[o("el-date-picker",{attrs:{type:"daterange","picker-options":e.pickerOptions2,"value-format":"yyyy-MM-dd",format:"yyyy/MM/dd",clearable:""},on:{change:e.getfollowDate},model:{value:e.dateObjs.followDate,callback:function(t){e.$set(e.dateObjs,"followDate",t)},expression:"dateObjs.followDate"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"催收状态",prop:"collectionStatus"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.collectionStatus,callback:function(t){e.$set(e.conditionForm,"collectionStatus",t)},expression:"conditionForm.collectionStatus"}},e._l(e.dropdownData.collectionStatus,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"账龄",prop:"receivableAge"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.receivableAge,callback:function(t){e.$set(e.conditionForm,"receivableAge",t)},expression:"conditionForm.receivableAge"}},e._l(e.dropdownData.receivableAge,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"手别",prop:"batchTimes"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.batchTimes,callback:function(t){e.$set(e.conditionForm,"batchTimes",t)},expression:"conditionForm.batchTimes"}},e._l(e.dropdownData.bacthTimes,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"逾期天数"}},[o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"overdueDayMin"}},[o("el-input",{attrs:{clearable:""},model:{value:e.conditionForm.overdueDayMin,callback:function(t){e.$set(e.conditionForm,"overdueDayMin",t)},expression:"conditionForm.overdueDayMin"}})],1)],1),e._v(" "),o("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"overdueDayMax"}},[o("el-input",{attrs:{clearable:""},model:{value:e.conditionForm.overdueDayMax,callback:function(t){e.$set(e.conditionForm,"overdueDayMax",t)},expression:"conditionForm.overdueDayMax"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"电话状态",prop:"telStatus"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.telStatus,callback:function(t){e.$set(e.conditionForm,"telStatus",t)},expression:"conditionForm.telStatus"}},e._l(e.dropdownData.telStatus,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"委案时间",prop:"commitDate"}},[o("el-date-picker",{attrs:{type:"daterange","picker-options":e.pickerOptions2,"value-format":"yyyy-MM-dd",format:"yyyy/MM/dd",clearable:""},on:{change:e.getcommitDate},model:{value:e.dateObjs.commitDate,callback:function(t){e.$set(e.dateObjs,"commitDate",t)},expression:"dateObjs.commitDate"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"退案时间",prop:"limitDate"}},[o("el-date-picker",{attrs:{type:"daterange","picker-options":e.pickerOptions2,"value-format":"yyyy-MM-dd",format:"yyyy/MM/dd",clearable:""},on:{change:e.getlimitDate},model:{value:e.dateObjs.limitDate,callback:function(t){e.$set(e.dateObjs,"limitDate",t)},expression:"dateObjs.limitDate"}})],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"委案金额"}},[o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"commitMoneyMin"}},[o("el-input",{attrs:{clearable:"",placeholder:"最小值"},model:{value:e.conditionForm.commitMoneyMin,callback:function(t){e.$set(e.conditionForm,"commitMoneyMin",t)},expression:"conditionForm.commitMoneyMin"}})],1)],1),e._v(" "),o("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"commitMoneyMax"}},[o("el-input",{attrs:{clearable:"",placeholder:"最大值"},model:{value:e.conditionForm.commitMoneyMax,callback:function(t){e.$set(e.conditionForm,"commitMoneyMax",t)},expression:"conditionForm.commitMoneyMax"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"已还款总额"}},[o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"totalRepayMoneyMin"}},[o("el-input",{attrs:{clearable:"",placeholder:"最小值"},model:{value:e.conditionForm.totalRepayMoneyMin,callback:function(t){e.$set(e.conditionForm,"totalRepayMoneyMin",t)},expression:"conditionForm.totalRepayMoneyMin"}})],1)],1),e._v(" "),o("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"totalRepayMoneyMax"}},[o("el-input",{attrs:{clearable:"",placeholder:"最大值"},model:{value:e.conditionForm.totalRepayMoneyMax,callback:function(t){e.$set(e.conditionForm,"totalRepayMoneyMax",t)},expression:"conditionForm.totalRepayMoneyMax"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"最新欠款金额"}},[o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"latestDebtMoneyMin"}},[o("el-input",{attrs:{clearable:"",placeholder:"最小值"},model:{value:e.conditionForm.latestDebtMoneyMin,callback:function(t){e.$set(e.conditionForm,"latestDebtMoneyMin",t)},expression:"conditionForm.latestDebtMoneyMin"}})],1)],1),e._v(" "),o("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"",prop:"latestDebtMoneyMax"}},[o("el-input",{attrs:{clearable:"",placeholder:"最大值"},model:{value:e.conditionForm.latestDebtMoneyMax,callback:function(t){e.$set(e.conditionForm,"latestDebtMoneyMax",t)},expression:"conditionForm.latestDebtMoneyMax"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"el-col fixed-width"},[o("el-form-item",{attrs:{label:"案件标签",prop:"caseLabel"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.conditionForm.caseLabel,callback:function(t){e.$set(e.conditionForm,"caseLabel",t)},expression:"conditionForm.caseLabel"}},[o("el-option",{attrs:{label:"All",value:""}}),e._v(" "),e._l(e.dropdownData.caseLabel,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})})],2)],1)],1),e._v(" "),e.dropdownData.isExpiredLabel?o("div",{staticClass:"el-col fixed-width",staticStyle:{"margin-left":"-30px"}},[o("el-form-item",{attrs:{prop:"isExpired"}},[o("el-checkbox",{on:{change:e.changeCheckbox},model:{value:e.isExpired,callback:function(t){e.isExpired=t},expression:"isExpired"}},[e._v("查看完结案件")])],1)],1):e._e(),e._v(" "),o("div",{staticClass:"el-col fixed-width form-btns"},[o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),o("el-button",{attrs:{size:"mini"},on:{click:e.reset}},[e._v("重置")])],1)]),e._v(" "),o("my-table",{attrs:{tb:e.tb,loading:e.loading},on:{sortChange:e.sortChange,rowClick:e.goCaseDetail,choose:e.handleSelectionChange}}),e._v(" "),o("div",[o("el-row",[o("el-col",{staticClass:"countInfo",attrs:{span:12}},[e._v("\n            共计 "),o("span",[e._v("委案金额")]),o("span",{staticClass:"money"},[e._v(e._s(e.commitMoney))]),o("span",[e._v("最新欠款金额")]),o("span",{staticClass:"money"},[e._v(e._s(e.latestDebtMoney))])]),e._v(" "),o("el-col",{attrs:{span:12}},[o("el-pagination",{attrs:{small:"","current-page":e.conditionForm.currentPage,"page-size":e.conditionForm.pageSize,layout:"sizes,total, prev, pager, next,jumper","page-sizes":[15,50,100],total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.conditionForm,"currentPage",t)},"size-change":e.changeSize}})],1)],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"md-left"},[t("h5",[this._v("催收作业")])])}]};var p=o("vSla")(d,m,!1,function(e){o("v9gL")},null,null);t.default=p.exports},v9gL:function(e,t){}});