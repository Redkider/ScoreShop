(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/logintype"],{"0f7a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(e("a34a")),o=e("23f2"),u=e("2f62");e("416d");function a(n){return n&&n.__esModule?n:{default:n}}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){c(n,t,e[t])})}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n,t,e,r,o,u,a){try{var i=n[u](a),c=i.value}catch(f){return void e(f)}i.done?t(c):Promise.resolve(c).then(r,o)}function s(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var u=n.apply(t,e);function a(n){f(u,r,o,a,i,"next",n)}function i(n){f(u,r,o,a,i,"throw",n)}a(void 0)})}}var l={data:function(){return{isAuthLoginShow:!1}},onLoad:function(t){var e=this;this.code=t.code,this.code&&this.$get(o.wechatH5Login,{code:this.code}).then(function(){var t=s(r.default.mark(function t(o){var u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(o.data.login){t.next=5;break}e.user_info=o.data.user_info.original,n.showModal({content:"你尚未绑定账号，是否跳转登录页面？",success:function(t){if(t.confirm){var r="/pages/public/login?userInfo=".concat(JSON.stringify(e.user_info));n.navigateTo({url:r})}}}),t.next=10;break;case 5:return t.next=7,e.login(o.data.user_info);case 7:e.$api.msg("已为您授权登录"),u="/pages/user/user",n.reLaunch({url:u});case 10:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}())},methods:i({},(0,u.mapMutations)(["login"]),{navTo:function(t){n.navigateTo({url:t})},toAuthLogin:function(){},isWechat:function(){var n=window.navigator.userAgent.toLowerCase();return"micromessenger"==n.match(/micromessenger/i)}})};t.default=l}).call(this,e("6e42")["default"])},"3cdb":function(n,t,e){"use strict";var r=e("8c20"),o=e.n(r);o.a},"429e":function(n,t,e){"use strict";var r,o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return r})},"56ed":function(n,t,e){"use strict";(function(n){e("8cfb"),e("921b");r(e("66fd"));var t=r(e("714a"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"714a":function(n,t,e){"use strict";e.r(t);var r=e("429e"),o=e("a071");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("3cdb");var a,i=e("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=c.exports},"8c20":function(n,t,e){},a071:function(n,t,e){"use strict";e.r(t);var r=e("0f7a"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t["default"]=o.a}},[["56ed","common/runtime","common/vendor"]]]);