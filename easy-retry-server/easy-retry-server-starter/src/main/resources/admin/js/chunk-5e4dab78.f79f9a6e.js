(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e4dab78"],{"12b3":function(o,e){var a={sceneStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},backOffLabels:{1:{name:"延迟等级",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"},3:{name:"CRON表达式",color:"#e1f52d"},4:{name:"随机等待",color:"#a127f3"}},triggerInterval:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},notifyScene:{1:{name:"场景重试数量超过阈值",color:"#d06892"},2:{name:"场景重试失败数量超过阈值",color:"#f5a22d"},3:{name:"客户端上报失败",color:"#e1f52d"},4:{name:"客户端组件异常",color:"#a127f3"},5:{name:"任务重试数量超过阈值",color:"#f5a22d"},6:{name:"任务失败进入死信队列",color:"#f5a22d"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},4:{name:"飞书",color:"#087da1"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},idGenMode:{1:{name:"号段模式",color:"#1b7ee5"},2:{name:"雪花算法",color:"#087da1"}},groupStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},initScene:{0:{name:"否",color:"#9c1f1f"},1:{name:"是",color:"#f5a22d"}}};o.exports=a},"9b4b":function(o,e,a){"use strict";a.r(e);a("ac1f"),a("5319"),a("b0c0"),a("a4d3"),a("e01a");var r=function(){var o=this,e=o._self._c;return e("div",[o.showHeader?e("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return o.$router.replace("/group/list")}}},[e("div")]):o._e(),null!==o.groupInfo?e("a-card",{attrs:{bordered:!1}},[e("a-descriptions",{attrs:{title:"通用配置",column:o.column,bordered:""}},[e("a-descriptions-item",{attrs:{label:"组名称"}},[o._v(" "+o._s(o.groupInfo.groupName)+" ")]),e("a-descriptions-item",{attrs:{label:"状态"}},[e("a-tag",{attrs:{color:o.groupStatus[o.groupInfo.groupStatus].color}},[o._v(" "+o._s(o.groupStatus[o.groupInfo.groupStatus].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"版本"}},[o._v(" "+o._s(o.groupInfo.version)+" ")]),e("a-descriptions-item",{attrs:{label:"描述",span:"3"}},[o._v(" "+o._s(o.groupInfo.description)+" ")]),e("a-descriptions-item",{attrs:{label:"OnLine机器",span:"3"}},o._l(o.podInfo,(function(a){return e("a-tag",{key:a,attrs:{color:"blue"}},[o._v(" "+o._s(a)+" ")])})),1)],1),e("br"),e("a-descriptions",{attrs:{title:"重试配置",column:o.column,bordered:""}},[e("a-descriptions-item",{attrs:{label:"ID生成模式"}},[e("a-tag",{attrs:{color:o.idGeneratorMode[o.groupInfo.idGeneratorMode].color}},[o._v(" "+o._s(o.idGeneratorMode[o.groupInfo.idGeneratorMode].name)+" ")])],1),e("a-descriptions-item",{attrs:{label:"分区"}},[o._v(" "+o._s(o.groupInfo.groupPartition)+" ")]),e("a-descriptions-item",{attrs:{label:"初始化场景"}},[e("a-tag",{attrs:{color:o.initScene[o.groupInfo.initScene].color}},[o._v(" "+o._s(o.initScene[o.groupInfo.initScene].name)+" ")])],1)],1)],1):o._e()],1)},t=[],n=(a("a9e3"),a("0fea")),c=a("12b3"),i=a.n(c),l={name:"GroupInfo",components:{},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:3}},data:function(){return{groupInfo:null,podInfo:[],initScene:i.a.initScene,groupStatus:i.a.groupStatus,idGeneratorMode:i.a.idGenMode}},created:function(){var o=this.$route.query.groupName;o?this.groupConfigDetail(o):this.showHeader&&this.$router.push({path:"/404"})},methods:{groupConfigDetail:function(o){var e=this;Object(n["o"])(o).then((function(o){e.groupInfo=o.data})),Object(n["J"])(o).then((function(o){e.podInfo=o.data}))}}},s=l,d=a("2877"),u=Object(d["a"])(s,r,t,!1,null,"4f09eb18",null);e["default"]=u.exports}}]);