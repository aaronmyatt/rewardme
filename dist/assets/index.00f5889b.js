import{_ as Z,a as z}from"./star.f548e942.js";import{_ as D}from"./trash-can.55326af2.js";import{o as a,c as u,a as s,d as L,X as M,n as E,T as o,w as t,b as e,ad as x,h as r,e as c,$ as v,Y as U,Z as j,aj as F,ae as H,i as K,a0 as R,a1 as d,a2 as l,ac as X,a4 as g,a5 as i,U as b,aQ as Y,aR as y,aS as k,aT as q,aU as G,aV as J}from"./index.a953e485.js";import{_ as O}from"./Banner.5125d982.js";import{Q as W}from"./QPageSticky.ae70aa1d.js";const ee={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},te=s("circle",{cx:"16",cy:"8",r:"2",fill:"currentColor"},null,-1),ae=s("circle",{cx:"16",cy:"16",r:"2",fill:"currentColor"},null,-1),se=s("circle",{cx:"16",cy:"24",r:"2",fill:"currentColor"},null,-1),ne=[te,ae,se];function oe(m,_){return a(),u("svg",ee,ne)}const ce={name:"carbon-overflow-menu-vertical",render:oe},le={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},re=s("path",{fill:"currentColor",d:"M20 8h-2A5 5 0 0 0 8 8H6a7 7 0 0 1 14 0Z"},null,-1),ie=s("path",{fill:"currentColor",d:"M25 15a2.94 2.94 0 0 0-1.47.4A3 3 0 0 0 21 14a2.94 2.94 0 0 0-1.47.4A3 3 0 0 0 16 13.18V8a3 3 0 0 0-6 0v11.1l-2.23-1.52A2.93 2.93 0 0 0 6 17a3 3 0 0 0-2.12 5.13l8 7.3A6.16 6.16 0 0 0 16 31h5a7 7 0 0 0 7-7v-6a3 3 0 0 0-3-3Zm1 9a5 5 0 0 1-5 5h-5a4.17 4.17 0 0 1-2.76-1l-7.95-7.3A1 1 0 0 1 5 20a1 1 0 0 1 1.6-.8l5.4 3.7V8a1 1 0 0 1 2 0v11h2v-3a1 1 0 0 1 2 0v3h2v-2a1 1 0 0 1 2 0v2h2v-1a1 1 0 0 1 2 0Z"},null,-1),_e=[re,ie];function de(m,_){return a(),u("svg",le,_e)}const ue={name:"carbon-touch1",render:de},me=s("h1",{class:"font-bold text-xl sm:text-2xl"}," Create Profiles ",-1),fe=s("p",{class:"text-base sm:text-lg"}," Create as many profiles as you need. Track scores and rewards for each independently ",-1),pe={class:"p-4 xl:w-2/3 md:mx-auto space-y-2 column"},he={class:"flex items-center"},xe=s("span",{class:"pr-2"},"Active",-1),ve={class:"flex items-center"},ge=s("span",{class:"pr-2"},"switch",-1),be=L({__name:"index",setup(m){const{archiveProfile:_,activateAndEdit:w,setActiveProfile:$,profiles:Q,profileImages:A}=M(),f=E(()=>Q.filter(p=>!p.archived));return(p,ye)=>{const P=O,B=J,S=Z,V=ue,I=ce,N=D,T=z;return a(),o(R,null,{default:t(()=>[e(P,null,{default:t(()=>[me,fe]),_:1}),s("main",pe,[e(H,{flat:""},{default:t(()=>[e(x,{class:"p-0"},{default:t(()=>[e(r,{"no-caps":"",flat:"",size:"medium",class:"py-4 w-full rounded-xl text-primary bg-secondary",to:"/profiles/new",label:"Add Profile","icon-right":"add"})]),_:1}),e(x,null,{default:t(()=>[c(f)?(a(),o(v,{key:0},{default:t(()=>[(a(!0),u(j,null,U(c(f),n=>(a(),o(d,{key:n.id},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[n.image?(a(),o(X,{key:0,src:c(A)[n.image],class:"rounded-full",ratio:"1"},null,8,["src"])):(a(),o(B,{key:1}))]),_:2},1024),e(l,null,{default:t(()=>[e(g,{class:"capitalize"},{default:t(()=>[i(b(n.name),1)]),_:2},1024),e(g,{class:"capitalize",caption:""},{default:t(()=>[i(b(n.nickname),1)]),_:2},1024)]),_:2},1024),n.active?(a(),o(l,{key:0,side:"",class:"text-primary"},{default:t(()=>[e(r,{unelevated:"",disabled:""},{default:t(()=>[s("div",he,[xe,i(),e(S)])]),_:1})]),_:1})):(a(),o(l,{key:1,side:"",class:"text-accent"},{default:t(()=>[e(r,{unelevated:"",onClick:h=>c($)(n)},{default:t(()=>[s("div",ve,[ge,i(),e(V)])]),_:2},1032,["onClick"])]),_:2},1024)),e(l,{side:""},{default:t(()=>[e(r,{stretch:""},{default:t(()=>[e(I),e(Y,{class:"border-1 border-white",offset:[0,5]},{default:t(()=>[e(v,{style:{"min-width":"100px"}},{default:t(()=>[y((a(),o(d,{clickable:"",class:"bg-red-6 text-dark",onClick:h=>c(_)(n)},{default:t(()=>[e(l,{class:"flex items-center"},{default:t(()=>[e(N,{class:"text-xl"})]),_:1})]),_:2},1032,["onClick"])),[[k]]),e(q),y((a(),o(d,{clickable:"",class:"bg-primary",onClick:h=>c(w)(n)},{default:t(()=>[e(l,{class:"flex items-center"},{default:t(()=>[e(T,{class:"text-xl"})]),_:1})]),_:2},1032,["onClick"])),[[k]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):F("",!0)]),_:1})]),_:1}),e(K),e(c(G),{class:"w-full h-auto"})]),e(W,{position:"bottom-right",offset:[25,25]},{default:t(()=>[e(r,{rounded:"",padding:"15px",color:"primary",to:"/profiles/new","no-caps":"","icon-right":"person_add",label:"Add Profile"})]),_:1})]),_:1})}}}),C={};typeof C=="function"&&C(be);export{be as default};
