if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>n(e,c),d={module:{uri:c},exports:o,require:t};s[c]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-74f2ef77"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"192.png",revision:"3e3346e9515cad954a645f4d7350edc8"},{url:"512.png",revision:"d7c4fbc755cf437ebad04223e632e580"},{url:"assets/about-Dm4s2SG1.jpg",revision:null},{url:"assets/index-07vxO3xK.js",revision:null},{url:"assets/index-DTyv2LPq.css",revision:null},{url:"icons.png",revision:"5e5633f9a30e21c5f1ac947575cd315c"},{url:"index.html",revision:"80a1bbf38c4a38d084c2420f8e7508e6"},{url:"registerSW.js",revision:"438999658a14ffd81be33abdf10b057a"},{url:"192.png",revision:"3e3346e9515cad954a645f4d7350edc8"},{url:"512.png",revision:"d7c4fbc755cf437ebad04223e632e580"},{url:"manifest.webmanifest",revision:"75591d12f05e8647a2470814822d69d9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.(?:png|jpg|jpeg|svg|css|js)/,new e.CacheFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));