import{_ as w}from"./FloatingDelete.61acaf88.js";import{d as g,j as _,r as s,l as j,o as n,f as d,n as v,S as h,p as R,V as x}from"./vendor.2cf8fbd6.js";import{_ as b}from"./RewardCard.925836a2.js";import{e as k,i as C}from"./index.d3c99cc4.js";import"./warning.b39e6e95.js";import"./trash-can.6a7d27be.js";import"./QPageSticky.b5f815ea.js";import"./star.5d9291ea.js";var i={};const y=g({props:{rewardid:{type:String,required:!0}},setup(c){const m=c,t=_(),{rewards:l,deleteReward:u}=k(),e=s(),o=s();j(()=>{const a=l.find(r=>r.id===m.rewardid);a?(a.image&&C.getImage(a.image).then(r=>{o.value=r}),e.value=a):t.push("/rewards")});function f(){e.value&&u(e.value),t.push("/rewards")}return(a,r)=>{const p=w;return n(),d(x,null,{default:v(()=>[e.value?(n(),d(b,{key:0,reward:e.value,"reward-image":o.value,class:"w-full md:w-2/3 xl:w-1/2 mx-auto"},null,8,["reward","reward-image"])):h("",!0),R(p,{"on-confirmation-action":f})]),_:1})}}});typeof i=="function"&&i(y);export{y as default};
