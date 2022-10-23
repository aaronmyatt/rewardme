var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var w=(e,i,u)=>i in e?G(e,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[i]=u,g=(e,i)=>{for(var u in i||(i={}))W.call(i,u)&&w(e,u,i[u]);if(N)for(var u of N(i))X.call(i,u)&&w(e,u,i[u]);return e},B=(e,i)=>H(e,J(i));import{a9 as P,aa as Y,ab as Z,ac as ee,ad as te,S as c,ae,af as j,ag as v,a7 as O,ah as le,ai as ne,aj as z,ak as ie,al as ue,am as oe,an as se,ao as ce,ap as re,r as Q,aq as de,ar as fe,as as ve,at as E,au as me,av as be,aw as he,ax as ge,ay as ye,l as xe,az as Se,aA as Ce,aB as Fe}from"./vendor.e940c656.js";const qe={xs:8,sm:10,md:14,lg:20,xl:24};var Ve=P({name:"QChip",props:B(g(g({},Y),Z),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:i,emit:u}){const{proxy:{$q:F}}=j(),x=ee(e,F),s=te(e,qe),r=c(()=>e.selected===!0||e.icon!==void 0),V=c(()=>e.selected===!0?e.iconSelected||F.iconSet.chip.selected:e.icon),k=c(()=>e.iconRemove||F.iconSet.chip.remove),S=c(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),_=c(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(S.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(x.value===!0?" q-chip--dark q-dark":"")}),C=c(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function a(l){l.keyCode===13&&o(l)}function o(l){e.disable||(u("update:selected",!e.selected),u("click",l))}function n(l){(l.keyCode===void 0||l.keyCode===13)&&(z(l),e.disable===!1&&(u("update:modelValue",!1),u("remove")))}function y(){const l=[];S.value===!0&&l.push(v("div",{class:"q-focus-helper"})),r.value===!0&&l.push(v(O,{class:"q-chip__icon q-chip__icon--left",name:V.value}));const m=e.label!==void 0?[v("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(v("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},le(i.default,m))),e.iconRight&&l.push(v(O,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(v(O,B(g({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:k.value},C.value),{onClick:n,onKeyup:n}))),l}return()=>{if(e.modelValue===!1)return;const l={class:_.value,style:s.value};return S.value===!0&&Object.assign(l,C.value,{onClick:o,onKeyup:a}),ae("div",l,y(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ne,e.ripple]])}}}),Be=P({name:"QFile",inheritAttrs:!1,props:B(g(g(g({},ie),ue),oe),{modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...se,...ce],setup(e,{slots:i,emit:u,attrs:F}){const{proxy:x}=j(),s=re(),r=Q(null),V=Q(!1),k=de(e),{pickFiles:S,onDragover:_,processFiles:C,getDndNode:a}=fe({editable:s.editable,dnd:V,getFileInput:K,addFilesToQueue:D}),o=ve(e),n=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),y=c(()=>E(n.value)),l=c(()=>n.value.map(t=>t.name).join(", ")),m=c(()=>me(n.value.reduce((t,f)=>t+f.size,0))),d=c(()=>({totalSize:m.value,filesNumber:n.value.length,maxFiles:e.maxFiles})),q=c(()=>B(g({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:k.value},F),{id:s.targetUid.value,disabled:s.editable.value!==!0})),b=c(()=>e.multiple===!0&&e.append===!0);function R(t){const f=n.value.slice();f.splice(t,1),I(f)}function L(t){const f=n.value.findIndex(t);f>-1&&R(f)}function I(t){u("update:modelValue",e.multiple===!0?t:t[0])}function $(t){t.keyCode===13&&he(t)}function p(t){(t.keyCode===13||t.keyCode===32)&&S(t)}function K(){return r.value}function D(t,f){const h=C(t,f,n.value,b.value);h!==void 0&&((e.multiple===!0?e.modelValue&&h.every(U=>n.value.includes(U)):e.modelValue===h[0])||I(b.value===!0?n.value.concat(h):h))}function A(){return[v("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function M(){if(i.file!==void 0)return n.value.length===0?A():n.value.map((f,h)=>i.file({index:h,file:f,ref:this}));if(i.selected!==void 0)return n.value.length===0?A():i.selected({files:n.value,ref:this});if(e.useChips===!0)return n.value.length===0?A():n.value.map((f,h)=>v(Ve,{key:"file-"+h,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{R(h)}},()=>v("span",{class:"ellipsis",textContent:f.name})));const t=e.displayValue!==void 0?e.displayValue:l.value;return t.length>0?[v("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:A()}function T(){const t=B(g(g({ref:r},q.value),o.value),{class:"q-field__input fit absolute-full cursor-pointer",onChange:D});return e.multiple===!0&&(t.multiple=!0),v("input",t)}return Object.assign(s,{fieldClass:{value:"q-file q-field--auto-height"},emitValue:I,hasValue:y,inputRef:r,innerValue:n,floatingLabel:c(()=>y.value===!0||E(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(d.value);const t=e.maxFiles;return`${n.value.length}${t!==void 0?" / "+t:""} (${m.value})`}),getControlChild:()=>a("file"),getControl:()=>{const t={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(t,{onDragover:_,onKeydown:$,onKeyup:p}),v("div",t,[T()].concat(M()))}}),Object.assign(x,{removeAtIndex:R,removeFile:L,getNativeElement:()=>r.value}),be(s)}}),Re=P({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:i,emit:u}){const F=j(),x=Q(null);let s=0;const r=[];function V(a){const o=[],n=typeof a=="boolean"?a:e.noErrorFocus!==!0;s++;const y=(m,d)=>{u("validation-"+(m===!0?"success":"error"),d)};for(let m=0;m<r.length;m++){const d=r[m],q=d.validate();if(typeof q.then=="function")o.push(q.then(b=>({valid:b,comp:d}),b=>({valid:!1,comp:d,error:b})));else if(q!==!0){if(e.greedy===!1)return y(!1,d),n===!0&&typeof d.focus=="function"&&d.focus(),Promise.resolve(!1);o.push({valid:!1,comp:d})}}if(o.length===0)return y(!0),Promise.resolve(!0);const l=s;return Promise.all(o).then(m=>{if(l===s){const d=m.filter(R=>R.valid!==!0);if(d.length===0)return y(!0),!0;const{valid:q,comp:b}=d[0];return y(!1,b),n===!0&&q!==!0&&typeof b.focus=="function"&&b.focus(),!1}})}function k(){s++,r.forEach(a=>{typeof a.resetValidation=="function"&&a.resetValidation()})}function S(a){a!==void 0&&z(a),V().then(o=>{o===!0&&(e.onSubmit!==void 0?u("submit",a):a!==void 0&&a.target!==void 0&&typeof a.target.submit=="function"&&a.target.submit())})}function _(a){a!==void 0&&z(a),u("reset"),Ce(()=>{k(),e.autofocus===!0&&e.noResetFocus!==!0&&C()})}function C(){Fe(()=>{if(x.value===null)return;const a=x.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(x.value.querySelectorAll("[tabindex]"),o=>o.tabIndex>-1);a!=null&&a.focus()})}return ge(ye,{bindComponent(a){r.push(a)},unbindComponent(a){const o=r.indexOf(a);o>-1&&r.splice(o,1)}}),xe(()=>{e.autofocus===!0&&C()}),Object.assign(F.proxy,{validate:V,resetValidation:k,submit:S,reset:_,focus:C,getValidationComponents:()=>r}),()=>v("form",{class:"q-form",ref:x,onSubmit:S,onReset:_},Se(i.default))}});export{Re as Q,Be as a};
