(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rf-badge/rf-badge"],{"0794":function(t,e,n){"use strict";n.r(e);var u=n("1b31"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},"0e45":function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u})},1850:function(t,e,n){"use strict";var u=n("49f4"),a=n.n(u);a.a},"1b31":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},"49f4":function(t,e,n){},"4e33":function(t,e,n){"use strict";n.r(e);var u=n("0e45"),a=n("0794");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("1850");var r,c=n("f0c5"),f=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"faa71dca",null,!1,u["a"],r);e["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rf-badge/rf-badge-create-component',
    {
        'components/rf-badge/rf-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("4e33"))
        })
    },
    [['components/rf-badge/rf-badge-create-component']]
]);
