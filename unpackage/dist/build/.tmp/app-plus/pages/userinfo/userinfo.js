(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userinfo/userinfo"],{"33b9":function(e,t,n){},4290:function(e,t,n){"use strict";(function(e){n("8cfb"),n("921b");a(n("66fd"));var t=a(n("e529"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},da84:function(e,t,n){"use strict";var a={"rf-loading":()=>n.e("components/rf-loading/rf-loading").then(n.bind(null,"6109")),"rf-load-progress":()=>n.e("components/rf-load-progress/rf-load-progress").then(n.bind(null,"00e1"))},r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},db04:function(e,t,n){"use strict";var a=n("33b9"),r=n.n(a);r.a},e529:function(e,t,n){"use strict";n.r(t);var a=n("da84"),r=n("ec57");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("db04");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"4f35355c",null,!1,a["a"],i);t["default"]=c.exports},ec57:function(e,t,n){"use strict";n.r(t);var a=n("feca"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},feca:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a")),r=n("0142"),o=i(n("f0be"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,a,r,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(a,r)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){s(o,a,r,i,u,"next",e)}function u(e){s(o,a,r,i,u,"throw",e)}i(void 0)})}}var l=n("93c7"),d=function(){return n.e("components/rf-avatar/rf-avatar").then(n.bind(null,"8669"))},p={components:{avatar:d},data:function(){return{loadProgress:0,CustomBar:this.CustomBar,profileInfo:{},avatar:null,genders:[{value:"0",name:"未知"},{value:"1",name:"男"},{value:"2",name:"女"}],date:(0,o.default)().format("YYYY-MM-DD"),token:null,loading:!0}},onLoad:function(){this.initData()},methods:{uploadImage:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.handleUploadFile(e.tempFilePaths)}})},handleUploadFile:function(t){var n=this,a=t.path||t[0];e.uploadFile({url:r.uploadImage,filePath:a,name:"file",header:{"x-api-key":n.token,"merchant-id":1},formData:{"access-token":n.token,"merchant-id":1},success:function(t){e.hideLoading();var a=JSON.parse(t.data);200===a.code?(n.profileInfo.head_portrait=a.data.url,n.handleUpdateInfo(n.profileInfo)):this.$api.msg("data.message")}})},bindDateChange:function(e){this.date=e.target.value},initData:function(){this.token=e.getStorageSync("accessToken")||void 0,this.token?this.getMemberInfo():e.navigateTo({url:"/pages/public/login"})},getMemberInfo:function(){var e=f(a.default.mark(function e(){var t=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$get(r.memberInfo).then(function(e){t.loading=!1,t.profileInfo=e.data,t.date=t.profileInfo.birthday}).catch(function(){t.loading=!1});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),toUpdateInfo:function(){var e=f(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.detail.value,r=[{name:"mobile",checkType:"phoneno",checkRule:"11,11",errorMsg:"请输入正确的手机号"}],o=l.check(n,r),o){e.next=6;break}return this.$api.msg(l.error),e.abrupt("return");case 6:this.handleUpdateInfo(n);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleUpdateInfo:function(){var t=f(a.default.mark(function t(n){var o,i=this;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadProgress=this.loadProgress+6,o=setInterval(function(){i.loadProgress=i.loadProgress+6},50),t.next=4,this.$put("".concat(r.memberUpdate,"?id=").concat(this.profileInfo.id),u({},n,{birthday:this.date})).then(function(){clearInterval(o),i.loadProgress=0,i.$api.msg("恭喜您, 资料修改成功!"),setTimeout(function(){e.switchTab({url:"/pages/user/user"})},1e3)});case 4:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()}};t.default=p}).call(this,n("6e42")["default"])}},[["4290","common/runtime","common/vendor"]]]);