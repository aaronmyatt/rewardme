import{_ as h}from"./RewardForm.c35c9e90.js";import{d as v,u as y,a5 as x,I as S,p as b,y as g,o as d,c as k,b as s,w as n,h as E,g as T,F as B,a6 as C,U as I,a7 as i,a8 as u}from"./index.9630c0f8.js";import{_ as N}from"./FloatingDelete.0a0f3e84.js";import"./QForm.525b499b.js";import"./warning.f7cad371.js";import"./trash-can.0a20b2b6.js";import"./QPageSticky.090785e9.js";const Q={class:"md:w-1/2 mx-auto"},V=I(" Edit Reward "),K=v({props:{rewardid:{type:String,required:!0}},setup(c){const l=c,o=y(),m=x(),{rewards:p,deleteReward:w}=S(),a=b();g(()=>{const e=p.find(r=>r.id===l.rewardid);e?a.value=e:o.push("/rewards")});function f(e){const t=(i.getItem(u.REWARDS)||[]).filter(R=>R.id!==e.id);t.push(e),i.setItem(u.REWARDS,t),m.notify({type:"positive",caption:"Reward Updated"}),o.push({name:"rewards"})}function _(){a.value&&w(a.value),o.push("/rewards")}return(e,r)=>{const t=h;return d(),k("div",Q,[s(T,null,{default:n(()=>[s(E,null,{default:n(()=>[V]),_:1})]),_:1}),a.value?(d(),B(t,{key:0,"model-value":a.value,onSubmit:f},null,8,["model-value"])):C("",!0),s(N,{"on-confirmation-action":_})])}}});export{K as default};
