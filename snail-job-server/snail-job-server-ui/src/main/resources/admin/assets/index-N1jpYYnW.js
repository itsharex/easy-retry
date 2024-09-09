import{c as We,d as Qe,a as Ye,N as xe,b as Ze}from"./search-form.vue_vue_type_script_setup_true_lang-BvcIdR82.js";import{d as Xe,_ as ea,a as aa}from"./download-BsdDisiO.js";import{_ as ta}from"./delete-alert-qx5vqfHb.js";import{d as A,r as J,o as j,c as w,h as a,$ as t,a4 as X,aE as la,aa as ne,aF as oa,aG as ra,Z as re,a0 as ye,L as Ae,q as Z,b as oe,w as l,f as e,g as T,t as k,ai as De,aH as G,a9 as Me,D as Ue,p as be,z as na,A as sa,a as $e,a1 as Oe,aI as Ke,a3 as we,e as _e,x as ua,aJ as Ve,C as Ce,s as Je,ab as pa,E as ia,H as da,B as L,F as Be,I as ma,aK as ca,aL as ga,aM as Pe,l as ba,ac as Y,aC as Fe,aN as fa,aO as va,aA as _a,aP as He,aQ as Ge,Y as ve,u as ya,ag as Ta,ah as le,aj as Ie,ak as ka}from"./index-Dw6v9XEN.js";import{a as ha,b as ja,c as Sa,d as Ee,e as Na,g as xa}from"./job-CpyNzvSg.js";import{_ as wa,u as Ia,a as Da}from"./table-h4IGR_Mx.js";import{_ as Ua}from"./status-switch.vue_vue_type_script_setup_true_lang-C32pgk0N.js";import{u as Ra}from"./auth-CwOxyZid.js";import{_ as Le}from"./select-group.vue_vue_type_script_setup_true_lang-Cliw46hj.js";import{_ as ze,a as $a}from"./route-key.vue_vue_type_script_setup_true_lang-BZo1ve2i.js";import{_ as fe,a as Oa}from"./code-mirror.vue_vue_type_script_setup_true_lang-DJC-w-iG.js";import{_ as Va}from"./cron-input.vue_vue_type_style_index_0_lang-B_rB3kPC.js";import{a as Ca,_ as Ja,d as Pa,c as Ea,b as Aa}from"./Grid-oISpgLl0.js";import{_ as Ma}from"./detail-drawer-CxJYaLsx.js";import{_ as Ka,a as Ba}from"./DescriptionsItem-Fk5NYKQV.js";import"./Progress-Qnd2DYUf.js";import"./group-CoHVo80F.js";const Fa=A({name:"TriggerType",__name:"trigger-type",emits:["update:value"],setup(N,{emit:S}){const u=S,h=J(),p=c=>{u("update:value",c)};return(c,m)=>{const f=ne;return j(),w(f,{value:h.value,"onUpdate:value":[m[0]||(m[0]=r=>h.value=r),p],placeholder:a(t)("common.triggerType.form"),options:a(X)(a(la))},null,8,["value","placeholder","options"])}}}),Ha=A({name:"TriggerStrategy",__name:"executor-type",emits:["update:value"],setup(N,{emit:S}){const u=J(),h=S,p=c=>{h("update:value",c)};return(c,m)=>{const f=ne;return j(),w(f,{value:u.value,"onUpdate:value":[m[0]||(m[0]=r=>u.value=r),p],placeholder:a(t)("common.executorType.form"),options:a(X)(a(oa))},null,8,["value","placeholder","options"])}}}),Ga=A({name:"TaskType",__name:"task-type",emits:["update:value"],setup(N,{emit:S}){const u=S,h=J(),p=c=>{u("update:value",c)};return(c,m)=>{const f=ne;return j(),w(f,{value:h.value,"onUpdate:value":[m[0]||(m[0]=r=>h.value=r),p],placeholder:a(t)("common.routeKey.routeForm"),options:a(X)(a(ra))},null,8,["value","placeholder","options"])}}}),La=A({name:"JobTriggerInterval",__name:"job-trigger-interval",props:re({triggerType:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(N){const S=ye(N,"modelValue"),u=N,h=Ae(),p=J(u.triggerType===2?Number(S.value):60),c=J(u.triggerType===3?S.value:"* * * * * ?");return Z(p,m=>{u.triggerType===2&&(S.value=`${m}`)},{immediate:!0}),Z(c,m=>{u.triggerType===3&&(S.value=m)},{immediate:!0}),Z(()=>u.triggerType,m=>{m===2?S.value=`${p.value}`:m===3?S.value=c.value:S.value="*"},{immediate:!0}),(m,f)=>{const r=G,y=ze,V=Me,P=Ue;return j(),oe("div",null,[m.triggerType===2?(j(),w(V,{key:0},{default:l(()=>[e(r,{value:p.value,"onUpdate:value":f[0]||(f[0]=v=>p.value=v),placeholder:m.$t("page.jobTask.form.triggerInterval")},null,8,["value","placeholder"]),e(y,null,{default:l(()=>[T(k(m.$t("common.second")),1)]),_:1})]),_:1})):m.triggerType===3?(j(),w(a(Va),{key:1,modelValue:c.value,"onUpdate:modelValue":f[1]||(f[1]=v=>c.value=v),placeholder:m.$t("page.jobTask.form.triggerInterval_CRON"),lang:a(h).locale},null,8,["modelValue","placeholder","lang"])):m.triggerType===99?(j(),w(P,{key:2,disabled:""})):De("",!0)])}}}),qe=N=>(ca("data-v-4986c603"),N=N(),ga(),N),za={class:"w-full w-full flex-col items-start gap-12px pt-5px"},qa=qe(()=>_e("div",{class:"n-form-item-label"},"Header 参数",-1)),Wa={class:"flex"},Qa=qe(()=>_e("div",{class:"mx-8px h-34px text-center line-height-34px"},"=",-1)),Ya=A({name:"JobTaskOperateDrawer",__name:"job-task-operate-drawer",props:re({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:re(["submitted"],["update:visible"]),setup(N,{emit:S}){const u=N,h=S,p=J(0),c=ye(N,"visible"),m=be({args:[{arg:""}]}),f=J(0),r=J(null),{formRef:y,validate:V,restoreValidation:P}=na(),{defaultRequiredRule:v}=sa(),E=$e(()=>({add:t("page.jobTask.addJobTask"),edit:t("page.jobTask.editJobTask")})[u.operateType]),s=be(z());function z(){return{groupName:void 0,jobName:"",argsStr:"",argsType:1,jobStatus:1,routeKey:4,executorType:1,triggerType:2,executorInfo:void 0,triggerInterval:"60",blockStrategy:1,executorTimeout:60,maxRetryTimes:3,retryInterval:1,taskType:1,parallelNum:1,description:""}}const Te={groupName:v,jobName:v,argsType:v,jobStatus:v,routeKey:v,executorType:v,executorInfo:v,triggerType:v,triggerInterval:v,blockStrategy:v,executorTimeout:v,maxRetryTimes:v,retryInterval:v,taskType:v,parallelNum:v},R=J([]),x=be(se());function se(){return{method:"POST",url:"",headers:{},body:"",mediaType:"application/json",timeout:60}}const O=[{label:"Http 执行器",value:"snailJobHttpExecutor"},{label:"CMD 执行器",value:"snailJobCMDJobExecutor"},{label:"PowerShell 执行器",value:"snailJobPowerShellJobExecutor"},{label:"Shell 执行器",value:"snailJobShellJobExecutor"}],C=be(ue());function ue(){return{method:"LOCAL_SCRIPT",scriptParams:""}}function ke(){if(u.operateType==="add"){Object.assign(s,z()),p.value=0,R.value=[],Object.assign(x,se()),Object.assign(C,ue());return}if(u.operateType==="edit"&&u.rowData){if(Object.assign(s,u.rowData),s.taskType===3&&s.argsStr&&Object.assign(m,{args:JSON.parse(s.argsStr).map(i=>({arg:i}))}),s.taskType===5&&s.argsStr){const i=JSON.parse(s.argsStr);f.value=i.shardNum,s.argsStr=i.argsStr}O.map(i=>i.value).includes(s.executorInfo)&&(p.value=1,s.executorInfo==="snailJobHttpExecutor"?(Object.assign(x,JSON.parse(s.argsStr)),x.headers&&(R.value=Object.keys(x.headers).map(i=>({key:i,value:x.headers[i]})))):Object.assign(C,JSON.parse(s.argsStr)))}}function pe(){c.value=!1}async function ie(){var F,ge,o;await V();const{id:i,groupName:n,jobName:U,argsType:b,jobStatus:q,routeKey:I,executorType:ee,executorInfo:ae,triggerType:M,triggerInterval:de,blockStrategy:K,executorTimeout:me,maxRetryTimes:ce,retryInterval:B,taskType:te,parallelNum:W,description:Q}=s;let $=te===5?JSON.stringify({shardNum:f.value,argsStr:s.argsStr}):s.argsStr;if(p.value===1&&(await((F=r.value)==null?void 0:F.validate()),s.executorInfo==="snailJobHttpExecutor"?(R.value.forEach(D=>{x.headers[D.key]=D.value}),$=JSON.stringify(x)):$=JSON.stringify(C)),u.operateType==="add"){const{error:D}=await ha({groupName:n,jobName:U,argsStr:$,argsType:b,jobStatus:q,routeKey:I,executorType:ee,executorInfo:ae,triggerType:M,triggerInterval:de,blockStrategy:K,executorTimeout:me,maxRetryTimes:ce,retryInterval:B,taskType:te,parallelNum:W,description:Q});if(D)return;(ge=window.$message)==null||ge.success(t("common.addSuccess"))}if(u.operateType==="edit"){const{error:D}=await ja({id:i,groupName:n,jobName:U,argsStr:$,argsType:b,jobStatus:q,routeKey:I,executorType:ee,executorInfo:ae,triggerType:M,triggerInterval:de,blockStrategy:K,executorTimeout:me,maxRetryTimes:ce,retryInterval:B,taskType:te,parallelNum:W,description:Q});if(D)return;(o=window.$message)==null||o.success(t("common.updateSuccess"))}pe(),h("submitted")}function he(){if(s.taskType===3&&m.args){const i=m.args.map(n=>n.arg.trim()).filter(n=>!!n);s.argsStr=i.length>0?JSON.stringify(i):""}return s.argsStr}const je=i=>{m.args.splice(i,1)},Se=()=>{m.args.push({arg:""})};Z(c,()=>{var i;c.value&&(ke(),P(),(i=r.value)==null||i.restoreValidation())}),Z(m,()=>{c.value&&s.taskType===3&&he()}),Z(()=>s.taskType,i=>{u.operateType==="add"&&c.value&&(i!==3&&(m.args=[]),i!==5&&(f.value=1),s.argsStr="")});const Ne=$e(()=>s.taskType===1?X(Pe).filter(i=>i.value!==3):X(Pe));function d(){if(p.value===0){s.executorInfo="";return}s.executorInfo="snailJobHttpExecutor"}const g=[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}],_=[{label:"需下载脚本",value:"DOWNLOAD"},{label:"脚本代码",value:"SCRIPT_CODE"},{label:"使用本地脚本",value:"LOCAL_SCRIPT"}];return(i,n)=>{const U=Ue,b=ia,q=Le,I=Ca,ee=da,ae=Ja,M=ne,de=Qe,K=L,me=We,ce=Be,B=Me,te=Oa,W=ze,Q=ma,$=Pa,F=Ea,ge=Fa;return j(),w(pa,{modelValue:c.value,"onUpdate:modelValue":n[29]||(n[29]=o=>c.value=o),title:E.value,"min-size":480,onHandleSubmit:ie},{footer:l(()=>[e(ee,{size:16},{default:l(()=>[e(K,{onClick:pe},{default:l(()=>[T(k(a(t)("common.cancel")),1)]),_:1}),e(K,{type:"primary",onClick:ie},{default:l(()=>[T(k(a(t)("common.save")),1)]),_:1})]),_:1})]),default:l(()=>[e(Q,{ref_key:"formRef",ref:y,model:s,rules:Te},{default:l(()=>[e(b,{label:a(t)("page.jobTask.jobName"),path:"jobName"},{default:l(()=>[e(U,{value:s.jobName,"onUpdate:value":n[0]||(n[0]=o=>s.jobName=o),maxlength:64,"show-count":"",placeholder:a(t)("page.jobTask.form.jobName")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(b,{label:a(t)("page.jobTask.groupName"),path:"groupName"},{default:l(()=>[e(q,{value:s.groupName,"onUpdate:value":n[1]||(n[1]=o=>s.groupName=o),disabled:u.operateType==="edit"},null,8,["value","disabled"])]),_:1},8,["label"]),e(b,{label:a(t)("page.jobTask.jobStatus"),path:"jobStatus"},{default:l(()=>[e(ae,{value:s.jobStatus,"onUpdate:value":n[2]||(n[2]=o=>s.jobStatus=o),name:"jobStatus"},{default:l(()=>[e(ee,null,{default:l(()=>[(j(!0),oe(we,null,Oe(a(Ke),o=>(j(),w(I,{key:o.value,value:o.value,label:a(t)(o.label)},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),e(b,{label:a(t)("page.jobTask.taskType"),path:"taskType"},{default:l(()=>[e(Ga,{value:s.taskType,"onUpdate:value":n[3]||(n[3]=o=>s.taskType=o),placeholder:a(t)("page.jobTask.form.taskType")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(b,{label:a(t)("page.jobTask.executorType"),path:"executorType"},{default:l(()=>[e(Ha,{value:s.executorType,"onUpdate:value":n[4]||(n[4]=o=>s.executorType=o)},null,8,["value"])]),_:1},8,["label"]),e(b,{label:a(t)("page.jobTask.executorInfo"),path:"executorInfo"},{default:l(()=>[_e("div",za,[e(ae,{value:p.value,"onUpdate:value":n[5]||(n[5]=o=>p.value=o),onChange:d},{default:l(()=>[e(I,{value:0},{default:l(()=>[T("自定义执行器")]),_:1}),e(I,{value:1},{default:l(()=>[T("内置执行器")]),_:1})]),_:1},8,["value"]),p.value===0?(j(),w(U,{key:0,value:s.executorInfo,"onUpdate:value":n[6]||(n[6]=o=>s.executorInfo=o),placeholder:a(t)("page.jobTask.form.executorInfo")},null,8,["value","placeholder"])):(j(),w(M,{key:1,value:s.executorInfo,"onUpdate:value":n[7]||(n[7]=o=>s.executorInfo=o),options:O,placeholder:"请选择内置执行器"},null,8,["value"]))])]),_:1},8,["label"]),s.taskType===5?(j(),w(b,{key:0,label:a(t)("page.jobTask.shardNum")},{default:l(()=>[e(a(G),{value:f.value,"onUpdate:value":n[8]||(n[8]=o=>f.value=o),min:1,placeholder:a(t)("page.jobTask.form.shardNum")},null,8,["value","placeholder"])]),_:1},8,["label"])):De("",!0),e(b,{label:a(t)("page.jobTask.argsStr"),path:"argsStr","show-label":p.value===0,"show-feedback":p.value===0,rule:s.taskType===3?a(v):void 0},{default:l(()=>[p.value===0?(j(),oe(we,{key:0},[s.taskType===3?(j(),w(ce,{key:0,class:"flex-col"},{default:l(()=>[(j(!0),oe(we,null,Oe(m.args,(o,D)=>(j(),w(b,{key:D,label:`分片参数 ${D+1}`,path:`args[${D}].arg`,"show-feedback":!1,class:"m-b-12px",rule:{required:!0,message:`${a(t)("page.jobTask.form.argsStr")} ${D+1}`,trigger:["input","blur"],validator(){return!!o.arg}}},{default:l(()=>[e(fe,{modelValue:o.arg,"onUpdate:modelValue":Re=>o.arg=Re,lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(K,{class:"ml-12px",type:"error",dashed:"",onClick:Re=>je(D)},{default:l(()=>[e(de,{class:"text-icon"})]),_:2},1032,["onClick"])]),_:2},1032,["label","path","rule"]))),128)),e(K,{block:"",dashed:"","attr-type":"button",onClick:Se},{default:l(()=>[e(me,{class:"text-icon"})]),_:1})]),_:1})):(j(),w(fe,{key:1,modelValue:s.argsStr,"onUpdate:modelValue":n[9]||(n[9]=o=>s.argsStr=o),lang:"json",placeholder:a(t)("page.jobTask.form.argsStr")},null,8,["modelValue","placeholder"]))],64)):s.executorInfo==="snailJobHttpExecutor"?(j(),w(Q,{key:1,ref_key:"customformRef",ref:r,class:"w-full",model:x},{default:l(()=>[e(b,{label:"请求参数",rule:a(v),path:"url"},{default:l(()=>[e(B,null,{default:l(()=>[e(M,{value:x.method,"onUpdate:value":n[10]||(n[10]=o=>x.method=o),class:"http-method",options:g},null,8,["value"]),e(U,{value:x.url,"onUpdate:value":n[11]||(n[11]=o=>x.url=o),placeholder:"请输入请求地址",class:"w-full"},null,8,["value"])]),_:1})]),_:1},8,["rule"]),e(b,{label:"Media Type"},{default:l(()=>[e(U,{value:x.mediaType,"onUpdate:value":n[12]||(n[12]=o=>x.mediaType=o),placeholder:"请输入 Media Type"},null,8,["value"])]),_:1}),qa,e(te,{value:R.value,"onUpdate:value":n[15]||(n[15]=o=>R.value=o),class:ua(R.value.length?void 0:"mb-24px"),"item-style":"margin-bottom: 0;","on-create":()=>({key:"",value:""})},{default:l(({index:o})=>[_e("div",Wa,[e(b,{"ignore-path-change":"","show-label":!1,path:`headers[${o}].key`,rule:{required:!0,message:"请输入键",trigger:["input","blur"],validator:()=>a(Ve)(R.value[o].key)}},{default:l(()=>[e(U,{value:R.value[o].key,"onUpdate:value":D=>R.value[o].key=D,placeholder:"Key",onKeydown:n[13]||(n[13]=Ce(Je(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"]),Qa,e(b,{"ignore-path-change":"","show-label":!1,path:`headers[${o}].value`,rule:{required:!0,message:"请输入值",trigger:["input","blur"],validator:()=>a(Ve)(R.value[o].value)}},{default:l(()=>[e(U,{value:R.value[o].value,"onUpdate:value":D=>R.value[o].value=D,placeholder:"Value",onKeydown:n[14]||(n[14]=Ce(Je(()=>{},["prevent"]),["enter"]))},null,8,["value","onUpdate:value"])]),_:2},1032,["path","rule"])])]),_:1},8,["value","class"]),e(b,{label:"Body 参数"},{default:l(()=>[e(fe,{modelValue:x.body,"onUpdate:modelValue":n[16]||(n[16]=o=>x.body=o),lang:"json",placeholder:"请输入 Body 参数"},null,8,["modelValue"])]),_:1}),e(b,{label:"接口超时时间"},{default:l(()=>[e(B,null,{default:l(()=>[e(a(G),{value:x.timeout,"onUpdate:value":n[17]||(n[17]=o=>x.timeout=o),class:"w-full",min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(W,null,{default:l(()=>[T(k(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):(j(),w(Q,{key:2,ref_key:"customformRef",ref:r,class:"w-full",model:C},{default:l(()=>[e(b,{label:"脚本类型"},{default:l(()=>[e(M,{value:C.method,"onUpdate:value":n[18]||(n[18]=o=>C.method=o),options:_},null,8,["value"])]),_:1}),e(b,{label:"脚本参数"},{default:l(()=>[e(fe,{modelValue:C.scriptParams,"onUpdate:modelValue":n[19]||(n[19]=o=>C.scriptParams=o),lang:"json",placeholder:"请输入脚本参数"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))]),_:1},8,["label","show-label","show-feedback","rule"]),e(F,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.routeKey"),path:"routeKey"},{default:l(()=>[e($a,{value:s.routeKey,"onUpdate:value":n[20]||(n[20]=o=>s.routeKey=o),"task-type":s.taskType},null,8,["value","task-type"])]),_:1},8,["label"])]),_:1}),e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.blockStrategy"),path:"blockStrategy"},{default:l(()=>[e(M,{value:s.blockStrategy,"onUpdate:value":n[21]||(n[21]=o=>s.blockStrategy=o),placeholder:a(t)("common.blockStrategy.form"),options:Ne.value},null,8,["value","placeholder","options"])]),_:1},8,["label"])]),_:1})]),_:1}),e(F,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.triggerType"),path:"triggerType"},{default:l(()=>[e(ge,{value:s.triggerType,"onUpdate:value":n[22]||(n[22]=o=>s.triggerType=o),placeholder:a(t)("page.jobTask.form.triggerType")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.triggerInterval"),path:"triggerInterval"},{default:l(()=>[e(La,{modelValue:s.triggerInterval,"onUpdate:modelValue":n[23]||(n[23]=o=>s.triggerInterval=o),"trigger-type":s.triggerType},null,8,["modelValue","trigger-type"])]),_:1},8,["label"])]),_:1})]),_:1}),e(F,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.executorTimeout"),path:"executorTimeout"},{default:l(()=>[e(B,null,{default:l(()=>[e(a(G),{value:s.executorTimeout,"onUpdate:value":n[24]||(n[24]=o=>s.executorTimeout=o),min:1,max:99999999,placeholder:a(t)("page.jobTask.form.executorTimeout"),clearable:""},null,8,["value","placeholder"]),e(W,null,{default:l(()=>[T(k(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.maxRetryTimes"),path:"maxRetryTimes"},{default:l(()=>[e(a(G),{value:s.maxRetryTimes,"onUpdate:value":n[25]||(n[25]=o=>s.maxRetryTimes=o),min:0,max:999,placeholder:a(t)("page.jobTask.form.maxRetryTimes"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),e(F,{cols:"2 s:1 m:2",responsive:"screen","x-gap":"20"},{default:l(()=>[e($,null,{default:l(()=>[e(b,{label:a(t)("page.jobTask.retryInterval"),path:"retryInterval"},{default:l(()=>[e(B,null,{default:l(()=>[e(a(G),{value:s.retryInterval,"onUpdate:value":n[26]||(n[26]=o=>s.retryInterval=o),min:1,max:99999999,placeholder:a(t)("page.jobTask.form.retryInterval"),clearable:""},null,8,["value","placeholder"]),e(W,null,{default:l(()=>[T(k(a(t)("common.second")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1}),e($,null,{default:l(()=>[s.taskType!==1?(j(),w(b,{key:0,label:a(t)("page.jobTask.parallelNum"),path:"parallelNum"},{default:l(()=>[e(a(G),{value:s.parallelNum,"onUpdate:value":n[27]||(n[27]=o=>s.parallelNum=o),min:1,max:999,placeholder:a(t)("page.jobTask.form.parallelNum"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])):De("",!0)]),_:1})]),_:1}),e(b,{label:a(t)("page.jobTask.description"),path:"description"},{default:l(()=>[e(U,{value:s.description,"onUpdate:value":n[28]||(n[28]=o=>s.description=o),type:"textarea",placeholder:a(t)("page.jobTask.form.description")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),Za=ba(Ya,[["__scopeId","data-v-4986c603"]]),Xa=A({name:"JobTaskSearch",__name:"job-task-search",props:{model:{required:!0},modelModifiers:{}},emits:re(["reset","search"],["update:model"]),setup(N,{emit:S}){const u=S,h=ye(N,"model");function p(){u("reset")}function c(){u("search")}return(m,f)=>{const r=wa,y=Ue,V=ne,P=Ye;return j(),w(P,{model:h.value,onSearch:c,onReset:p},{default:l(()=>[e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.groupName"),path:"groupName",class:"pr-24px"},{default:l(()=>[e(Le,{value:h.value.groupName,"onUpdate:value":f[0]||(f[0]=v=>h.value.groupName=v),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.jobName"),path:"jobName",class:"pr-24px"},{default:l(()=>[e(y,{value:h.value.jobName,"onUpdate:value":f[1]||(f[1]=v=>h.value.jobName=v),placeholder:a(t)("page.jobTask.form.jobName"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{span:"24 s:12 m:6",label:a(t)("page.jobTask.jobStatus"),path:"jobStatus",class:"pr-24px"},{default:l(()=>[e(V,{value:h.value.jobStatus,"onUpdate:value":f[2]||(f[2]=v=>h.value.jobStatus=v),placeholder:a(t)("page.jobTask.form.jobStatus"),options:a(X)(a(Ke)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),et=A({name:"JobTaskDetailDrawer",__name:"job-task-detail-drawer",props:re({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(N){const S=ye(N,"visible");return(u,h)=>{const p=Ka,c=ve,m=Ba,f=Ma;return j(),w(f,{modelValue:S.value,"onUpdate:modelValue":h[0]||(h[0]=r=>S.value=r),title:a(t)("page.jobTask.detail"),width:["50%","90%"]},{default:l(()=>[e(m,{"label-placement":"top",bordered:"",column:2},{default:l(()=>[e(p,{label:a(t)("page.jobTask.groupName")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.groupName),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.jobName")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.jobName),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.taskType")},{default:l(()=>{var r;return[e(c,{type:a(Y)((r=u.rowData)==null?void 0:r.taskType)},{default:l(()=>{var y;return[T(k(a(t)(a(Fe)[(y=u.rowData)==null?void 0:y.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.argsStr")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.argsStr),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.nextTriggerAt")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.nextTriggerAt),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.jobStatus")},{default:l(()=>{var r;return[e(c,{type:a(Y)((r=u.rowData)==null?void 0:r.jobStatus)},{default:l(()=>{var y;return[T(k(a(t)(a(fa)[(y=u.rowData)==null?void 0:y.jobStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.routeKey")},{default:l(()=>{var r;return[e(c,{type:a(Y)((r=u.rowData)==null?void 0:r.routeKey)},{default:l(()=>{var y;return[T(k(a(t)(a(va)[(y=u.rowData)==null?void 0:y.routeKey])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.executorType")},{default:l(()=>{var r;return[e(c,{type:a(Y)((r=u.rowData)==null?void 0:r.executorType)},{default:l(()=>{var y;return[T(k(a(t)(a(_a)[(y=u.rowData)==null?void 0:y.executorType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.executorInfo")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.executorInfo),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.triggerType")},{default:l(()=>{var r;return[e(c,{type:a(Y)((r=u.rowData)==null?void 0:r.triggerType)},{default:l(()=>{var y;return[T(k(a(t)(a(He)[(y=u.rowData)==null?void 0:y.triggerType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.triggerInterval")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.triggerInterval),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.blockStrategy")},{default:l(()=>{var r;return[e(c,{type:a(Y)((r=u.rowData)==null?void 0:r.blockStrategy)},{default:l(()=>{var y;return[T(k(a(t)(a(Ge)[(y=u.rowData)==null?void 0:y.blockStrategy])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.executorTimeout")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.executorTimeout),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.maxRetryTimes")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.maxRetryTimes),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.retryInterval")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.retryInterval),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.parallelNum")},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.parallelNum),1)]}),_:1},8,["label"]),e(p,{label:a(t)("page.jobTask.description"),span:2},{default:l(()=>{var r;return[T(k((r=u.rowData)==null?void 0:r.description),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),at={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function H(N){return typeof N=="function"||Object.prototype.toString.call(N)==="[object Object]"&&!ka(N)}const yt=A({name:"job_task",__name:"index",setup(N){const{hasAuth:S}=Ra(),u=Ae(),{routerPushByKey:h}=ya(),p=J(),{bool:c,setTrue:m}=Ta(!1),{columnChecks:f,columns:r,data:y,getData:V,loading:P,mobilePagination:v,searchParams:E,resetSearchParams:s}=Ia({apiFn:Sa,apiParams:{page:1,size:10,groupName:null,jobName:null,jobStatus:null},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:t("common.index"),align:"center",width:48},{key:"jobName",title:t("page.jobTask.jobName"),align:"center",width:140,fixed:"left",render:d=>{async function g(){p.value=d,m()}return e(L,{text:!0,tag:"a",type:"primary",onClick:g,class:"ws-normal"},{default:()=>[`${d.jobName}`]})}},{key:"groupName",title:t("page.jobTask.groupName"),align:"left",width:180},{key:"nextTriggerAt",title:t("page.jobTask.nextTriggerAt"),align:"center",width:120},{key:"jobStatus",title:t("page.jobTask.jobStatus"),align:"center",width:60,render:d=>{const g=async(_,i)=>{var U;const{error:n}=await xa({id:d.id,jobStatus:_});n||(d.jobStatus=_,(U=window.$message)==null||U.success(t("common.updateSuccess"))),i()};return e(Ua,{value:d.jobStatus,"onUpdate:value":_=>d.jobStatus=_,onFetch:g},null)}},{key:"taskType",title:t("page.jobTask.taskType"),align:"center",width:120,render:d=>{if(d.taskType===null)return null;const g={1:"info",2:"success",3:"error",4:"primary",5:"warning"},_=t(Fe[d.taskType]);return e(ve,{type:g[d.taskType]},H(_)?_:{default:()=>[_]})}},{key:"triggerType",title:t("page.jobTask.triggerType"),align:"center",width:120,render:d=>{if(d.triggerType===null)return null;const g={2:"info",3:"success",99:"error"},_=t(He[d.triggerType]);return e(ve,{type:g[d.triggerType]},H(_)?_:{default:()=>[_]})}},{key:"triggerInterval",title:t("page.jobTask.triggerInterval"),align:"center",width:80},{key:"blockStrategy",title:t("page.jobTask.blockStrategy"),align:"center",width:80,render:d=>{if(d.blockStrategy===null)return null;const g={1:"info",2:"success",3:"error",4:"warning"},_=t(Ge[d.blockStrategy]);return e(ve,{type:g[d.blockStrategy]},H(_)?_:{default:()=>[_]})}},{key:"executorTimeout",title:t("page.jobTask.executorTimeout"),align:"center",width:80},{key:"updateDt",title:t("page.jobTask.updateDt"),align:"center",width:120},{key:"operate",title:t("common.operate"),align:"center",width:180,fixed:"right",render:d=>{let g,_;return e("div",{class:"flex-center gap-8px"},[e(xe,{onPositiveClick:()=>he(d.id)},{default:()=>t("common.confirmExecute"),trigger:()=>{let i;return e(L,{type:"error",text:!0,ghost:!0,size:"small"},H(i=t("common.execute"))?i:{default:()=>[i]})}}),e(Ie,{vertical:!0},null),e(L,{type:"primary",ghost:!0,text:!0,size:"small",onClick:()=>je(d.id)},H(g=t("common.batchList"))?g:{default:()=>[g]}),e(Ie,{vertical:!0},null),e(L,{type:"warning",ghost:!0,text:!0,size:"small",onClick:()=>ie(d.id)},H(_=t("common.edit"))?_:{default:()=>[_]}),e(Ie,{vertical:!0},null),e(xe,{onPositiveClick:()=>ke(d.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let i;return e(L,{type:"error",text:!0,ghost:!0,size:"small"},H(i=t("common.delete"))?i:{default:()=>[i]})}})])}}]}),{drawerVisible:z,operateType:Te,editingData:R,handleAdd:x,handleEdit:se,checkedRowKeys:O,onDeleted:C,onBatchDeleted:ue}=Da(y,V);async function ke(d){const{error:g}=await Ee([d]);g||C()}async function pe(){const{error:d}=await Ee(O.value);d||ue()}function ie(d){se(d)}async function he(d){var _,i;const{error:g}=await Na(d);g?(_=window.$message)==null||_.error(t("common.executeFailed")):(i=window.$message)==null||i.success(t("common.executeSuccess"))}function je(d){const g=y.value.find(_=>_.id===d);h("job_batch",{state:{jobId:d,jobName:g.jobName}})}function Se(){return{jobIds:O.value,groupName:E.groupName,jobName:E.jobName,jobStatus:E.jobStatus}}function Ne(){Xe("/job/export",Se(),t("page.jobTask.title"))}return(d,g)=>{const _=ta,i=ea,n=aa,U=Ze,b=Aa,q=Be;return j(),oe("div",at,[e(Xa,{model:a(E),"onUpdate:model":g[0]||(g[0]=I=>le(E)?E.value=I:null),onReset:a(s),onSearch:a(V)},null,8,["model","onReset","onSearch"]),e(_),e(q,{title:a(t)("page.jobTask.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":l(()=>[e(U,{columns:a(f),"onUpdate:columns":g[1]||(g[1]=I=>le(f)?f.value=I:null),loading:a(P),"disabled-delete":a(O).length===0,"show-delete":a(S)("R_ADMIN"),onAdd:a(x),onDelete:pe,onRefresh:a(V)},{addAfter:l(()=>[e(i,{action:"/job/import",accept:"application/json",onRefresh:a(V)},null,8,["onRefresh"]),e(a(xe),{onPositiveClick:Ne},{trigger:l(()=>[e(a(L),{size:"small",ghost:"",type:"primary",disabled:a(O).length===0&&a(S)("R_USER")},{icon:l(()=>[e(n,{class:"text-icon"})]),default:l(()=>[T(" "+k(a(t)("common.export")),1)]),_:1},8,["disabled"])]),default:l(()=>[T(k(a(O).length===0?a(t)("common.exportAll"):a(t)("common.exportPar",{num:a(O).length})),1)]),_:1})]),_:1},8,["columns","loading","disabled-delete","show-delete","onAdd","onRefresh"])]),default:l(()=>[e(b,{"checked-row-keys":a(O),"onUpdate:checkedRowKeys":g[2]||(g[2]=I=>le(O)?O.value=I:null),columns:a(r),data:a(y),"flex-height":!a(u).isMobile,"scroll-x":2e3,loading:a(P),remote:"","row-key":I=>I.id,pagination:a(v),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),e(Za,{visible:a(z),"onUpdate:visible":g[3]||(g[3]=I=>le(z)?z.value=I:null),"operate-type":a(Te),"row-data":a(R),onSubmitted:a(V)},null,8,["visible","operate-type","row-data","onSubmitted"]),e(et,{visible:a(c),"onUpdate:visible":g[4]||(g[4]=I=>le(c)?c.value=I:null),"row-data":p.value},null,8,["visible","row-data"])])}}});export{yt as default};
