(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d43f4"],{"5fe2":function(t,e,r){"use strict";r.r(e);r("b0c0");var a=function(){var t=this,e=t._self._c;return e("div",[e("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return t.$router.go(-1)}}},[e("div")]),e("a-card",{attrs:{bordered:!1}},[e("a-descriptions",{attrs:{title:"",bordered:""}},[e("a-descriptions-item",{attrs:{label:"组名称"}},[t._v(" "+t._s(t.retryInfo.groupName)+" ")]),e("a-descriptions-item",{attrs:{label:"场景名称"}},[t._v(" "+t._s(t.retryInfo.sceneName)+" ")]),e("a-descriptions-item",{attrs:{label:"唯一id"}},[t._v(" "+t._s(t.retryInfo.uniqueId)+" ")]),e("a-descriptions-item",{attrs:{label:"幂等id",span:2}},[t._v(" "+t._s(t.retryInfo.idempotentId)+" ")]),e("a-descriptions-item",{attrs:{label:"业务编号"}},[t._v(" "+t._s(t.retryInfo.bizNo)+" ")]),e("a-descriptions-item",{attrs:{label:"下次触发时间"}},[t._v(" "+t._s(t.parseDate(t.retryInfo.nextTriggerAt))+" ")]),e("a-descriptions-item",{attrs:{label:"执行时间"}},[t._v(" "+t._s(t.parseDate(t.retryInfo.createDt))+" ")]),e("a-descriptions-item",{attrs:{label:"当前重试状态 | 数据类型"}},[e("a-tag",{attrs:{color:"red"}},[t._v(" "+t._s(t.retryStatus[t.retryInfo.retryStatus])+" ")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-tag",{attrs:{color:t.taskType[t.retryInfo.taskType].color}},[t._v(" "+t._s(t.taskType[t.retryInfo.taskType].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"执行器名称",span:3}},[t._v(" "+t._s(t.retryInfo.executorName)+" ")]),e("a-descriptions-item",{attrs:{label:"参数",span:3}},[t._v(" "+t._s(t.retryInfo.argsStr)+" ")]),e("a-descriptions-item",{attrs:{label:"失败原因",span:3}},[t._v(" "+t._s(t.retryInfo.errorMessage)+" ")]),e("a-descriptions-item",{attrs:{label:"扩展参数",span:3}},[t._v(" "+t._s(t.retryInfo.extAttrs)+" ")])],1)],1)],1)},s=[],n=r("0fea"),o=r("c1df"),i=r.n(o),c={name:"RetryLogInfo",data:function(){return{retryInfo:{},retryStatus:{0:"处理中",1:"处理成功",2:"最大次数"},taskType:{1:{name:"重试数据",color:"#d06892"},2:{name:"回调数据",color:"#f5a22d"}}}},created:function(){var t=this,e=this.$route.query.id;e&&Object(n["o"])(e).then((function(e){t.retryInfo=e.data}))},methods:{parseDate:function(t){return i()(t).format("YYYY-MM-DD HH:mm:ss")}}},d=c,p=r("2877"),l=Object(p["a"])(d,a,s,!1,null,"04ff55b8",null);e["default"]=l.exports}}]);