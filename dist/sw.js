if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.c5990694.js",revision:null},{url:"assets/404.748875f6.js",revision:null},{url:"assets/about.7a2dbee9.js",revision:null},{url:"assets/Banner.128f5811.js",revision:null},{url:"assets/FloatingDelete.d7079f5f.js",revision:null},{url:"assets/home.cfc64b2d.js",revision:null},{url:"assets/index.0c62e8d1.js",revision:null},{url:"assets/index.16389a5e.js",revision:null},{url:"assets/index.1e08156a.js",revision:null},{url:"assets/index.c84c575c.js",revision:null},{url:"assets/index.caaf6395.css",revision:null},{url:"assets/index.f13c1598.js",revision:null},{url:"assets/new.62ab8bf0.js",revision:null},{url:"assets/new.ae52349f.js",revision:null},{url:"assets/QColor.03ee524a.js",revision:null},{url:"assets/QForm.f0b5b401.js",revision:null},{url:"assets/QPageSticky.0e3ee0c5.js",revision:null},{url:"assets/README.ed4bedc2.js",revision:null},{url:"assets/RewardCard.c330e3bc.js",revision:null},{url:"assets/RewardForm.4df916b2.js",revision:null},{url:"assets/settings.4385de6a.js",revision:null},{url:"assets/star.f447cf89.js",revision:null},{url:"assets/trash-can.de8953ee.js",revision:null},{url:"assets/vendor.01a34e97.js",revision:null},{url:"assets/warning.bd7cf433.js",revision:null},{url:"index.html",revision:"d86b989bcdb4e96c27cc3904642a3c7a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.svg",revision:"35baf4bcd8dd1d4e4a383eaa929364f1"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"e6ab041d281f4b828cac914d3252f3d9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
