import{p as k,A as u,C as m,ac as M,ad as H,aV as L,ax as J,aa as K,ab as Z,aj as G,x as W,a$ as X,ah as I,a9 as Y,d as ee,a5 as ae,u as te,J as le,D as se,y as oe,q as ne,X as $,aZ as re,o as ue,F as ie,w as p,b as r,a as S,e as d,Z as Q,$ as de,S as ce,a0 as me,i as B,a1 as fe,a2 as ve,b0 as P,a4 as pe}from"./index.9630c0f8.js";import{Q as be,a as ge}from"./QForm.525b499b.js";function Ve(o,b){const e=k(null),f=u(()=>o.disable!==!0?null:m("span",{ref:e,class:"no-outline",tabindex:-1}));function g(i){const t=b.value;i!==void 0&&i.type.indexOf("key")===0?t!==null&&document.activeElement!==t&&t.contains(document.activeElement)===!0&&t.focus():e.value!==null&&(i===void 0||t!==null&&t.contains(i.target)===!0)&&e.value.focus()}return{refocusTargetEl:f,refocusTarget:g}}var he={xs:30,sm:35,md:40,lg:50,xl:60};const xe={...K,...Z,...G,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},toggleOrder:{type:String,validator:o=>o==="tf"||o==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ye=["update:modelValue"];function ke(o,b){const{props:e,slots:f,emit:g,proxy:i}=W(),{$q:t}=i,c=M(e,t),v=k(null),{refocusTargetEl:x,refocusTarget:_}=Ve(e,v),n=H(e,he),l=u(()=>e.val!==void 0&&Array.isArray(e.modelValue)),V=u(()=>l.value===!0?e.modelValue.indexOf(e.val):-1),s=u(()=>l.value===!0?V.value>-1:e.modelValue===e.trueValue),y=u(()=>l.value===!0?V.value===-1:e.modelValue===e.falseValue),w=u(()=>s.value===!1&&y.value===!1),A=u(()=>e.disable===!0?-1:e.tabindex||0),O=u(()=>`q-${o} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(c.value===!0?` q-${o}--dark`:"")+(e.dense===!0?` q-${o}--dense`:"")+(e.leftLabel===!0?" reverse":"")),R=u(()=>{const a=s.value===!0?"truthy":y.value===!0?"falsy":"indet",h=e.color!==void 0&&(e.keepColor===!0||(o==="toggle"?s.value===!0:y.value!==!0))?` text-${e.color}`:"";return`q-${o}__inner relative-position non-selectable q-${o}__inner--${a}${h}`}),F=u(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{"^checked":s.value===!0?"checked":void 0,name:e.name,value:l.value===!0?e.val:e.trueValue}),a}),D=X(F),T=u(()=>{const a={tabindex:A.value,role:"checkbox","aria-label":e.label,"aria-checked":w.value===!0?"mixed":s.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function q(a){a!==void 0&&(I(a),_(a)),e.disable!==!0&&g("update:modelValue",E(),a)}function E(){if(l.value===!0){if(s.value===!0){const a=e.modelValue.slice();return a.splice(V.value,1),a}return e.modelValue.concat([e.val])}if(s.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(y.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function N(a){(a.keyCode===13||a.keyCode===32)&&I(a)}function U(a){(a.keyCode===13||a.keyCode===32)&&q(a)}const z=b(s,w);return Object.assign(i,{toggle:q}),()=>{const a=z();e.disable!==!0&&D(a,"unshift",` q-${o}__native absolute q-ma-none q-pa-none`);const h=[m("div",{class:R.value,style:n.value},a)];x.value!==null&&h.push(x.value);const C=e.label!==void 0?L(f.default,[e.label]):J(f.default);return C!==void 0&&h.push(m("div",{class:`q-${o}__label q-anchor--skip`},C)),m("div",{ref:v,class:O.value,...T.value,onClick:q,onKeydown:N,onKeyup:U},h)}}const _e=m("div",{class:"q-checkbox__bg absolute"},[m("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[m("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),m("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var j=Y({name:"QCheckbox",props:xe,emits:ye,setup(){return ke("checkbox",()=>()=>[_e])}});const qe={class:"flex justify-end"},Ie=ee({props:{modelValue:null},emits:["submit"],setup(o,{emit:b}){const e=o,f=ae(),g=te(),{getActiveProfile:i}=le(),t=se(e.modelValue||{});oe(()=>{const n=i.value;n&&n.id?Object.assign(t,{profile:n.id,claimed:!1,active:!1,...t}):f.notify({type:"warning",caption:"Please add or activate a profile first",timeout:0,closeBtn:!0,actions:[{label:"Go to Profiles",handler:()=>g.push("/profiles")}]})});const c=k(),v=k();ne(c,()=>{const n=new FileReader;n.readAsDataURL(c.value);const l=`${c.value.name}_${Date.now()}`;n.onload=async()=>{await $.setImage(l,n.result),t.image=l}}),re(async()=>{t.image&&(v.value=await $.getImage(t.image))});function x(){const n=P.safeParse(t);n.success&&b("submit",n.data)}function _(){Object.assign(t,P.parse(e.modelValue)),c.value=null,v.value=null}return(n,l)=>{const V=pe;return ue(),ie(ve,{flat:""},{default:p(()=>[r(fe,null,{default:p(()=>[S("div",null,[r(V,{jsonable:d(t)},null,8,["jsonable"]),r(be,{class:"q-gutter-md",onSubmit:x,onReset:_},{default:p(()=>[r(Q,{modelValue:d(t).name,"onUpdate:modelValue":l[0]||(l[0]=s=>d(t).name=s),label:"What is this reward?",required:"",standout:"bg-primary text-secondary"},null,8,["modelValue"]),r(Q,{modelValue:d(t).milestone,"onUpdate:modelValue":l[1]||(l[1]=s=>d(t).milestone=s),modelModifiers:{number:!0},type:"number",label:"Target",required:"",standout:"bg-primary text-secondary",hint:"How many points are needed to achieve this reward?"},null,8,["modelValue"]),r(ge,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=s=>c.value=s),label:"A picture of the reward",standout:"bg-primary text-secondary"},{prepend:p(()=>[r(de,{name:"attach_file"})]),append:p(()=>[r(ce,{square:"",size:"90px"},{default:p(()=>[r(me,{src:v.value},null,8,["src"])]),_:1})]),_:1},8,["modelValue"]),r(j,{modelValue:d(t).claimed,"onUpdate:modelValue":l[3]||(l[3]=s=>d(t).claimed=s),label:"Have they received this reward already?"},null,8,["modelValue"]),r(j,{modelValue:d(t).active,"onUpdate:modelValue":l[4]||(l[4]=s=>d(t).active=s),label:"Is this the current goal?"},null,8,["modelValue"]),S("div",qe,[r(B,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),r(B,{label:"Submit",type:"submit",color:"primary"})])]),_:1})])]),_:1})]),_:1})}}});export{Ie as _};
