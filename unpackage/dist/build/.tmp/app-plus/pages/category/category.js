(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"0faf":function(t,e,a){"use strict";var n=a("ddcf"),r=a.n(n);r.a},"15b4":function(t,e,a){"use strict";a.r(e);var n=a("9213"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},2484:function(t,e,a){"use strict";(function(t){a("8cfb"),a("921b");n(a("66fd"));var e=n(a("e82d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"3f24":function(t,e,a){"use strict";var n={"rf-search-bar":()=>a.e("components/rf-search-bar/rf-search-bar").then(a.bind(null,"072d"))},r=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})},9213:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(a("a34a")),i=(a("00ba"),a("c7a8"));function c(t){return t&&t.__esModule?t:{default:t}}function o(t,e,a,n,r,i,c){try{var o=t[i](c),u=o.value}catch(s){return void a(s)}o.done?e(u):Promise.resolve(u).then(n,r)}function u(t){return function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function c(t){o(i,n,r,c,u,"next",t)}function u(t){o(i,n,r,c,u,"throw",t)}c(void 0)})}}var s=function(){return a.e("components/rf-search-bar/rf-search-bar").then(a.bind(null,"072d"))},f=function(){return a.e("components/empty").then(a.bind(null,"b40f"))},d={components:{rfSearchBar:s,empty:f},data:function(){return{hotSearchDefault:"请输入关键字",fList:[],sList:[],tList:[],showCategoryIndex:0,categoryList:[],search:{},cateTop:{},animation:"animation-slide-right",loading:!0}},onShow:function(){t("log","category_onShow"," at pages\\category\\category.vue:87"),this.initData()},methods:{navToList:function(t){n.navigateTo({url:"/pages/product/list?cate_id=".concat(t)})},navToDetailPage:function(t){n.navigateTo({url:"/pages/product/product?id=".concat(t)})},initData:function(){var t=u(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.search=n.getStorageSync("search")||{},this.hotSearchDefault="请输入关键字 "+(this.search.hot_search_default?"如: "+this.search.hot_search_default:""),this.getProductCate(),this.initTabBarBadge();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initTabBarBadge:function(){if(n.getStorageSync("accessToken")&&n.getStorageSync("cartNum")){if(0==n.getStorageSync("cartNum"))return void n.removeTabBarBadge({index:2});n.setTabBarBadge({index:2,text:n.getStorageSync("cartNum").toString()})}},getProductCate:function(){var t=u(r.default.mark(function t(){var e=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.fList=[],this.sList=[],this.tList=[],t.next=5,this.$get("http://localhost:8080/static/api/productCate.json").then(function(t){e.loading=!1,e.cateTop=n.getStorageSync("cateTop"),e.cateTop||e.getAdvList(),e.categoryList=t.data;for(var a=0;a<t.data.length;a++)if(t.data[a].child.length>0){e.showCategoryIndex=a;break}}).catch(function(){e.loading=!1});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAdvList:function(){var t=u(r.default.mark(function t(){var e=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(i.advList),{location:"cate_top"}).then(function(t){e.cateTop=t.data.cate_top[0]});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),showCategory:function(t){var e=this;this.showCategoryIndex=t,this.animation="animation-slide-right",setTimeout(function(){e.animation=""},1e3)},toSearch:function(){n.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toIndex:function(){n.reLaunch({url:"/pages/index/index"})},indexTopToDetailPage:function(t,e){if(t&&e){switch(t){case"product_view":e="/pages/product/product?id=".concat(e);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":e="/pages/coupon/detail?id=".concat(e);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":e="/pages/product/list?cate_id=".concat(e);break;default:break}n.navigateTo({url:e})}}}};e.default=d}).call(this,a("0de9")["default"],a("6e42")["default"])},ddcf:function(t,e,a){},e82d:function(t,e,a){"use strict";a.r(e);var n=a("3f24"),r=a("15b4");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("0faf");var c,o=a("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"514ea302",null,!1,n["a"],c);e["default"]=u.exports}},[["2484","common/runtime","common/vendor"]]]);