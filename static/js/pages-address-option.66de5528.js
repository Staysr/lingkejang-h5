(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-option"],{"057c":function(t,e,i){"use strict";i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="http://43.138.41.167:8000/",a=function(t,e){var i={url:n+t.url,data:e,method:t.method,header:"get"==t.method?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer "+uni.getStorageSync("Authorization")}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Authorization:"Bearer "+uni.getStorageSync("Authorization")},dataType:"json"},a=new Promise((function(t,e){uni.request(i).then((function(e){if(401==e[1].statusCode&&"token_not_valid"==e[1].data.code)return uni.redirectTo({url:"../../pages/login/index"}),!1;t(e[1])})).catch((function(t){e(t)}))}));return a},o=function(t,e){var i="";uni.getStorage({key:"token",success:function(t){i=t.data}});var a={url:n+t.url,data:e,method:t.method,header:"get"==t.method?{Token:i,"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{Token:i,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},o=new Promise((function(t,e){uni.request(a).then((function(e){t(e[1])})).catch((function(t){e(t)}))}));return o},s={baseUrl:n,httpRequest:a,httpTokenRequest:o};e.default=s},2492:function(t,e,i){"use strict";i.r(e);var n=i("f1fa"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"5b1e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg-white padding",staticStyle:{"margin-top":"15rpx","border-radius":"15rpx"}},[i("v-uni-view",{staticClass:"grid margin-bottom col-1"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"black","font-weight":"500"}},[t._v("当前定位")])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"cu-tag round"},[t._v("盛世添加")]),i("v-uni-view",{staticClass:"cu-tag round"},[t._v("玩点小区")])],1)],1),i("v-uni-view",{staticClass:"bg-white padding",staticStyle:{"margin-top":"15rpx","border-radius":"15rpx"}},[i("v-uni-view",{staticClass:"grid margin-bottom col-1"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"black","font-weight":"500"}},[t._v("历史访问")])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"cu-tag round"},[t._v("盛世添加")]),i("v-uni-view",{staticClass:"cu-tag round"},[t._v("玩点小区")])],1)],1),i("v-uni-scroll-view",{staticClass:"indexes",staticStyle:{"margin-top":"12rpx"},style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}],attrs:{"scroll-y":!0,"scroll-into-view":"indexes-"+t.listCurID,"scroll-with-animation":!0,"enable-back-to-top":!0}},[t._l(t.list,(function(e,n){return[i("v-uni-view",{key:n+"_0",class:"indexItem-"+e.name,attrs:{id:"indexes-"+e.name,"data-index":e.name}},[i("v-uni-view",{staticClass:"padding"},[t._v(t._s(e.name))]),void 0!=e.regions_index?i("v-uni-view",{staticClass:"cu-list menu-avatar no-padding"},[0==e.regions_index.length?i("v-uni-view",{staticClass:"bg-white padding",staticStyle:{"margin-top":"15rpx","border-radius":"15rpx"}},[i("v-uni-view",{staticClass:"grid  col-1"},[t._v("暂无开通")])],1):t._e(),t._l(e.regions_index,(function(e,n){return i("v-uni-view",{key:n,staticClass:"bg-white padding",staticStyle:{"margin-top":"15rpx","border-radius":"15rpx"}},[i("v-uni-view",{staticClass:"grid col-1"},[i("v-uni-text",{staticStyle:{"font-size":"35rpx",color:"black","font-weight":"500"}},[t._v(t._s(e.name))]),t._l(e.sub_regions,(function(e,n){return i("v-uni-view",{key:n,staticClass:"bg-white"},[i("v-uni-view",{staticClass:"grid col-1"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"black","font-weight":"500"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getXiaoQu(e.code)}}},[t._v(t._s(e.name))]),t._l(t.xiaoqu,(function(n,a){return t.xiaoqu!=[]||t.xiaoqu.length<0?i("v-uni-view",{key:a,staticClass:"bg-white",staticStyle:{"margin-top":"12rpx"}},[i("v-uni-view",{staticClass:"grid col-1"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"black","font-weight":"500"}},[0==a?i("v-uni-view",{staticClass:"cu-tag round",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getlist(e,2)}}},[t._v("全部")]):t._e(),i("v-uni-view",{staticClass:"cu-tag round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getlist(n,1)}}},[t._v(t._s(n.name))])],1)],1)],1):t._e()}))],2)],1)}))],2)],1)}))],2):t._e()],1)]}))],2),i("v-uni-view",{staticClass:"indexBar",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}]},[i("v-uni-view",{staticClass:"indexBar-box",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.tStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.tEnd.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.tMove.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"indexBar-item",attrs:{id:n},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.getCur.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.setCur.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"indexToast"},[t._v(t._s(t.listCur))])],1)},o=[]},"672b":function(t,e,i){"use strict";var n=i("e203"),a=i.n(n);a.a},c01f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.indexes[data-v-4fb128d2]{position:relative}.indexBar[data-v-4fb128d2]{position:fixed;right:0;bottom:0;padding:%?20?% %?20?% %?20?% %?60?%;display:flex;align-items:center}.indexBar .indexBar-box[data-v-4fb128d2]{width:%?40?%;height:auto;background:#fff;display:flex;flex-direction:column;box-shadow:0 0 %?20?% rgba(0,0,0,.1);border-radius:%?10?%}.indexBar-item[data-v-4fb128d2]{flex:1;width:%?40?%;height:%?40?%;display:flex;align-items:center;justify-content:center;font-size:%?24?%;color:#888}uni-movable-view.indexBar-item[data-v-4fb128d2]{width:%?40?%;height:%?40?%;z-index:9;position:relative}uni-movable-view.indexBar-item[data-v-4fb128d2]::before{content:"";display:block;position:absolute;left:0;top:%?10?%;height:%?20?%;width:%?4?%;background-color:#f37b1d}.indexToast[data-v-4fb128d2]{position:fixed;top:0;right:%?80?%;bottom:0;background:rgba(0,0,0,.5);width:%?100?%;height:%?100?%;border-radius:%?10?%;margin:auto;color:#fff;line-height:%?100?%;text-align:center;font-size:%?48?%}.cu-list.menu-avatar>.cu-item[data-v-4fb128d2]{\n\t/* height: 80rpx; */}',""]),t.exports=e},e203:function(t,e,i){var n=i("c01f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6ff75f9d",n,!0,{sourceMap:!1,shadowMode:!1})},e244:function(t,e,i){"use strict";i.r(e);var n=i("5b1e"),a=i("2492");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("672b");var s,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4fb128d2",null,!1,n["a"],s);e["default"]=u.exports},f1fa:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("e25e"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("057c")),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,hidden:!0,listCurID:"",list:[],listCur:"",xiaoqu:[]}},onLoad:function(){for(var t=[{}],e=0;e<26;e++)t[e]={},t[e].name=String.fromCharCode(65+e);this.list=t,this.listCur=t[0],this.getCitys()},onReady:function(){var t=this;uni.createSelectorQuery().select(".indexBar-box").boundingClientRect((function(e){t.boxTop=e.top})).exec(),uni.createSelectorQuery().select(".indexes").boundingClientRect((function(e){t.barTop=e.top})).exec()},methods:{getCur:function(t){this.hidden=!1,this.listCur=this.list[t.target.id].name},getlist:function(e,i){uni.setStorageSync("currentPosition",e),uni.switchTab({url:"/pages/index/index",success:function(e){var i=getCurrentPages().pop();t("log",i," at pages/address/option.vue:127"),void 0!=i&&null!=i&&i.onLoad()}})},setCur:function(t){this.hidden=!0,this.listCur=this.listCur},getXiaoQu:function(e){var i=this;a.default.httpRequest({url:"complex/?code="+e,method:"get"}).then((function(t){200!=t.statusCode?uni.showToast({icon:"none",title:"请求错误"}):i.xiaoqu=t.data}),(function(e){t("log",e," at pages/address/option.vue:151")}))},getCitys:function(){var e=this;a.default.httpRequest({url:"regions/",method:"get"}).then((function(i){t("log",i," at pages/address/option.vue:160"),200!=i.statusCode?uni.showToast({icon:"none",title:"请求错误"}):e.list=i.data}),(function(e){t("log",e," at pages/address/option.vue:170")}))},tMove:function(t){var e=t.touches[0].clientY,i=this.boxTop,n=this;if(e>i){var a=parseInt((e-i)/20);this.listCur=n.list[a].name}},tStart:function(){this.hidden=!1},tEnd:function(){this.hidden=!0,this.listCurID=this.listCur},indexSelect:function(t){for(var e=this,i=this.barHeight,n=this.list,a=Math.ceil(n.length*t.detail.y/i),o=0;o<n.length;o++)if(a<o+1)return e.listCur=n[o].name,e.movableY=20*o,!1}}};e.default=o}).call(this,i("0de9")["log"])}}]);