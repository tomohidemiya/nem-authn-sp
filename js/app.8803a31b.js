(function(t){function e(e){for(var a,o,c=e[0],u=e[1],s=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/nem-authn-sp/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4a5e":function(t,e,n){"use strict";n("7e36")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"primary",dark:"",app:"","clipped-left":""}},[n("v-toolbar-title",[n("router-link",{staticClass:"toolbar__top v-toolbar__content",attrs:{to:"/"}},[t._v("NEM Authn Prototype")])],1),n("v-spacer"),n("v-btn",{attrs:{text:"",to:"/"}},[t._v("Home")]),t.$auth.isAuthenticated?t._e():n("v-btn",{attrs:{text:""},on:{click:t.login}},[t._v("Log in")]),t.$auth.isAuthenticated?n("v-btn",{attrs:{text:""},on:{click:t.logout}},[t._v("Log out")]):t._e(),n("v-btn",{attrs:{text:"",to:"/signup"}},[t._v("SignUp")]),n("v-btn",{attrs:{text:"",href:"https://t-miya19890131.medium.com/nem-authn-%E6%9A%97%E5%8F%B7%E8%B3%87%E7%94%A3%E3%81%AE%E6%89%80%E6%9C%89%E6%A8%A9%E3%81%A7%E8%AA%8D%E8%A8%BC%E3%81%99%E3%82%8Bidp%E3%81%AE%E3%82%B3%E3%83%B3%E3%82%BB%E3%83%97%E3%83%88%E3%81%A8%E3%83%97%E3%83%AD%E3%83%88%E3%82%BF%E3%82%A4%E3%83%97-1819ea9e08d2",target:"_blank"}},[t._v("About")])],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{data:t.oaMosaics}})],1),n("v-footer",{attrs:{app:""}},[n("div",{staticStyle:{margin:"0 auto"}},[t._v("ツイベガ君 & みやとも")])])],1)],1)},i=[],o=(n("4de4"),n("7db0"),n("0481"),n("caad"),n("d81d"),n("4069"),n("b0c0"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("1276"),n("ddb0"),n("5530")),c=n("b85c"),u=(n("96cf"),n("1da1")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"fullview"},[n("div",{staticClass:"loading-spacer"}),n("vue-loading",{attrs:{type:"spiningDubbles",color:"#aaa",size:{width:"100px",height:"100px"}}})],1)])},l=[],p=n("d523"),d={name:"Loading",components:{VueLoading:p["VueLoading"]}},h=d,f=(n("68c7"),n("2877")),m=Object(f["a"])(h,s,l,!1,null,null,null),g=m.exports,v={data:function(){return{drawer:null,loading:!1,oaMosaics:[]}},watch:{"$auth.user":{immediate:!0,handler:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,i,u,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e||!this.$auth.isAuthenticated){t.next=25;break}return this.loading=!0,n=[],a=[],t.prev=4,t.next=7,this.$nem.getOwnedMosaics(this.$auth.user.nickname);case 7:r=t.sent,console.log(r),i=Object(c["a"])(r);try{for(i.s();!(u=i.n()).done;)s=u.value,n.includes(s.mosaicId.namespaceId)||(n.push(s.mosaicId.namespaceId),a.push(this.$nem.getMosaicDetail(s.mosaicId.namespaceId)))}catch(p){i.e(p)}finally{i.f()}return t.next=13,Promise.all(a);case 13:l=t.sent,l=l.flat(2).filter((function(t){return t.imageUrl&&""!==t.imageUrl})).map((function(t){return{imageUrl:t.imageUrl,name:t.mosaic.id.name,namespaceId:t.mosaic.id.namespaceId}})),console.log(l),this.oaMosaics=r.map((function(t){var e=l.find((function(e){return e.name===t.mosaicId.name&&e.namespaceId===t.mosaicId.namespaceId}));return Object(o["a"])({quantity:t.quantity},e)})).filter((function(t){return t.imageUrl})),t.next=22;break;case 19:throw t.prev=19,t.t0=t["catch"](4),new Error(t.t0);case 22:return t.prev=22,this.loading=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,this,[[4,19,22,25]])})));function e(e){return t.apply(this,arguments)}return e}()}},methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin+"/"+window.location.pathname.split("/")[1]})}},components:{Loading:g}},b=v,w=(n("034f"),Object(f["a"])(b,r,i,!1,null,null,null)),_=w.exports,x=n("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{data:t.data}})],1)},k=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("Welcome to NEM Authn")]),n("p",[t._v(" このサイトはNEMで認証を行うNEM Authnのプロトタイプサイトです。 ")]),n("h3",[t._v("Summary")]),n("div",[t._v(" NEM AuthnはNEMの請求書によるうんぬんかんぬん。ピーヒャララ ")]),t.data.length>0?n("div",{staticStyle:{"margin-top":"16px"}},[n("h3",[t._v("Authticated Result")]),n("v-row",t._l(t.data,(function(e,a){return n("v-col",{key:a,staticClass:"d-flex child-flex",attrs:{cols:"6",sm:"6",md:"6",lg:"3",xl:"3"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:e.imageUrl,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1):t._e(),n("h3",[t._v("Contact")]),t._m(0)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://twitter.com/tuibegakun",target:"_blank",rel:"noopener"}},[t._v("ツイベガ君")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/miyatomo_38",target:"_blank",rel:"noopener"}},[t._v("みやとも")])])])}],C={name:"HelloWorld",props:{data:{type:Array}}},A=C,j=(n("4a5e"),Object(f["a"])(A,E,O,!1,null,"68275114",null)),R=j.exports,I={name:"home",props:{data:{type:Array}},components:{HelloWorld:R}},S=I,$=Object(f["a"])(S,y,k,!1,null,null,null),M=$.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signup"},[n("div",[n("p",[t._v("Signupは現在開発中です。"),n("br"),t._v(" アカウント追加をご希望の方は、ツイベガかみやともまでDMをいただけると嬉しいです。")]),n("h3",[t._v("Contact")]),n("p",[n("a",{attrs:{href:"https://twitter.com/tuibegakun",target:"_blank",rel:"noopener"}},[t._v("ツイベガ君")])]),n("p",[n("a",{attrs:{href:"https://twitter.com/miyatomo_38",target:"_blank",rel:"noopener"}},[t._v("みやとも")])])])])}],P={},N=Object(f["a"])(P,U,W,!1,null,null,null),T=N.exports;a["default"].use(x["a"]);var B=[{path:"/",name:"Home",component:M},{path:"/signup",name:"Signup",component:T},{name:"notFound",path:"*",redirect:{name:"Home"}}],D=new x["a"]({mode:"history",base:"/nem-authn-sp/",routes:B}),H=D,L=n("ce5b"),z=n.n(L);n("bf40");a["default"].use(z.a);var V,F,q={},J=new z.a(q),Y=n("8160"),Q=(n("841c"),n("15fd")),Z=n("9767"),G=function(){return window.history.replaceState({},document.title,window.location.pathname)},K=function(t){var e=t.onRedirectCallback,n=void 0===e?G:e,r=t.redirectUri,i=void 0===r?window.location.origin+"/"+window.location.pathname.split("/")[1]:r,c=Object(Q["a"])(t,["onRedirectCallback","redirectUri"]);return V||(V=new a["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t,e){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.popupOpen=!0,a.prev=1,a.next=4,n.auth0Client.loginWithPopup(t,e);case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),console.error(a.t0);case 9:return a.prev=9,n.popupOpen=!1,a.finish(9);case 12:return a.next=14,n.auth0Client.getUser();case 14:n.user=a.sent,n.isAuthenticated=!0;case 16:case"end":return a.stop()}}),a,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),t.error=e.t0;case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Z["a"])(Object(o["a"])(Object(o["a"])({},c),{},{client_id:c.clientId,redirect_uri:i}));case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:a=e.sent,r=a.appState,n(r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),t.error=e.t0;case 15:return e.prev=15,e.next=18,t.auth0Client.isAuthenticated();case 18:return t.isAuthenticated=e.sent,e.next=21,t.auth0Client.getUser();case 21:return t.user=e.sent,t.loading=!1,e.finish(15);case 24:case"end":return e.stop()}}),e,null,[[3,12,15,24]])})))()}}),V)},X={install:function(t,e){t.prototype.$auth=K(e)}},tt=(n("a4d3"),n("e01a"),n("fb6a"),n("2ca0"),n("bc3a")),et="https://snnode.supernode.me:7891",nt="https://s3.amazonaws.com/open-apostille-nemgallary-production/",at=function(){return F||(F=new a["default"]({methods:{getOwnedMosaics:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",tt["get"]("".concat(et,"/account/mosaic/owned?address=").concat(t)).then((function(t){return t.data.data.filter((function(t){return t.quantity>0&&"nem"!==t.mosaicId.namespaceId&&"xem"!==t.mosaicId.name}))})));case 1:case"end":return e.stop()}}),e)})))()},getMosaicDetail:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",tt["get"]("".concat(et,"/namespace/mosaic/definition/page?pageSize=50&namespace=").concat(t)).then((function(t){return t.data.data=t.data.data.map((function(t){return t.imageUrl=t.mosaic.description.startsWith("oa:")?nt+t.mosaic.description.slice(3)+".jpg":"",t})),t.data.data})));case 1:case"end":return e.stop()}}),e)})))()}}}),F)},rt={install:function(t){t.prototype.$nem=at()}};a["default"].use(X,{domain:Y["b"],clientId:Y["a"],onRedirectCallback:function(t){H.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),a["default"].use(rt),a["default"].config.productionTip=!1,new a["default"]({vuetify:J,router:H,render:function(t){return t(_)}}).$mount("#app")},"68c7":function(t,e,n){"use strict";n("9db2")},"7e36":function(t,e,n){},8160:function(t){t.exports=JSON.parse('{"b":"marumie.us.auth0.com","a":"boW2wD5YN1zYakV8SVxQONdOzetWZFab"}')},"85ec":function(t,e,n){},"9db2":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8803a31b.js.map