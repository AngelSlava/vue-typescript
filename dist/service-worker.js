if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const u=e=>t(e,n),c={module:{uri:n},exports:o,require:u};s[n]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"crud-table-qfs"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue-typescript/css/app.40e82320.css",revision:null},{url:"/vue-typescript/index.html",revision:"44e216fbb13b47507d332f542d90523b"},{url:"/vue-typescript/js/about.7e71fa9e.js",revision:null},{url:"/vue-typescript/js/app.62d364e2.js",revision:null},{url:"/vue-typescript/js/chunk-vendors.94748afe.js",revision:null},{url:"/vue-typescript/manifest.json",revision:"28f94bdc8e22e4cf7febb918225e56a0"},{url:"/vue-typescript/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
