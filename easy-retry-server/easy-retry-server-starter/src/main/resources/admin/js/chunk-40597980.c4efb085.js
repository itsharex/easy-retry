(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40597980"],{"00d8":function(e,r){(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(e,r){return e<<r|e>>>32-r},rotr:function(e,r){return e<<32-r|e>>>r},endian:function(e){if(e.constructor==Number)return 16711935&t.rotl(e,8)|4278255360&t.rotl(e,24);for(var r=0;r<e.length;r++)e[r]=t.endian(e[r]);return e},randomBytes:function(e){for(var r=[];e>0;e--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(e){for(var r=[],t=0,n=0;t<e.length;t++,n+=8)r[n>>>5]|=e[t]<<24-n%32;return r},wordsToBytes:function(e){for(var r=[],t=0;t<32*e.length;t+=8)r.push(e[t>>>5]>>>24-t%32&255);return r},bytesToHex:function(e){for(var r=[],t=0;t<e.length;t++)r.push((e[t]>>>4).toString(16)),r.push((15&e[t]).toString(16));return r.join("")},hexToBytes:function(e){for(var r=[],t=0;t<e.length;t+=2)r.push(parseInt(e.substr(t,2),16));return r},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var a=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?t.push(r.charAt(a>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,a=0;n<e.length;a=++n%4)0!=a&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*a+8)-1)<<2*a|r.indexOf(e.charAt(n))>>>6-2*a);return t}};e.exports=t})()},"044b":function(e,r){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||n(e)||!!e._isBuffer)}},6821:function(e,r,t){(function(){var r=t("00d8"),n=t("9a634").utf8,a=t("044b"),o=t("9a634").bin,s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):n.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var i=r.bytesToWords(e),u=8*e.length,c=1732584193,l=-271733879,f=-1732584194,d=271733878,p=0;p<i.length;p++)i[p]=16711935&(i[p]<<8|i[p]>>>24)|4278255360&(i[p]<<24|i[p]>>>8);i[u>>>5]|=128<<u%32,i[14+(u+64>>>9<<4)]=u;var m=s._ff,h=s._gg,g=s._hh,v=s._ii;for(p=0;p<i.length;p+=16){var b=c,y=l,w=f,_=d;c=m(c,l,f,d,i[p+0],7,-680876936),d=m(d,c,l,f,i[p+1],12,-389564586),f=m(f,d,c,l,i[p+2],17,606105819),l=m(l,f,d,c,i[p+3],22,-1044525330),c=m(c,l,f,d,i[p+4],7,-176418897),d=m(d,c,l,f,i[p+5],12,1200080426),f=m(f,d,c,l,i[p+6],17,-1473231341),l=m(l,f,d,c,i[p+7],22,-45705983),c=m(c,l,f,d,i[p+8],7,1770035416),d=m(d,c,l,f,i[p+9],12,-1958414417),f=m(f,d,c,l,i[p+10],17,-42063),l=m(l,f,d,c,i[p+11],22,-1990404162),c=m(c,l,f,d,i[p+12],7,1804603682),d=m(d,c,l,f,i[p+13],12,-40341101),f=m(f,d,c,l,i[p+14],17,-1502002290),l=m(l,f,d,c,i[p+15],22,1236535329),c=h(c,l,f,d,i[p+1],5,-165796510),d=h(d,c,l,f,i[p+6],9,-1069501632),f=h(f,d,c,l,i[p+11],14,643717713),l=h(l,f,d,c,i[p+0],20,-373897302),c=h(c,l,f,d,i[p+5],5,-701558691),d=h(d,c,l,f,i[p+10],9,38016083),f=h(f,d,c,l,i[p+15],14,-660478335),l=h(l,f,d,c,i[p+4],20,-405537848),c=h(c,l,f,d,i[p+9],5,568446438),d=h(d,c,l,f,i[p+14],9,-1019803690),f=h(f,d,c,l,i[p+3],14,-187363961),l=h(l,f,d,c,i[p+8],20,1163531501),c=h(c,l,f,d,i[p+13],5,-1444681467),d=h(d,c,l,f,i[p+2],9,-51403784),f=h(f,d,c,l,i[p+7],14,1735328473),l=h(l,f,d,c,i[p+12],20,-1926607734),c=g(c,l,f,d,i[p+5],4,-378558),d=g(d,c,l,f,i[p+8],11,-2022574463),f=g(f,d,c,l,i[p+11],16,1839030562),l=g(l,f,d,c,i[p+14],23,-35309556),c=g(c,l,f,d,i[p+1],4,-1530992060),d=g(d,c,l,f,i[p+4],11,1272893353),f=g(f,d,c,l,i[p+7],16,-155497632),l=g(l,f,d,c,i[p+10],23,-1094730640),c=g(c,l,f,d,i[p+13],4,681279174),d=g(d,c,l,f,i[p+0],11,-358537222),f=g(f,d,c,l,i[p+3],16,-722521979),l=g(l,f,d,c,i[p+6],23,76029189),c=g(c,l,f,d,i[p+9],4,-640364487),d=g(d,c,l,f,i[p+12],11,-421815835),f=g(f,d,c,l,i[p+15],16,530742520),l=g(l,f,d,c,i[p+2],23,-995338651),c=v(c,l,f,d,i[p+0],6,-198630844),d=v(d,c,l,f,i[p+7],10,1126891415),f=v(f,d,c,l,i[p+14],15,-1416354905),l=v(l,f,d,c,i[p+5],21,-57434055),c=v(c,l,f,d,i[p+12],6,1700485571),d=v(d,c,l,f,i[p+3],10,-1894986606),f=v(f,d,c,l,i[p+10],15,-1051523),l=v(l,f,d,c,i[p+1],21,-2054922799),c=v(c,l,f,d,i[p+8],6,1873313359),d=v(d,c,l,f,i[p+15],10,-30611744),f=v(f,d,c,l,i[p+6],15,-1560198380),l=v(l,f,d,c,i[p+13],21,1309151649),c=v(c,l,f,d,i[p+4],6,-145523070),d=v(d,c,l,f,i[p+11],10,-1120210379),f=v(f,d,c,l,i[p+2],15,718787259),l=v(l,f,d,c,i[p+9],21,-343485551),c=c+b>>>0,l=l+y>>>0,f=f+w>>>0,d=d+_>>>0}return r.endian([c,l,f,d])};s._ff=function(e,r,t,n,a,o,s){var i=e+(r&t|~r&n)+(a>>>0)+s;return(i<<o|i>>>32-o)+r},s._gg=function(e,r,t,n,a,o,s){var i=e+(r&n|t&~n)+(a>>>0)+s;return(i<<o|i>>>32-o)+r},s._hh=function(e,r,t,n,a,o,s){var i=e+(r^t^n)+(a>>>0)+s;return(i<<o|i>>>32-o)+r},s._ii=function(e,r,t,n,a,o,s){var i=e+(t^(r|~n))+(a>>>0)+s;return(i<<o|i>>>32-o)+r},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}})()},"88bc":function(e,r,t){(function(r){var t=1/0,n=9007199254740991,a="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",i="[object Symbol]",u="object"==typeof r&&r&&r.Object===Object&&r,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")();function f(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function d(e,r){var t=-1,n=e?e.length:0,a=Array(n);while(++t<n)a[t]=r(e[t],t,e);return a}function p(e,r){var t=-1,n=r.length,a=e.length;while(++t<n)e[a+t]=r[t];return e}var m=Object.prototype,h=m.hasOwnProperty,g=m.toString,v=l.Symbol,b=m.propertyIsEnumerable,y=v?v.isConcatSpreadable:void 0,w=Math.max;function _(e,r,t,n,a){var o=-1,s=e.length;t||(t=j),a||(a=[]);while(++o<s){var i=e[o];r>0&&t(i)?r>1?_(i,r-1,t,n,a):p(a,i):n||(a[a.length]=i)}return a}function I(e,r){return e=Object(e),x(e,r,(function(r,t){return t in e}))}function x(e,r,t){var n=-1,a=r.length,o={};while(++n<a){var s=r[n],i=e[s];t(i,s)&&(o[s]=i)}return o}function T(e,r){return r=w(void 0===r?e.length-1:r,0),function(){var t=arguments,n=-1,a=w(t.length-r,0),o=Array(a);while(++n<a)o[n]=t[r+n];n=-1;var s=Array(r+1);while(++n<r)s[n]=t[n];return s[r]=o,f(e,this,s)}}function j(e){return k(e)||S(e)||!!(y&&e&&e[y])}function C(e){if("string"==typeof e||F(e))return e;var r=e+"";return"0"==r&&1/e==-t?"-0":r}function S(e){return P(e)&&h.call(e,"callee")&&(!b.call(e,"callee")||g.call(e)==a)}var k=Array.isArray;function N(e){return null!=e&&A(e.length)&&!q(e)}function P(e){return O(e)&&N(e)}function q(e){var r=B(e)?g.call(e):"";return r==o||r==s}function A(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function B(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}function O(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||O(e)&&g.call(e)==i}var L=T((function(e,r){return null==e?{}:I(e,d(_(r,1),C))}));e.exports=L}).call(this,t("c8ba"))},"9a634":function(e,r){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var r=[],t=0;t<e.length;t++)r.push(255&e.charCodeAt(t));return r},bytesToString:function(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")}}};e.exports=t},bf80:function(e,r,t){"use strict";t.r(r);t("b0c0");var n=function(){var e=this,r=e._self._c;return r("div",[r("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},attrs:{content:"create"===e.formType?"新增用户":"更新用户信息"},on:{back:function(){return e.$router.go(-1)}}},[r("div")]),r("a-card",{staticClass:"card",attrs:{title:"",bordered:!1}},[r("a-form",e._b({attrs:{form:e.form,"body-style":{padding:"24px 32px"}},on:{submit:e.handleSubmit}},"a-form",e.formItemLayout,!1),[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}})],1),r("a-form-item",{attrs:{label:"用户名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入用户名",whitespace:!0}]}],expression:"[\n            'username',\n            {rules: [{ required: true, message: '请输入用户名', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入用户名"}})],1),"edit"===e.formType?r("a-form-item",{attrs:{label:"修改密码"}},[r("a-switch",{attrs:{"checked-children":"修改","un-checked-children":"不修改"},on:{change:e.onChange}})],1):e._e(),e.updatePass?r("a-form-item",{attrs:{label:"密码"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码",whitespace:!0},{validator:e.validatePass,trigger:["change","blur"]}]}],expression:"[\n            'password',\n            {rules: [{ required: true, message: '请输入密码', whitespace: true}, {validator: validatePass, trigger: ['change', 'blur']}]}\n          ]"}],attrs:{placeholder:"请输入密码",type:"password",autocomplete:"off"}})],1):e._e(),e.updatePass?r("a-form-item",{attrs:{label:"确认密码"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["checkPassword",{rules:[{required:!0,message:"请输入确认密码",whitespace:!0},{validator:e.validateCheckPass,trigger:["change","blur"]}]}],expression:"[\n            'checkPassword',\n            {rules: [{ required: true, message: '请输入确认密码', whitespace: true}, {validator: validateCheckPass, trigger: ['change', 'blur']}]}\n          ]"}],attrs:{placeholder:"请输入确认密码",type:"password",autocomplete:"off"}})],1):e._e(),r("a-form-item",{attrs:{label:"角色"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["role",{rules:[{required:!0,message:"请选择角色"}]}],expression:"[\n            'role',\n            {rules: [{ required: true, message: '请选择角色'}]}\n          ]"}],attrs:{placeholder:"请选择角色"},on:{change:function(r){return e.handleChange(r)}}},[r("a-select-option",{attrs:{value:"1"}},[e._v("普通用户")]),r("a-select-option",{attrs:{value:"2"}},[e._v("管理员")])],1)],1),"2"!==e.role?r("a-form-item",{attrs:{label:"命名空间"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["namespaceIds",{rules:[{required:!0,message:"请分配命名空间"}]}],expression:"[\n            'namespaceIds',\n            {rules: [{ required: true, message: '请分配命名空间'}]}\n          ]"}],staticStyle:{width:"100%"},attrs:{mode:"tags","token-separators":[","]},on:{change:function(r){return e.handleNamespacesIdChange(r)}}},e._l(e.namespaceList,(function(t,n){return r("a-select-option",{key:n,attrs:{value:t.uniqueId}},[e._v(" "+e._s(t.name)+" ("+e._s(t.uniqueId)+") ")])})),1)],1):e._e(),"2"!==e.role?r("a-form-item",{attrs:{label:"组"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["permissions",{rules:[{required:!0,message:"请分配组"}]}],expression:"[\n            'permissions',\n            {rules: [{ required: true, message: '请分配组'}]}\n          ]"}],staticStyle:{width:"100%"},attrs:{mode:"tags","token-separators":[","]}},e._l(e.groupNameList,(function(t,n){return r("a-select-option",{key:n,attrs:{value:t.groupName+"@"+t.namespaceId}},[e._v(" "+e._s(t.groupName)+" ("+e._s(t.namespaceId)+") ")])})),1)],1):e._e(),r("a-form-item",{attrs:{"wrapper-col":{xs:{span:24,offset:0},sm:{span:16,offset:8},lg:{span:7}}}},[r("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")])],1)],1)],1)],1)},a=[],o=t("3835"),s=(t("0481"),t("4069"),t("d81d"),t("4de4"),t("d3b7"),t("25f0"),t("6821")),i=t.n(s),u=t("0fea"),c=t("88bc"),l=t.n(c),f={name:"UserForm",props:{},data:function(){return{form:this.$form.createForm(this),role:0,formType:"create",formItemLayout:{labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}},groupNameList:[],namespaceList:[],updatePass:!0}},mounted:function(){var e=this;Object(u["n"])().then((function(r){e.namespaceList=r.data})),this.$nextTick((function(){e.$route.query.username&&(e.updatePass=!1,Object(u["C"])({username:e.$route.query.username}).then((function(r){e.loadEditInfo(r.data)})))}))},methods:{handleChange:function(e){this.role=e},handleNamespacesIdChange:function(e){var r=this;Object(u["b"])(e).then((function(e){r.groupNameList=e.data}))},handleSubmit:function(e){var r=this;e.preventDefault(),this.form.validateFields((function(e,t){e||(t.password&&(t.password=i()(t.password)),t.permissions&&(t["permissions"]=t.permissions.map((function(e){var t=e.split("@"),n=Object(o["a"])(t,2),a=n[0],s=n[1];return r.groupNameList.filter((function(e){return e.groupName===a&&e.namespaceId===s}))})).flat()),t.role=parseInt(t.role),Object(u["P"])(t).then((function(e){r.$message.success("操作成功"),r.$router.push("/user-list")})))}))},validatePass:function(e,r,t){r&&""!==this.form.getFieldValue("checkPassword")&&this.form.validateFields(["checkPassword"],(function(e,r){})),t()},validateCheckPass:function(e,r,t){r&&(r!==this.form.getFieldValue("password")?t(new Error("两次密码不匹配!")):t())},loadEditInfo:function(e){var r=this;this.formType="edit";var t=this.form;new Promise((function(e){setTimeout(e,100)})).then((function(){var n=l()(e,["id","username","role","permissions","namespaceIds"]);n.role=n.role.toString(),r.role=n.role,n.namespaceIds=n.namespaceIds.map((function(e){return e.uniqueId})),n.permissions=n.permissions.map((function(e){return e.groupName+"@"+e.namespaceId})),t.setFieldsValue(n),r.handleNamespacesIdChange(n.namespaceIds)}))},onChange:function(e){this.updatePass=e}}},d=f,p=t("2877"),m=Object(p["a"])(d,n,a,!1,null,"ec6f39ae",null);r["default"]=m.exports}}]);