if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.f6f727c7.js",revision:null},{url:"assets/404.d784b48b.js",revision:null},{url:"assets/activity-log.5e85702d.js",revision:null},{url:"assets/Banner.dd4b3d1c.js",revision:null},{url:"assets/FloatingDelete.vue_vue_type_script_setup_true_lang.4b582704.js",revision:null},{url:"assets/home.2d34e77f.js",revision:null},{url:"assets/index.027ef82b.js",revision:null},{url:"assets/index.1274c59b.js",revision:null},{url:"assets/index.22dd6ba9.css",revision:null},{url:"assets/index.2e0dfed1.js",revision:null},{url:"assets/index.58ebc28d.js",revision:null},{url:"assets/index.e64883b1.js",revision:null},{url:"assets/new.4f821354.js",revision:null},{url:"assets/new.5e48e9ae.js",revision:null},{url:"assets/QForm.664dec09.js",revision:null},{url:"assets/QPageSticky.b48f9b68.js",revision:null},{url:"assets/RewardCard.vue_vue_type_script_setup_true_lang.5e8f18d4.js",revision:null},{url:"assets/RewardForm.vue_vue_type_script_setup_true_lang.24ecdd44.js",revision:null},{url:"assets/settings.4db7a8ba.js",revision:null},{url:"assets/star.71eb754e.js",revision:null},{url:"assets/trash-can.e4457cec.js",revision:null},{url:"assets/warning.fa308d70.js",revision:null},{url:"fonts/demo.html",revision:"514213bd250cbbb869202278462a57ca"},{url:"fonts/stylesheet.css",revision:"fbc7cdfbc217c8799095d927739eead8"},{url:"index.html",revision:"fb14df1646e7fbc2f407d38c8d47bb27"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.svg",revision:"35baf4bcd8dd1d4e4a383eaa929364f1"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"e6ab041d281f4b828cac914d3252f3d9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
