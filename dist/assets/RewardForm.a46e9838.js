var x=Object.defineProperty,P=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var p=(l,e,a)=>e in l?x(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a,f=(l,e)=>{for(var a in e||(e={}))C.call(e,a)&&p(l,a,e[a]);if(c)for(var a of c(e))F.call(e,a)&&p(l,a,e[a]);return l},b=(l,e)=>P(l,B(e));import{Q as A,a as v,b as U,_ as N}from"./QForm.296f46be.js";import{h as S,n as k,m as D,l as M,p as O,r as g,a5 as z,bm as E,o as G,j as J,w as u,q as o,f as V,u as i,a9 as L,F as T,t as $,A as _,y as H,s as K}from"./vendor.ebcca839.js";import{u as W,i as w,R as Q}from"./index.d2a5b63e.js";const X={class:"flex justify-end"},se=S({props:{modelValue:null},emits:["submit"],setup(l,{emit:e}){const a=l,y=k(),j=D(),{getActiveProfile:R}=W(),s=M(a.modelValue||{});O(()=>{const t=R();t&&t.id?Object.assign(s,b(f({},s),{profile:t.id})):y.notify({type:"warning",caption:"Please add or activate a profile first",timeout:0,closeBtn:!0,actions:[{label:"Go to Profiles",handler:()=>j.push("/profiles")}]})});const n=g(),d=g();z(n,()=>{const t=new FileReader;t.readAsDataURL(n.value),t.onload=async()=>{await w.setImage(n.value.name,t.result),s.image=n.value.name}}),E(async()=>{s.image&&(d.value=await w.getImage(s.image))});function I(){const t=Q.safeParse(s);t.success&&e("submit",t.data)}function h(){Object.assign(s,Q.parse(a.modelValue)),n.value=null,d.value=null}return(t,r)=>{const q=N;return G(),J(K,{flat:""},{default:u(()=>[o(H,null,{default:u(()=>[V("div",null,[o(q,{jsonable:i(s)},null,8,["jsonable"]),o(A,{class:"q-gutter-md",onSubmit:I,onReset:h},{default:u(()=>[o(v,{modelValue:i(s).name,"onUpdate:modelValue":r[0]||(r[0]=m=>i(s).name=m),label:"Name",required:""},null,8,["modelValue"]),o(v,{modelValue:i(s).milestone,"onUpdate:modelValue":r[1]||(r[1]=m=>i(s).milestone=m),modelModifiers:{number:!0},type:"number",label:"Target",required:""},null,8,["modelValue"]),o(U,{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=m=>n.value=m),placeholder:i(s).image,outlined:""},{prepend:u(()=>[o(L,{name:"attach_file"})]),append:u(()=>[o(T,{size:"50px"},{default:u(()=>[o($,{src:d.value},null,8,["src"])]),_:1})]),_:1},8,["modelValue","placeholder"]),V("div",X,[o(_,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),o(_,{label:"Submit",type:"submit",color:"primary"})])]),_:1})])]),_:1})]),_:1})}}});export{se as _};
