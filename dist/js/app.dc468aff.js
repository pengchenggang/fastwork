(function(){"use strict";var t={9662:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],a=n(1001),u={},c=(0,a.Z)(u,o,i,!1,null,null,null),l=c.exports,s=n(2631),f=function(){var t=this,e=t._self._c;return e("div",[e("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[e("layout",[e("div",{attrs:{slot:"left"},slot:"left"},[e("div",{staticStyle:{color:"white"}},[t._v("FastWork")])]),e("div",{attrs:{slot:"content"},slot:"content"},t._l(t.naviData,(function(n){return e("MenuItem",{key:n.name,staticClass:"mainHomeMenuItemClass",attrs:{name:n.name,to:n.to}},[t._v(" "+t._s(n.title)+" ")])})),1),e("div",{attrs:{slot:"right"},slot:"right"},[e("div",{staticStyle:{color:"white"}},[t._v("更快速的开发")])])])],1),e("div",{staticStyle:{padding:"20px"}},[e("router-view")],1)],1)},d=[],m=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"layout"},[e("div",{staticStyle:{"padding-left":"20px"}},[t._t("left")],2),e("div",{staticClass:"grow1"},[e("div",{staticStyle:{"text-align":"center"}},[e("div",{staticClass:"mainHomeMenuClass"},[t._t("content")],2)])]),e("div",{staticStyle:{"padding-right":"20px"}},[t._t("right")],2)])])},p=[],v={name:"mainHomeLayout",props:{},components:{},data(){return{}},watch:{},computed:{},methods:{},created(){},activated(){},mounted(){},beforeDestroy(){}},h=v,g=(0,a.Z)(h,m,p,!1,null,null,null),b=g.exports;const y=[{title:"首页",to:"/home",name:"home"},{title:"关于我们",to:"/about",name:"about"}];var w={name:"mainHome",props:{},components:{layout:b},data(){return{naviData:y}},watch:{},computed:{},methods:{},created(){},activated(){},mounted(){},beforeDestroy(){}},k=w,_=(0,a.Z)(k,f,d,!1,null,null,null),C=_.exports;r["default"].use(s.ZP);const S=[{path:"/",name:"mainHome",redirect:"/home",component:C,children:[{path:"/home",name:"home",component:()=>n.e(572).then(n.bind(n,2572))},{path:"/about",name:"about",component:()=>n.e(399).then(n.bind(n,5399))}]}],O=new s.ZP({routes:S});var x=O,j=n(2321),E=n.n(j);r["default"].use(E()),r["default"].config.productionTip=!1,new r["default"]({router:x,render:t=>t(l)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],i=t[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{399:"0d6eec77",572:"69165d4b"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".8b13b820.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="fastwork:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/fastwork/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(e(a,u))return o();t(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={572:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},r=self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9662)}));r=n.O(r)})();
//# sourceMappingURL=app.dc468aff.js.map