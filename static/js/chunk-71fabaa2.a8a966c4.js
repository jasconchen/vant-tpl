(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71fabaa2"],{"7abe":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",[t("van-cell-group",{attrs:{title:"jweixin-1.6.0"}},[t("van-cell",{attrs:{title:"scanQRCode","is-link":""},on:{click:n.scanQRCode}}),t("van-cell",{attrs:{title:"previewImage","is-link":""},on:{click:n.previewImage}})],1),t("van-cell-group",{attrs:{title:"jweixin-auth"}},[t("van-cell",{attrs:{title:"auth",label:n.code,"is-link":""},on:{click:n.auth}})],1)],1)},a=[];function c(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(c.push(r.value),t&&c.length===t)break}catch(s){i=!0,a=s}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return c}}var i=n("06c5");n("d9e2"),n("d401");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){return c(e)||o(e,t)||Object(i["a"])(e,t)||s()}n("99af");var l=n("2b0e"),p=n("2c28"),d=["snsapi_base","snsapi_userinfo"];function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(l["ref"])(void 0);function n(t){var n=location,r=n.protocol,a=n.host,c=n.pathname,o=n.hash,i="".concat(r,"//").concat(a).concat(c).concat(t?"#"+t:o);location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat("appid","&redirect_uri=").concat(encodeURIComponent(i),"&response_type=code&scope=").concat(d[e],"&state=STATE#wechat_redirect")}return Object(l["watchEffect"])((function(){var e=Object(p["useUrlSearchParams"])("history"),n=e.code;t.value=n})),[t,n]}var h=n("c7eb"),v=n("1da1"),b=(n("ac1f"),n("1276"),n("caad"),n("b775")),m=["production","staging","prod"].includes("production");function g(e){return Object(b["a"])({url:m?"/api/wechat/jssdk/config?REDIRECT_URI=".concat(e):"/api/wechat/jssdk/configTest?REDIRECT_URI=".concat(e),method:"post"})}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!1},t=Object(p["useScriptTag"])("//res.wx.qq.com/open/js/jweixin-1.6.0.js"),n=t.load,r=Object(l["ref"])(!1),a=Object(l["shallowRef"])(null);function c(){return o.apply(this,arguments)}function o(){return o=Object(v["a"])(Object(h["a"])().mark((function t(){var c,o,i;return Object(h["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:return t.next=4,Object(l["nextTick"])();case 4:return a.value=window.wx,t.prev=5,c=encodeURIComponent(location.href.split("#")[0]),t.next=9,g(c);case 9:o=t.sent,i=Object.assign({},o,e),a.value.config(i),a.value.ready((function(){r.value=!0})),a.value.error((function(){r.value=!1})),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),r.value=!1;case 19:case"end":return t.stop()}}),t,null,[[5,16]])}))),o.apply(this,arguments)}return Object(l["watchEffect"])(!r.value&&c),[r,a]}var w={__name:"index",setup:function(e){var t=j(),n=u(t,2),r=n[1],a=f(),c=u(a,2),o=c[0],i=c[1],s=function(){r.value.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){alert(e.resultStr)}})},l=function(){r.value.previewImage({current:"https://img.yzcdn.cn/vant/apple-1.jpg",urls:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg"]})},p=function(){return i()};return{__sfc:!0,wx:r,code:o,authorize:i,scanQRCode:s,previewImage:l,auth:p}}},y=w,R=n("2877"),x=Object(R["a"])(y,r,a,!1,null,null,null);t["default"]=x.exports},b775:function(e,t,n){"use strict";n("d3b7"),n("99af");var r=n("bc3a"),a=n.n(r),c=n("4360"),o=n("d399"),i=" (-。-)!!! 服务器开小差了，请稍后重试。",s=a.a.create({baseURL:"/prod-api",timeout:5e4});s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e.status;return t<200||t>300?(Object(o["a"])("status: ".concat(res.code,", ").concat(i)),c["a"].dispatch("errorLog/addErrorLog",{message:i,name:"httpRequestError",response:e,url:location.href}),Promise.reject({message:i,name:"httpRequestError",response:e})):e.data}),(function(e){return Object(o["a"])("err, ".concat(e)),c["a"].dispatch("errorLog/addErrorLog",{message:i,name:"httpRequestError",response:e.response,url:location.href}),Promise.reject(e)})),t["a"]=s}}]);
//# sourceMappingURL=chunk-71fabaa2.a8a966c4.js.map