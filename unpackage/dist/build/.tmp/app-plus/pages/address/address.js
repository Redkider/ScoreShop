(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"01428":function(t,e,n){},4166:function(t,e,n){"use strict";n.r(e);var r=n("d022"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"52e7":function(t,e,n){"use strict";n.r(e);var r=n("c0dc"),o=n("4166");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("d0e9");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},c0dc:function(t,e,n){"use strict";var r={"rf-load-more":()=>n.e("components/rf-load-more/rf-load-more").then(n.bind(null,"be3b")),"rf-loading":()=>n.e("components/rf-loading/rf-loading").then(n.bind(null,"6109"))},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.addressList,function(e,n){var r=parseInt(e.is_default,10);return{$orig:t.__get_orig(e),m0:r}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},d022:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=n("0142");function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return c(t)||u(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function d(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,s,"next",t)}function s(t){d(i,r,o,a,s,"throw",t)}a(void 0)})}}var l=function(){return n.e("components/empty").then(n.bind(null,"b40f"))},h=function(){return n.e("components/rf-load-more/rf-load-more").then(n.bind(null,"be3b"))},m={components:{empty:l,rfLoadMore:h},data:function(){return{timeOutEvent:0,source:0,page:1,addressList:[],loadingType:"more",loading:!0}},onPullDownRefresh:function(){this.page=1,this.addressList=[],this.getAddressList("refresh")},onReachBottom:function(){this.page++,this.getAddressList()},onLoad:function(t){this.source=t.source},onShow:function(){this.initData()},methods:{goTouchStart:function(e){var n=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout(function(){t.showModal({content:"确定要删除该收货地址吗",success:function(t){t.confirm&&n.$del("".concat(o.addressDelete,"?id=").concat(e)).then(function(){n.page=1,n.addressList.length=0,n.getAddressList()})}})},500)},goTouchEnd:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},initData:function(){this.page=1,this.addressList.length=0,this.getAddressList()},getAddressList:function(){var e=f(r.default.mark(function e(n){var i=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$get("".concat(o.addressList),{page:this.page}).then(function(e){i.loading=!1,"refresh"===n&&t.stopPullDownRefresh(),i.loadingType=10===e.data.length?"more":"nomore",i.addressList=[].concat(a(i.addressList),a(e.data))}).catch(function(){i.loading=!1,"refresh"===n&&t.stopPullDownRefresh()});case 2:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),checkAddress:function(e){1==this.source&&(this.$api.prePage().addressData=e,t.navigateBack())},addAddress:function(e,n){t.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&id=").concat(n&&n.id||void 0)})}}};e.default=m}).call(this,n("6e42")["default"])},d0e9:function(t,e,n){"use strict";var r=n("01428"),o=n.n(r);o.a},d123:function(t,e,n){"use strict";(function(t){n("8cfb"),n("921b");r(n("66fd"));var e=r(n("52e7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d123","common/runtime","common/vendor"]]]);