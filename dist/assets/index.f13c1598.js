import{_ as h}from"./RewardForm.4df916b2.js";import{d as v,j,k as b,r as S,l as g,o as n,c as k,m as o,w as i,W as x,E as y,f as E,R as Q,A as F}from"./vendor.01a34e97.js";import{_ as T}from"./FloatingDelete.d7079f5f.js";import{d as A,s as c,S as m}from"./index.1e08156a.js";import"./QForm.f0b5b401.js";import"./warning.bd7cf433.js";import"./trash-can.de8953ee.js";import"./QPageSticky.0e3ee0c5.js";const B={class:"md:w-1/2 mx-auto"},C=F(" Edit Reward "),M=v({props:{rewardid:{type:String,required:!0}},setup(u){const d=u,t=j(),l=b(),{rewards:p,deleteReward:f}=A(),a=S();g(()=>{const e=p.find(s=>s.id===d.rewardid);e?a.value=e:t.push("/rewards")});function w(e){const r=(c.getItem(m.REWARDS)||[]).filter(R=>R.id!==e.id);r.push(e),c.setItem(m.REWARDS,r),l.notify({type:"positive",caption:"Reward Updated"}),t.push({name:"rewards-rewardid",params:{rewardid:d.rewardid}})}function _(){a.value&&f(a.value),t.push("/rewards")}return(e,s)=>{const r=h;return n(),k("div",B,[o(y,null,{default:i(()=>[o(x,null,{default:i(()=>[C]),_:1})]),_:1}),a.value?(n(),E(r,{key:0,"model-value":a.value,onSubmit:w},null,8,["model-value"])):Q("",!0),o(T,{"on-confirmation-action":_})])}}});export{M as default};
