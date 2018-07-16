webpackJsonp([44],{DTPi:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("MS1A"),r=(e("XBA1"),e("5YEj")),o=e.n(r),n=[{key:"orgName",label:"部门名称",width:"",id:"3"},{key:"commitMoney",label:"委托金额",width:"150",id:"5",align:"right"},{key:"repayMoney",label:"回收金额",width:"150",id:"4",align:"right"},{key:"onCaseRecovery",label:"在案回收率",width:"150",id:"6",align:"right"},{key:"newCaseRecovery",label:"新案回收率",width:"150",id:"7",align:"right"},{key:"oldCaseRecovery",label:"旧案回收率",width:"150",id:"9",align:"right"},{key:"repayCaseCount",label:"还款案件数",width:"150",id:"10",align:"right"},{key:"commitCaseCount",label:"分配案件数",width:"150",id:"11",align:"right"}],s={components:{MyTabs:i.a},data:function(){return{searchMonth:"",comparesearchMonth:"",pickerOptions0:{disabledDate:function(t){return t.getTime()>Date.now()-864e5}},currentChart:"repayMoney",tb:{data:[],fields:n},tabsData:[{code:"repayMoney",name:"回收金额"},{code:"commitMoney",name:"委托金额"},{code:"onCaseRecovery",name:"在案回收率"},{code:"newCaseRecovery",name:"新案回收率"},{code:"oldCaseRecovery",name:"旧案回收率"},{code:"repayCaseCount",name:"还款案件数"},{code:"commitCaseCount",name:"分配案件数"}],xAxisData:[],seriesData:[],compareseriesData:[],chartData:[],comparechartData:[],departmentKPIChart:null,loading:!0,isCompare:!1,thisMonth:""}},created:function(){var t=new Date,a=t.getMonth()+1,e=t.getFullYear();this.thisMonth=e+"-"+(a>9?a:"0"+a),this.searchMonth=this.thisMonth,this.getList()},mounted:function(){this.departmentKPIChart=o.a.init(this.$refs.departmentKPIChart)},methods:{searchMonthChange:function(t){null==t&&(this.searchMonth=this.thisMonth),this.getList()},compare:function(t){null==t?(this.comparechartData=[],this.compareseriesData=[],this.drawChart()):this.getcompareList()},isCompareChange:function(t){0==t&&(this.comparechartData=[],this.compareseriesData=[],this.drawChart())},chartChange:function(t){this.currentChart=t.code,this.seriesData=this.chartData[t.code],this.comparechartData==[]?this.compareseriesData=[]:this.compareseriesData=this.comparechartData[t.code],this.drawChart()},drawChart:function(){this.departmentKPIChart.clear();var t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{left:"center",text:""},legend:{data:[this.searchMonth,this.comparesearchMonth],top:"top"},xAxis:{type:"category",data:this.xAxisData,axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{name:this.searchMonth,barWidth:"30%",type:"bar",data:this.seriesData}]};this.departmentKPIChart.setOption(t)},drawChart2:function(){this.departmentKPIChart.clear();var t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{left:"center",text:""},legend:{data:[this.searchMonth,this.comparesearchMonth],top:"top"},xAxis:{type:"category",data:this.xAxisData,axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{name:this.searchMonth,barWidth:"30%",type:"bar",data:this.seriesData},{name:this.comparesearchMonth,barWidth:"30%",type:"bar",data:this.compareseriesData}]};this.departmentKPIChart.setOption(t)},getList:function(){var t=this;this.loading=!0,this.$axios.post("/api/assignee/performance/department/getMonthData",this.$util.encodePostBody({searchMonth:this.searchMonth})).then(function(a){if(t.loading=!1,0==a.data.code){t.tb.data=a.data.data;var e={};a.data.data.forEach(function(t){for(var a in t)void 0==e[a]&&(e[a]=[]),e[a].push(t[a])}),t.chartData=e,t.xAxisData=e.orgName,t.seriesData=e[t.currentChart],t.drawChart()}else t.$util.failCallback(a.data,t)}).catch(function(a){t.loading=!1})},getcompareList:function(){var t=this;this.$axios.post("/api/assignee/performance/department/getMonthData",this.$util.encodePostBody({searchMonth:this.comparesearchMonth})).then(function(a){if(t.loading=!1,0==a.data.code){var e={};a.data.data.forEach(function(t){for(var a in t)void 0==e[a]&&(e[a]=[]),e[a].push(t[a])}),t.comparechartData=e,t.comparexAxisData=e.orgName,t.compareseriesData=e[t.currentChart],t.drawChart2()}else t.$util.failCallback(a.data,t)}).catch(function(a){t.loading=!1})},downloadTable:function(){var t=this;this.$axios({method:"post",url:"/api/assignee/performance/department/getMonthDataForDepartmentDownload",data:{searchMonth:this.searchMonth},responseType:"blob"}).then(function(a){if("application/json"!=a.data.type){var e=a.data,i=new Blob([e]),r=decodeURI(a.headers["content-disposition"].split("=")[1]);if("download"in document.createElement("a")){var o=document.createElement("a");o.download=r,o.style.display="none",o.href=URL.createObjectURL(i),document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o)}else navigator.msSaveBlob(i,r)}else t.$message({type:"error",message:"导出失败"})}).catch(function(t){})}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-body"},[t._m(0),t._v(" "),e("div",{staticClass:"bd-main"},[e("el-form",{attrs:{size:"mini",inline:""}},[e("el-form-item",{attrs:{label:""}},[e("el-date-picker",{attrs:{"picker-options":t.pickerOptions0,type:"month",placeholder:"选择","value-format":"yyyy-MM",format:"yyyy/MM",clearable:""},on:{change:t.searchMonthChange},model:{value:t.searchMonth,callback:function(a){t.searchMonth=a},expression:"searchMonth"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"对比"}},[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:t.isCompareChange},model:{value:t.isCompare,callback:function(a){t.isCompare=a},expression:"isCompare"}})],1),t._v(" "),t.isCompare?e("el-form-item",{attrs:{label:""}},[e("el-date-picker",{attrs:{"picker-options":t.pickerOptions0,type:"month",placeholder:"选择","value-format":"yyyy-MM",format:"yyyy/MM",clearable:""},on:{change:t.compare},model:{value:t.comparesearchMonth,callback:function(a){t.comparesearchMonth=a},expression:"comparesearchMonth"}})],1):t._e()],1),t._v(" "),e("my-tabs",{attrs:{tabList:t.tabsData,tabIndex:t.currentChart},on:{changeTab:t.chartChange}},[e("div",{ref:"departmentKPIChart",staticStyle:{height:"380px"}})]),t._v(" "),e("p",{staticClass:"exportTable"},[e("a",{staticClass:"el-icon-upload2",on:{click:t.downloadTable}},[t._v("导出EXCEL文件")])]),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",attrs:{data:t.tb.data,height:"460","tooltip-effect":"dark","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","empty-text":"暂无数据","show-overflow-tooltip":""}},[e("el-table-column",{attrs:{type:"index",width:"150",label:this.searchMonth+"绩效排名",align:"center"}}),t._v(" "),t._l(t.tb.fields,function(t){return e("el-table-column",{key:t.id,attrs:{align:t.align||"left",prop:t.key,label:t.label,width:t.width}})})],2)],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bd-top"},[a("div",{staticClass:"md clearfix"},[a("div",{staticClass:"md-left"},[a("h5",[this._v("部门绩效排行")])]),this._v(" "),a("div",{staticClass:"md-right"})])])}]};var c=e("vSla")(s,h,!1,function(t){e("hqnP")},null,null);a.default=c.exports},hqnP:function(t,a){}});