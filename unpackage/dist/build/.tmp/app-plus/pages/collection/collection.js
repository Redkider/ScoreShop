(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/collection"],{"0429":function(t,n,e){"use strict";e.r(n);var o=e("e598"),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=i.a},1092:function(t,n,e){"use strict";(function(t){e("8cfb"),e("921b");o(e("66fd"));var n=o(e("5155"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"18d9":function(t,n,e){"use strict";var o=e("d929"),i=e.n(o);i.a},5155:function(t,n,e){"use strict";e.r(n);var o=e("d2fa"),i=e("0429");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("18d9");var c,a=e("f0c5"),l=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=l.exports},d2fa:function(t,n,e){"use strict";var o={"rf-swipe-action":()=>e.e("components/rf-swipe-action/rf-swipe-action").then(e.bind(null,"9ae0")),"rf-swipe-action-item":()=>Promise.all([e.e("common/vendor"),e.e("components/rf-swipe-action-item/rf-swipe-action-item")]).then(e.bind(null,"836d")),"rf-load-more":()=>e.e("components/rf-load-more/rf-load-more").then(e.bind(null,"be3b")),"rf-loading":()=>e.e("components/rf-loading/rf-loading").then(e.bind(null,"6109"))},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.collectionList,function(n,e){var o=t._f("time")(n.date);return{$orig:t.__get_orig(n),f0:o}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o})},d929:function(t,n,e){},e598:function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a")),r=(e("0142"),a(e("6c06"))),c=(e("c7a8"),a(e("f0be")));function a(t){return t&&t.__esModule?t:{default:t}}function l(t){return f(t)||s(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function d(t,n,e,o,i,r,c){try{var a=t[r](c),l=a.value}catch(u){return void e(u)}a.done?n(l):Promise.resolve(l).then(o,i)}function p(t){return function(){var n=this,e=arguments;return new Promise(function(o,i){var r=t.apply(n,e);function c(t){d(r,o,i,c,a,"next",t)}function a(t){d(r,o,i,c,a,"throw",t)}c(void 0)})}}var h=function(){return e.e("components/rf-load-more/rf-load-more").then(e.bind(null,"be3b"))},m=function(){return e.e("components/empty").then(e.bind(null,"b40f"))},g=function(){return e.e("components/rf-swipe-action/rf-swipe-action").then(e.bind(null,"9ae0"))},v=function(){return Promise.all([e.e("common/vendor"),e.e("components/rf-swipe-action-item/rf-swipe-action-item")]).then(e.bind(null,"836d"))},b={components:{rfLoadMore:h,rfSwipeAction:g,rfSwipeActionItem:v,empty:m},data:function(){return{userInfo:{},collectionList:[],errorImg:r.default,page:1,loadingType:"more",token:null,options:[{text:"取消收藏",style:{backgroundColor:"#fa436a"}}],loading:!0}},filters:{time:function(t){return(0,c.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")}},onLoad:function(){this.initData()},onPageScroll:function(t){},onPullDownRefresh:function(){this.page=1,this.collectionList=[],this.loading=!0,this.getCollectionList("refresh")},onReachBottom:function(){this.page++,this.getCollectionList()},methods:{bindClick:function(){var n=p(i.default.mark(function n(e){var o=this;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(t("log",e," at pages\\collection\\collection.vue:97"),"取消收藏"!==e.content.text){n.next=4;break}return n.next=4,this.$del("http://localhost:8080/static/api/mobileLogin.json",{page:this.page}).then(function(){o.$api.msg("取消收藏成功"),o.page=1,o.collectionList.length=0,o.getCollectionList()});case 4:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),initData:function(){this.userInfo=o.getStorageSync("userInfo"),this.token=this.userInfo.id,this.token&&this.getCollectionList()},getCollectionList:function(){var n=p(i.default.mark(function n(e){var r=this;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$get("http://localhost:8080/static/api/handleCollect.json",{page:this.page}).then(function(n){r.loading=!1,"refresh"===e&&o.stopPullDownRefresh(),r.loadingType=10===n.data.length?"more":"nomore",r.collectionList=[].concat(l(r.collectionList),l(n.data)),t("log","collectionList:"+r.collectionList," at pages\\collection\\collection.vue:134"),t("log","当前时间戳:"+new Date/1e3," at pages\\collection\\collection.vue:135")}).catch(function(){r.loading=!1,"refresh"===e&&o.stopPullDownRefresh()});case 2:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),onImageError:function(t){this.collectionList[t].product_img=this.errorImg},navTo:function(t){o.navigateTo({url:t})}}};n.default=b}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["1092","common/runtime","common/vendor"]]]);