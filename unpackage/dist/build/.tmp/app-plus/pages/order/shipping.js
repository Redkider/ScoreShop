(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/shipping"],{1559:function(e,t,n){"use strict";(function(e){n("8cfb"),n("921b");u(n("66fd"));var t=u(n("b455"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7c68":function(e,t,n){"use strict";var u,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return u})},8288:function(e,t,n){"use strict";n.r(t);var u=n("cb19"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},8428:function(e,t,n){"use strict";var u=n("99b3"),a=n.n(u);a.a},"99b3":function(e,t,n){},b455:function(e,t,n){"use strict";n.r(t);var u=n("7c68"),a=n("8288");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("8428");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=c.exports},cb19:function(e,t,n){"use strict";(function(e,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a")),r=o(n("f0be")),i=n("00ba");function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,u,a,r,i){try{var o=e[r](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(u,a)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(u,a){var r=e.apply(t,n);function i(e){c(r,u,a,i,o,"next",e)}function o(e){c(r,u,a,i,o,"throw",e)}i(void 0)})}}var f=function(){return n.e("components/empty").then(n.bind(null,"b40f"))},v=function(){return n.e("components/mpvue-picker/mpvuePicker").then(n.bind(null,"7581"))},s={components:{mpvuePicker:v,empty:f},data:function(){return{shippingDetail:{},shippingTimeLine:[]}},filters:{time:function(e){return 0==e?"暂未操作":(0,r.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,n=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return n.forEach(function(n){n.key==e&&(t=n.value)}),t},filterProductStatus:function(e){var t=null;if(0!==parseInt(e.refund_status,10)){var n=[{key:1,value:"退款申请"},{key:2,value:"等待退货"},{key:3,value:"等待确认收货"},{key:4,value:"等待确认退款"},{key:5,value:"同意退款"},{key:-1,value:"退款已拒绝"},{key:-2,value:"退款已关闭"},{key:-3,value:"退款不通过"}];n.forEach(function(n){n.key==e.refund_status&&(t=n.value)})}else if(4===parseInt(e.order_status,10)){var u=[{key:0,value:"未评价"},{key:1,value:"已评价"},{key:2,value:"已追评"}];u.forEach(function(n){n.key==e.is_evaluate&&(t=n.value)})}else{var a=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];a.forEach(function(n){n.key==e.order_status&&(t=n.value)})}return t},filterShippingType:function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]}},onLoad:function(e){this.initData(e)},methods:{navTo:function(t){e.navigateTo({url:t})},initData:function(e){this.getOrderDetail(e.id)},getOrderDetail:function(){var e=l(a.default.mark(function e(t){var n=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$get("".concat(i.orderProductExpressDetails),{order_id:t}).then(function(e){e.data.data.forEach(function(e){var t=[];e.trace.forEach(function(e){t.push({time:e.datetime,value:e.remark})}),e.trace=t}),n.shippingDetail=e.data}).catch(function(e){u("log",e," at pages\\order\\shipping.vue:202")});case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["1559","common/runtime","common/vendor"]]]);