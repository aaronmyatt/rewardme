var h=Object.defineProperty,q=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(s,e,a)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,f=(s,e)=>{for(var a in e||(e={}))C.call(e,a)&&p(s,a,e[a]);if(c)for(var a of c(e))A.call(e,a)&&p(s,a,e[a]);return s},v=(s,e)=>q(s,B(e));import{Q as F,a as b,b as N,_ as U}from"./QForm.4838e825.js";import{d as k,k as S,j as D,i as M,l as O,r as g,a4 as z,bl as E,o as G,f as J,w as u,m as o,a as V,u as i,a8 as L,n as T,Q as $,A as _,R as H,N as K}from"./vendor.a4dcec07.js";import{u as W,i as w,R as Q}from"./index.36f9a2e3.js";const X={class:"flex justify-end"},le=k({props:{modelValue:null},emits:["submit"],setup(s,{emit:e}){const a=s,y=S(),j=D(),{getActiveProfile:R}=W(),l=M(a.modelValue||{});O(()=>{const t=R();t&&t.id?Object.assign(l,v(f({},l),{profile:t.id})):y.notify({type:"warning",caption:"Please add or activate a profile first",timeout:0,closeBtn:!0,actions:[{label:"Go to Profiles",handler:()=>j.push("/profiles")}]})});const n=g(),d=g();z(n,()=>{const t=new FileReader;t.readAsDataURL(n.value),t.onload=async()=>{await w.setImage(n.value.name,t.result),l.image=n.value.name}}),E(async()=>{l.image&&(d.value=await w.getImage(l.image))});function I(){const t=Q.safeParse(l);t.success&&e("submit",t.data)}function x(){Object.assign(l,Q.parse(a.modelValue)),n.value=null,d.value=null}return(t,r)=>{const P=U;return G(),J(K,{flat:""},{default:u(()=>[o(H,null,{default:u(()=>[V("div",null,[o(P,{jsonable:i(l)},null,8,["jsonable"]),o(F,{class:"q-gutter-md",onSubmit:I,onReset:x},{default:u(()=>[o(b,{modelValue:i(l).name,"onUpdate:modelValue":r[0]||(r[0]=m=>i(l).name=m),label:"Name",required:""},null,8,["modelValue"]),o(b,{modelValue:i(l).milestone,"onUpdate:modelValue":r[1]||(r[1]=m=>i(l).milestone=m),modelModifiers:{number:!0},type:"number",label:"Target",required:""},null,8,["modelValue"]),o(N,{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=m=>n.value=m),placeholder:i(l).image,outlined:""},{prepend:u(()=>[o(L,{name:"attach_file"})]),append:u(()=>[o(T,{size:"50px"},{default:u(()=>[o($,{src:d.value},null,8,["src"])]),_:1})]),_:1},8,["modelValue","placeholder"]),V("div",X,[o(_,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),o(_,{label:"Submit",type:"submit",color:"primary"})])]),_:1})])]),_:1})]),_:1})}}});export{le as _};