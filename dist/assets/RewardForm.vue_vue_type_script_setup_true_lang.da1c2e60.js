import{n as _,A as u,C as i,ac as L,ad as J,b1 as h,aX as K,ay as X,aa as G,ab as W,al as Z,s as Y,b2 as ee,ah as S,a9 as ae,$ as j,d as te,a5 as le,u as ne,J as oe,D as se,v as re,p as ue,X as $,a$ as ie,F as ce,w as V,b as r,a as Q,e as d,Z as B,S as de,a0 as fe,h as P,a1 as me,a2 as ve,b3 as R,a4 as be,o as pe}from"./index.a9189950.js";import{Q as ge,a as he}from"./QForm.2ec3a150.js";function Ve(l,b){const e=_(null),f=u(()=>l.disable===!0?null:i("span",{ref:e,class:"no-outline",tabindex:-1}));function m(c){const t=b.value;c!==void 0&&c.type.indexOf("key")===0?t!==null&&document.activeElement!==t&&t.contains(document.activeElement)===!0&&t.focus():e.value!==null&&(c===void 0||t!==null&&t.contains(c.target)===!0)&&e.value.focus()}return{refocusTargetEl:f,refocusTarget:m}}const xe={xs:30,sm:35,md:40,lg:50,xl:60},ke={...G,...W,...Z,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ye=["update:modelValue"];function _e(l,b){const{props:e,slots:f,emit:m,proxy:c}=Y(),{$q:t}=c,v=L(e,t),g=_(null),{refocusTargetEl:k,refocusTarget:w}=Ve(e,g),s=J(e,xe),n=u(()=>e.val!==void 0&&Array.isArray(e.modelValue)),x=u(()=>{const a=h(e.val);return n.value===!0?e.modelValue.findIndex(p=>h(p)===a):-1}),o=u(()=>n.value===!0?x.value>-1:h(e.modelValue)===h(e.trueValue)),y=u(()=>n.value===!0?x.value===-1:h(e.modelValue)===h(e.falseValue)),q=u(()=>o.value===!1&&y.value===!1),O=u(()=>e.disable===!0?-1:e.tabindex||0),F=u(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(v.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),D=u(()=>{const a=o.value===!0?"truthy":y.value===!0?"falsy":"indet",p=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?o.value===!0:y.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${a}${p}`}),T=u(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{"^checked":o.value===!0?"checked":void 0,name:e.name,value:n.value===!0?e.val:e.trueValue}),a}),E=ee(T),N=u(()=>{const a={tabindex:O.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":q.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function I(a){a!==void 0&&(S(a),w(a)),e.disable!==!0&&m("update:modelValue",U(),a)}function U(){if(n.value===!0){if(o.value===!0){const a=e.modelValue.slice();return a.splice(x.value,1),a}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(y.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function z(a){(a.keyCode===13||a.keyCode===32)&&S(a)}function M(a){(a.keyCode===13||a.keyCode===32)&&I(a)}const H=b(o,q);return Object.assign(c,{toggle:I}),()=>{const a=H();e.disable!==!0&&E(a,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const p=[i("div",{class:D.value,style:s.value,"aria-hidden":"true"},a)];k.value!==null&&p.push(k.value);const C=e.label!==void 0?K(f.default,[e.label]):X(f.default);return C!==void 0&&p.push(i("div",{class:`q-${l}__label q-anchor--skip`},C)),i("div",{ref:g,class:F.value,...N.value,onClick:I,onKeydown:z,onKeyup:M},p)}}const we=i("div",{key:"svg",class:"q-checkbox__bg absolute"},[i("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[i("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),i("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),A=ae({name:"QCheckbox",props:ke,emits:ye,setup(l){function b(e,f){const m=u(()=>(e.value===!0?l.checkedIcon:f.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>m.value!==null?[i("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[i(j,{class:"q-checkbox__icon",name:m.value})])]:[we]}return _e("checkbox",b)}}),Ie={class:"flex justify-end"},Se=te({props:{modelValue:null},emits:["submit"],setup(l,{emit:b}){const e=l,f=le(),m=ne(),{getActiveProfile:c}=oe(),t=se(e.modelValue||{});re(()=>{const s=c.value;s&&s.id?Object.assign(t,{profile:s.id,claimed:!1,active:!1,...t}):f.notify({type:"warning",caption:"Please add or activate a profile first",timeout:0,closeBtn:!0,actions:[{label:"Go to Profiles",handler:()=>m.push("/profiles")}]})});const v=_(),g=_();ue(v,()=>{const s=new FileReader;s.readAsDataURL(v.value);const n=`${v.value.name}_${Date.now()}`;s.onload=async()=>{await $.setImage(n,s.result),t.image=n}}),ie(async()=>{t.image&&(g.value=await $.getImage(t.image))});function k(){const s=R.safeParse(t);s.success&&b("submit",s.data)}function w(){Object.assign(t,R.parse(e.modelValue)),v.value=null,g.value=null}return(s,n)=>{const x=be;return pe(),ce(ve,{flat:""},{default:V(()=>[r(me,null,{default:V(()=>[Q("div",null,[r(x,{jsonable:d(t)},null,8,["jsonable"]),r(ge,{class:"q-gutter-md",onSubmit:k,onReset:w},{default:V(()=>[r(B,{modelValue:d(t).name,"onUpdate:modelValue":n[0]||(n[0]=o=>d(t).name=o),label:"What is this reward?",required:"",standout:"bg-primary text-secondary"},null,8,["modelValue"]),r(B,{modelValue:d(t).milestone,"onUpdate:modelValue":n[1]||(n[1]=o=>d(t).milestone=o),modelModifiers:{number:!0},type:"number",label:"Target",required:"",standout:"bg-primary text-secondary",hint:"How many points are needed to achieve this reward?"},null,8,["modelValue"]),r(he,{modelValue:v.value,"onUpdate:modelValue":n[2]||(n[2]=o=>v.value=o),label:"A picture of the reward",standout:"bg-primary text-secondary"},{prepend:V(()=>[r(j,{name:"attach_file"})]),append:V(()=>[r(de,{square:"",size:"90px"},{default:V(()=>[r(fe,{src:g.value},null,8,["src"])]),_:1})]),_:1},8,["modelValue"]),r(A,{modelValue:d(t).claimed,"onUpdate:modelValue":n[3]||(n[3]=o=>d(t).claimed=o),label:"Have they received this reward already?"},null,8,["modelValue"]),r(A,{modelValue:d(t).active,"onUpdate:modelValue":n[4]||(n[4]=o=>d(t).active=o),label:"Is this the current goal?"},null,8,["modelValue"]),Q("div",Ie,[r(P,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),r(P,{label:"Submit",type:"submit",color:"primary"})])]),_:1})])]),_:1})]),_:1})}}});export{Se as _};