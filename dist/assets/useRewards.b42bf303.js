import{r as u,k as d,l as f}from"./vendor.a4dcec07.js";import{u as c,s as r,S as a}from"./index.36f9a2e3.js";const e=u([]);function m(){const o=d(),{getActiveProfile:i}=c();f(()=>{const t=i();if(t){const s=r.getItem(a.REWARDS)||[];e.value=s.filter(l=>l.profile===t.id)}});function n(t){e.value=e.value.filter(s=>s.id!==t.id),r.setItem(a.REWARDS,e.value),o.notify({type:"negative",message:"Reward Deleted"})}return{rewards:e,deleteReward:n}}export{m as u};
