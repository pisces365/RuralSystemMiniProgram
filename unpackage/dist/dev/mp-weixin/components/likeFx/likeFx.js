(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/likeFx/likeFx"],{917:
/*!******************************************************************************************************!*\
  !*** D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue ***!
  \******************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./likeFx.vue?vue&type=template&id=2e335c24& */918),r=n(/*! ./likeFx.vue?vue&type=script&lang=js& */920);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n(/*! ./likeFx.vue?vue&type=style&index=0&lang=scss& */922);var u,o=n(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */11),c=Object(o["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],u);c.options.__file="components/likeFx/likeFx.vue",e["default"]=c.exports},918:
/*!*************************************************************************************************************************************!*\
  !*** D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue?vue&type=template&id=2e335c24& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./likeFx.vue?vue&type=template&id=2e335c24& */919);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},919:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue?vue&type=template&id=2e335c24& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},a=!1,u=[];r._withStripped=!0},920:
/*!*******************************************************************************************************************************!*\
  !*** D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./likeFx.vue?vue&type=script&lang=js& */921),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},921:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"LikeFx",data:function(){return{queue:{},ctx:null,timer:0}},props:{height:{type:Number,default:1920},width:{type:Number,default:375}},mounted:function(){this.ctx=t.createCanvasContext("bubble"),this.queue={},console.log("likeFx mounted")},destroyed:function(){console.log("likeFx destoryed"),this.clearTimer()},methods:{likeClick:function(){var t="http://p1362.bvimg.com/10465/e572a74910d94911.png",e={id:(new Date).getTime(),timer:0,opacity:0,pathData:this.generatePathData(),image:t,factor:{speed:6e-4,t:.6}};Object.keys(this.queue).length>0?this.queue[e.id]=e:(this.queue[e.id]=e,this.bubbleAnimate())},getRandom:function(t,e){return Math.random()*(e-t)+t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},generatePathData:function(){var t=this.width,e=this.height,n={x:.72*t,y:e},i={x:this.getRandom(.22*t,.33*t),y:this.getRandom(.5*e,.75*e)},r={x:this.getRandom(0,.88*t),y:this.getRandom(.25*e,.5*e)},a={x:this.getRandom(0,.88*t),y:this.getRandom(0,.125*e)};return[n,i,r,a]},updatePath:function(t,e){var n=t[0],i=t[1],r=t[2],a=t[3],u=e.t,o=3*(i.x-n.x),c=3*(r.x-i.x)-o,d=a.x-n.x-o-c,s=3*(i.y-n.y),l=3*(r.y-i.y)-s,f=a.y-n.y-s-l,h=d*(u*u*u)+c*(u*u)+o*u+n.x,m=f*(u*u*u)+l*(u*u)+s*u+n.y;return{x:h,y:m}},bubbleAnimate:function(){var t=this,e=(this.width,this.height);Object.keys(this.queue).forEach((function(n){var i=t.queue[+n],r=t.updatePath(i.pathData,i.factor),a=r.x,u=r.y,o=i.factor.speed;i.factor.t+=o;var c=30;c=(e-u)/1.5,c=Math.min(30,c);var d=i.opacity;d=u/(.3*e),d=Math.min(1,d),t.ctx.globalAlpha=d,t.ctx.drawImage(i.image,a-c/2,u,c,c),i.factor.t>1&&delete t.queue[i.id],u>e&&delete t.queue[i.id]})),this.ctx.draw(),Object.keys(this.queue).length>0?this.timer=setTimeout((function(){t.bubbleAnimate()}),5):(this.clearTimer(),this.ctx.draw())},clearTimer:function(){this.timer&&clearTimeout(this.timer)}}};e.default=n}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},922:
/*!****************************************************************************************************************************************!*\
  !*** D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./likeFx.vue?vue&type=style&index=0&lang=scss& */923),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},923:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-appWorkSpace/RuralSystemMiniProgram/RuralSystemMiniProgram/components/likeFx/likeFx.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/likeFx/likeFx.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/likeFx/likeFx-create-component',
    {
        'components/likeFx/likeFx-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(917))
        })
    },
    [['components/likeFx/likeFx-create-component']]
]);
