import{_ as h}from"./RewardForm.a00e5958.js";import{d as v,j,k as b,r as S,l as g,o as d,c as k,p as o,n,X as x,G as y,f as Q,S as D,D as E}from"./vendor.c8e6762f.js";import{_ as F}from"./FloatingDelete.a219c4f3.js";import{e as T,s as i,S as c}from"./index.29a4ab6d.js";import"./QForm.7be5556f.js";import"./warning.a00fd465.js";import"./trash-can.545bd917.js";import"./QPageSticky.a7c029bb.js";const B={class:"md:w-1/2 mx-auto"},C=E(" Edit Reward "),K=v({props:{rewardid:{type:String,required:!0}},setup(u){const l=u,r=j(),m=b(),{rewards:p,deleteReward:f}=T(),a=S();g(()=>{const e=p.find(s=>s.id===l.rewardid);e?a.value=e:r.push("/rewards")});function w(e){const t=(i.getItem(c.REWARDS)||[]).filter(R=>R.id!==e.id);t.push(e),i.setItem(c.REWARDS,t),m.notify({type:"positive",caption:"Reward Updated"}),r.push({name:"rewards"})}function _(){a.value&&f(a.value),r.push("/rewards")}return(e,s)=>{const t=h;return d(),k("div",B,[o(y,null,{default:n(()=>[o(x,null,{default:n(()=>[C]),_:1})]),_:1}),a.value?(d(),Q(t,{key:0,"model-value":a.value,onSubmit:w},null,8,["model-value"])):D("",!0),o(F,{"on-confirmation-action":_})])}}});export{K as default};