(function(){"use strict";var t={387:function(t,e,a){var n=a(963),i=a(252);function o(t,e,a,n,o,r){const s=(0,i.up)("Sidebar"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s),(0,i.Wm)(c)],64)}const r={class:"container"},s={class:"aside"},c=(0,i._)("div",{class:"logo"},[(0,i._)("a",{href:"#"},[(0,i._)("span",null,"F"),(0,i.Uk)("atima")])],-1),l=(0,i._)("div",{class:"nav-toggler"},[(0,i._)("span")],-1),d={class:"links"},u={class:"sidebar"},p={class:"side-item"},f=(0,i.Uk)("Home"),m={class:"side-item"},v=(0,i.Uk)("About"),h={class:"side-item"},g=(0,i.Uk)("Resume"),b={class:"side-item"},w=(0,i.Uk)("Portfolio"),y={class:"side-item"},_=(0,i.Uk)("Testimonials"),k={class:"side-item"},S=(0,i.Uk)("Contact");function j(t,e,a,n,o,j){const O=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",s,[c,l,(0,i._)("div",d,[(0,i._)("ul",u,[(0,i._)("li",p,[(0,i.Wm)(O,{class:"side-link active","aria-current":"page",to:"/"},{default:(0,i.w5)((()=>[f])),_:1})]),(0,i._)("li",m,[(0,i.Wm)(O,{class:"side-link active","aria-current":"page",to:"/about"},{default:(0,i.w5)((()=>[v])),_:1})]),(0,i._)("li",h,[(0,i.Wm)(O,{class:"side-link active","aria-current":"page",to:"/resume"},{default:(0,i.w5)((()=>[g])),_:1})]),(0,i._)("li",b,[(0,i.Wm)(O,{class:"side-link active","aria-current":"page",to:"/portfolio"},{default:(0,i.w5)((()=>[w])),_:1})]),(0,i._)("li",y,[(0,i.Wm)(O,{class:"side-link active","aria-current":"page",to:"/testimonials"},{default:(0,i.w5)((()=>[_])),_:1})]),(0,i._)("li",k,[(0,i.Wm)(O,{class:"side-link active","aria-current":"page",to:"/contact"},{default:(0,i.w5)((()=>[S])),_:1})])])])])])}var O={name:"Sidebar"},C=a(744);const E=(0,C.Z)(O,[["render",j]]);var A=E,F={name:"App",components:{Sidebar:A}};const T=(0,C.Z)(F,[["render",o]]);var M=T,P=a(119),U=a(577);const x=t=>((0,i.dD)("data-v-0a17d734"),t=t(),(0,i.Cn)(),t),N={class:"container",style:{"margin-right":"350px"}},W={class:"home section",id:"home"},L={class:"container"},D={class:"row justify-content-between"},H={class:"column"},Z=x((()=>(0,i._)("h3",{class:"hello"},[(0,i.Uk)("Hello, my name is "),(0,i._)("span",{class:"name"},"Fatima Mahlaba")],-1))),B={class:"my-profession"},I=(0,i.Uk)("I am "),q={class:"typing"},R=(0,i.uE)('<p data-v-0a17d734>That is passionate about coding.</p><a href="/contact" class="btn hire-me" data-v-0a17d734>Hire Me</a><div style="text-align:center;" data-v-0a17d734><ul data-v-0a17d734><li data-v-0a17d734><a class="github" href="https://github.com/fatimamahlaba" data-v-0a17d734><span data-v-0a17d734></span><span data-v-0a17d734></span><span data-v-0a17d734></span><span data-v-0a17d734></span><span class="iconify" data-icon="ant-design:github-outlined" style="color:green;" data-v-0a17d734></span></a></li><li data-v-0a17d734><a class="linkedin" href="https://www.linkedin.com/in/fatima-mahlaba-197a70224/" data-v-0a17d734><span data-v-0a17d734></span><span data-v-0a17d734></span><span data-v-0a17d734></span><span data-v-0a17d734></span><span class="iconify" data-icon="akar-icons:linkedin-v2-fill" style="color:green;" data-v-0a17d734></span></a></li><li data-v-0a17d734><a class="netlify" href="https://app.netlify.com/teams/fatimamahlaba/overview?_ga=2.94171417.5011832.1645438700-523954179.1642774775" data-v-0a17d734><span data-v-0a17d734></span><span data-v-0a17d734></span><span data-v-0a17d734></span><span data-v-0a17d734></span><span class="iconify" data-icon="bxl:netlify" style="color:green;" data-v-0a17d734></span></a></li></ul></div>',3),z=x((()=>(0,i._)("div",{class:"column"},[(0,i._)("div",{class:"home-img"},[(0,i._)("img",{src:"https://i.postimg.cc/Z5Z3gSrx/Fatima-df7d0a96.jpg",alt:""})])],-1)));function J(t,e,a,n,o,r){return(0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("div",N,[(0,i._)("section",W,[(0,i._)("div",L,[(0,i._)("div",D,[(0,i._)("div",H,[Z,(0,i._)("h3",B,[I,(0,i._)("span",q,(0,U.zw)(o.word),1)]),R]),z])])])])])}var K={name:"Home",data(){return{sentences:["a junior fullstack developer","creative and logical","passionate about JavaScript"],word:""}},methods:{waitForMs(t){return new Promise((e=>setTimeout(e,t)))},async typeSentence(t,e=100){const a=t.split("");let n=0;while(n<a.length)await this.waitForMs(e),this.word+=a[n],n++},async deleteSentence(){const t=this.word,e=t.split("");while(e.length>0)await this.waitForMs(100),e.pop(),this.word=e.join("")},async sentenceLoop(t){let e=0;while(1)await this.typeSentence(t[e]),await this.waitForMs(1500),await this.deleteSentence(),await this.waitForMs(500),e++,e>=t.length&&(e=0)}},mounted(){this.sentenceLoop(this.sentences)}};const Y=(0,C.Z)(K,[["render",J],["__scopeId","data-v-0a17d734"]]);var G=Y;const Q=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:function(){return a.e(443).then(a.bind(a,96))}},{path:"/contact",name:"contact",component:function(){return a.e(443).then(a.bind(a,695))}},{path:"/portfolio",name:"portfolio",component:function(){return a.e(443).then(a.bind(a,270))}},{path:"/resume",name:"resume",component:function(){return a.e(443).then(a.bind(a,371))}},{path:"/testimonials",name:"testimonials",component:function(){return a.e(443).then(a.bind(a,84))}}],V=(0,P.p7)({history:(0,P.r5)(),routes:Q});var X=V;(0,n.ri)(M).use(X).mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,o){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],o=t[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(s=!1,o<r&&(r=o));if(s){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,i,o]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.ecf471ce.js"}}(),function(){a.miniCssF=function(t){return"css/about.f8dfae31.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio-new:";a.l=function(n,i,o,r){if(t[n])t[n].push(i);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+o){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+o),s.src=n),t[n]=[i];var p=function(e,a){s.onerror=s.onload=null,clearTimeout(f);var i=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(a)})),e)return e(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/REPO_NAME/"}(),function(){var t=function(t,e,a,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)a();else{var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=a[n],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){i=r[n],o=i.getAttribute("data-href");if(o===t||o===e)return i}},n=function(n){return new Promise((function(i,o){var r=a.miniCssF(n),s=a.p+r;if(e(r,s))return i();t(n,s,i,o)}))},i={143:0};a.f.miniCss=function(t,e){var a={443:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=n(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,n){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(a,n){i=t[e]=[a,n]}));n.push(i[2]=o);var r=a.p+a.u(e),s=new Error,c=function(n){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}};a.l(r,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,r=n[0],s=n[1],c=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)var d=c(a)}for(e&&e(n);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkportfolio_new"]=self["webpackChunkportfolio_new"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(387)}));n=a.O(n)})();
//# sourceMappingURL=app.24ad0abb.js.map