if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.b7e7825e.js",revision:null},{url:"assets/404.1a61cedf.js",revision:null},{url:"assets/about.b6d28278.js",revision:null},{url:"assets/home.3d81adbc.js",revision:null},{url:"assets/index.532f7d87.css",revision:null},{url:"assets/index.5dcb4ca1.js",revision:null},{url:"assets/index.655b96bc.js",revision:null},{url:"assets/index.aaf54324.js",revision:null},{url:"assets/index.ba7409ba.js",revision:null},{url:"assets/index.e84bb021.js",revision:null},{url:"assets/index.f1d134b3.css",revision:null},{url:"assets/new.14c6376f.js",revision:null},{url:"assets/new.f8caf7f6.js",revision:null},{url:"assets/QColor.abc11e08.js",revision:null},{url:"assets/QDialog.bc11f7ad.js",revision:null},{url:"assets/QForm.9adc67c8.js",revision:null},{url:"assets/QItemLabel.28fb9aee.js",revision:null},{url:"assets/QPageSticky.64da2bcd.js",revision:null},{url:"assets/README.d77b3f78.js",revision:null},{url:"assets/RewardForm.5cb921ad.js",revision:null},{url:"assets/RewardProgress.ac488ed5.js",revision:null},{url:"assets/settings.2ba1416a.js",revision:null},{url:"assets/star.77f60673.js",revision:null},{url:"assets/useRewards.986fd733.js",revision:null},{url:"assets/vue-i18n.runtime.esm-bundler.93f19b25.js",revision:null},{url:"assets/warning.a9b2c04a.js",revision:null},{url:"index.html",revision:"b443ef834c5f37c510c802f3064c0cb2"},{url:"registerSW.js",revision:"4d38fcb20595c99abfe86804eb3d0301"},{url:"logo.svg",revision:"35baf4bcd8dd1d4e4a383eaa929364f1"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"f037545892c4619f24ff5971bf1f01a4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
