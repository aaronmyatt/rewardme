import{_ as f}from"./FloatingDelete.vue_vue_type_script_setup_true_lang.f4cc07f3.js";import{d as _,u as g,I as v,n as s,v as h,X as R,F as n,w as x,a6 as k,b as C,O as y,o as d}from"./index.a9189950.js";import{_ as I}from"./RewardCard.vue_vue_type_script_setup_true_lang.988096d1.js";import"./warning.8ac518f7.js";import"./trash-can.724a059d.js";import"./QPageSticky.546612f8.js";import"./star.39c3a971.js";const b=_({props:{rewardid:{type:String,required:!0}},setup(c){const u=c,t=g(),{rewards:m,deleteReward:l}=v(),e=s(),o=s();h(()=>{const a=m.find(r=>r.id===u.rewardid);a?(a.image&&R.getImage(a.image).then(r=>{o.value=r}),e.value=a):t.push("/rewards")});function w(){e.value&&l(e.value),t.push("/rewards")}return(a,r)=>{const p=f;return d(),n(y,null,{default:x(()=>[e.value?(d(),n(I,{key:0,reward:e.value,"reward-image":o.value,class:"w-full md:w-2/3 xl:w-1/2 mx-auto"},null,8,["reward","reward-image"])):k("",!0),C(p,{"on-confirmation-action":w})]),_:1})}}}),i={};typeof i=="function"&&i(b);export{b as default};