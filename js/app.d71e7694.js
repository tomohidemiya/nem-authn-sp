(function(e){function t(t){for(var n,i,u=t[0],s=t[1],l=t[2],c=0,h=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d22e6c3"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},4805:function(e,t,r){"use strict";r("8ce0")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},o=[],i=(r("034f"),r("2877")),u={},s=Object(i["a"])(u,a,o,!1,null,null,null),l=s.exports,c=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),n("Mosaic",{attrs:{imgSrc:"",imgName:"うんこだよ",imgBy:"みやだよ"}}),e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?e._e():n("button",{on:{click:e.login}},[e._v("Log in")]),n("Mosaic",{attrs:{imgSrc:"",imgName:"うんこだよ",imgBy:"みやだよ"}})],1)],1)},h=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},g=f,m=(r("4805"),Object(i["a"])(g,d,v,!1,null,"b9167eee",null)),b=m.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-4 col-sm-6 co-xs-12 gal-item"},[r("div",{staticClass:"box"},[r("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#1"}},[r("img",{attrs:{src:e.mosaicImgSrc}})]),r("div",{staticClass:"modal fade",attrs:{id:"1",tabindex:"-1",role:"dialog"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[e._m(0),r("div",{staticClass:"modal-body"},[r("img",{attrs:{src:e.mosaicImgSrc}})]),r("div",{staticClass:"col-md-12 description"},[r("h4",[e._v(e._s(e.imgName)+" by "+e._s(e.imgBy))])])])])])])])},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],k={name:"Mosaic",props:{imgSrc:String,imgName:String,imgBy:String}},C=k,j=Object(i["a"])(C,_,w,!1,null,"5b17a696",null),y=j.exports,x={name:"home",components:{HelloWorld:b,Mosaic:y},methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},O=x,S=Object(i["a"])(O,p,h,!1,null,null,null),R=S.exports;n["a"].use(c["a"]);var $,E=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],P=new c["a"]({mode:"history",base:"/",routes:E}),T=P,W=r("8160"),A=(r("caad"),r("ac1f"),r("2532"),r("841c"),r("5530")),I=(r("96cf"),r("1da1")),M=r("15fd"),N=r("9767"),U=function(){return window.history.replaceState({},document.title,window.location.pathname)},H=function(e){var t=e.onRedirectCallback,r=void 0===t?U:t,a=e.redirectUri,o=void 0===a?window.location.origin:a,i=Object(M["a"])(e,["onRedirectCallback","redirectUri"]);return $||($=new n["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e,t){var r=this;return Object(I["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.popupOpen=!0,n.prev=1,n.next=4,r.auth0Client.loginWithPopup(e,t);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:return n.prev=9,r.popupOpen=!1,n.finish(9);case 12:return n.next=14,r.auth0Client.getUser();case 14:r.user=n.sent,r.isAuthenticated=!0;case 16:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.error=t.t0;case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(N["a"])(Object(A["a"])(Object(A["a"])({},i),{},{client_id:i.clientId,redirect_uri:o}));case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:n=t.sent,a=n.appState,r(a);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.error=t.t0;case 15:return t.prev=15,t.next=18,e.auth0Client.isAuthenticated();case 18:return e.isAuthenticated=t.sent,t.next=21,e.auth0Client.getUser();case 21:return e.user=t.sent,e.loading=!1,t.finish(15);case 24:case"end":return t.stop()}}),t,null,[[3,12,15,24]])})))()}}),$)},L={install:function(e,t){e.prototype.$auth=H(t)}};n["a"].use(L,{domain:W["b"],clientId:W["a"],onRedirectCallback:function(e){T.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),n["a"].config.productionTip=!1,new n["a"]({router:T,render:function(e){return e(l)}}).$mount("#app")},8160:function(e){e.exports=JSON.parse('{"b":"marumie.us.auth0.com","a":"boW2wD5YN1zYakV8SVxQONdOzetWZFab"}')},"85ec":function(e,t,r){},"8ce0":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d71e7694.js.map