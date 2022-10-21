import{_ as I,a as N}from"./star.f447cf89.js";import{_ as L}from"./trash-can.de8953ee.js";import{o as a,c as d,a as s,d as D,S as R,f as o,w as t,m as e,L as v,z as r,u as c,q as x,be as T,bf as E,R as F,N as K,F as Y,T as q,t as u,x as l,ae as H,Q as G,bg as g,A as i,M as y,p as J,s as b,C as k,y as O}from"./vendor.01a34e97.js";import{u as U,K as W,c as X}from"./index.1e08156a.js";import{_ as Z}from"./Banner.128f5811.js";import{Q as ee}from"./QPageSticky.0e3ee0c5.js";const te={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},ae=s("circle",{cx:"16",cy:"8",r:"2",fill:"currentColor"},null,-1),se=s("circle",{cx:"16",cy:"16",r:"2",fill:"currentColor"},null,-1),ne=s("circle",{cx:"16",cy:"24",r:"2",fill:"currentColor"},null,-1),oe=[ae,se,ne];function ce(f,_){return a(),d("svg",te,oe)}var le={name:"carbon-overflow-menu-vertical",render:ce};const re={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},ie=s("path",{d:"M20 8h-2A5 5 0 0 0 8 8H6a7 7 0 0 1 14 0z",fill:"currentColor"},null,-1),_e=s("path",{d:"M25 15a2.94 2.94 0 0 0-1.47.4A3 3 0 0 0 21 14a2.94 2.94 0 0 0-1.47.4A3 3 0 0 0 16 13.18V8a3 3 0 0 0-6 0v11.1l-2.23-1.52A2.93 2.93 0 0 0 6 17a3 3 0 0 0-2.12 5.13l8 7.3A6.16 6.16 0 0 0 16 31h5a7 7 0 0 0 7-7v-6a3 3 0 0 0-3-3zm1 9a5 5 0 0 1-5 5h-5a4.17 4.17 0 0 1-2.76-1l-7.95-7.3A1 1 0 0 1 5 20a1 1 0 0 1 1.6-.8l5.4 3.7V8a1 1 0 0 1 2 0v11h2v-3a1 1 0 0 1 2 0v3h2v-2a1 1 0 0 1 2 0v2h2v-1a1 1 0 0 1 2 0z",fill:"currentColor"},null,-1),de=[ie,_e];function ue(f,_){return a(),d("svg",re,de)}var fe={name:"carbon-touch1",render:ue},w={};const me=s("h1",{class:"font-bold text-2xl"}," Create Profiles ",-1),pe=s("p",{class:"text-lg"}," Create as many profiles as you need. Track score and rewards for each independently ",-1),he={class:"p-4 xl:w-2/3 md:mx-auto space-y-2 column"},ve={class:"flex items-center"},xe=s("span",{class:"pr-2"},"Active",-1),ge=i(),ye={class:"flex items-center"},be=s("span",{class:"pr-2"},"switch",-1),ke=i(),we=D({setup(f){const{archiveProfile:_,activateAndEdit:C,setActiveProfile:Q,profiles:A,profileImages:$}=U(),m=R(()=>A.filter(p=>!p.archived));return(p,Ce)=>{const P=Z,B=X,M=I,S=fe,z=le,j=L,V=N;return a(),o(q,null,{default:t(()=>[e(P,null,{default:t(()=>[me,pe]),_:1}),s("main",he,[e(K,{flat:""},{default:t(()=>[e(v,{class:"p-0"},{default:t(()=>[e(r,{"no-caps":"",flat:"",size:"medium",class:"py-4 w-full rounded-xl text-primary bg-secondary",to:"/profiles/new",label:"Add Profile","icon-right":"add"})]),_:1}),e(v,null,{default:t(()=>[c(m)?(a(),o(x,{key:0},{default:t(()=>[(a(!0),d(E,null,T(c(m),n=>(a(),o(u,{key:n.id},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[n.image?(a(),o(H,{key:0,w:"50px",h:"50px"},{default:t(()=>[e(G,{src:c($)[n.image]},null,8,["src"])]),_:2},1024)):(a(),o(B,{key:1,w:"50px"}))]),_:2},1024),e(l,null,{default:t(()=>[e(g,{class:"capitalize"},{default:t(()=>[i(y(n.name),1)]),_:2},1024),e(g,{class:"capitalize",caption:""},{default:t(()=>[i(y(n.nickname),1)]),_:2},1024)]),_:2},1024),n.active?(a(),o(l,{key:0,side:"",class:"text-primary"},{default:t(()=>[e(r,{unelevated:"",disabled:""},{default:t(()=>[s("div",ve,[xe,ge,e(M)])]),_:1})]),_:1})):(a(),o(l,{key:1,side:"",class:"text-accent"},{default:t(()=>[e(r,{unelevated:"",onClick:h=>c(Q)(n)},{default:t(()=>[s("div",ye,[be,ke,e(S)])]),_:2},1032,["onClick"])]),_:2},1024)),e(l,{side:""},{default:t(()=>[e(r,{stretch:""},{default:t(()=>[e(z),e(J,{border:"1 white",offset:[0,5]},{default:t(()=>[e(x,{style:{"min-width":"100px"}},{default:t(()=>[b((a(),o(u,{clickable:"",class:"bg-red-6 text-dark",onClick:h=>c(_)(n)},{default:t(()=>[e(l,{class:"flex items-center"},{default:t(()=>[e(j,{class:"text-xl"})]),_:1})]),_:2},1032,["onClick"])),[[k]]),e(O),b((a(),o(u,{clickable:"",class:"bg-primary",onClick:h=>c(C)(n)},{default:t(()=>[e(l,{class:"flex items-center"},{default:t(()=>[e(V,{class:"text-xl"})]),_:1})]),_:2},1032,["onClick"])),[[k]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):F("",!0)]),_:1})]),_:1}),e(Y),e(c(W),{class:"w-full h-auto"})]),e(ee,{position:"bottom-right",offset:[25,25]},{default:t(()=>[e(r,{rounded:"",padding:"15px",color:"primary",to:"/profiles/new","no-caps":"","icon-right":"person_add",label:"Add Profile"})]),_:1})]),_:1})}}});typeof w=="function"&&w(we);export{we as default};
