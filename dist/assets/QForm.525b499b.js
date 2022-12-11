import{a9 as j,aa as K,ab as M,ac as T,ad as U,A as o,ae as G,x as O,C as d,$ as A,af as H,ag as J,ah as I,ai as W,aj as X,ak as Y,al as Z,am as ee,an as te,p as P,ao as ae,ap as le,aq as ne,ar as Q,as as ie,at as ue,au as oe,av as se,aw as ce,y as re,ax as de,z as fe,ay as ve}from"./index.9630c0f8.js";const me={xs:8,sm:10,md:14,lg:20,xl:24};var be=j({name:"QChip",props:{...K,...M,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:g,emit:v}){const{proxy:{$q:C}}=O(),y=T(e,C),u=U(e,me),s=o(()=>e.selected===!0||e.icon!==void 0),q=o(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),V=o(()=>e.iconRemove||C.iconSet.chip.remove),x=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),k=o(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(x.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(y.value===!0?" q-chip--dark q-dark":"")}),S=o(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function a(l){l.keyCode===13&&i(l)}function i(l){e.disable||(v("update:selected",!e.selected),v("click",l))}function n(l){(l.keyCode===void 0||l.keyCode===13)&&(I(l),e.disable===!1&&(v("update:modelValue",!1),v("remove")))}function h(){const l=[];x.value===!0&&l.push(d("div",{class:"q-focus-helper"})),s.value===!0&&l.push(d(A,{class:"q-chip__icon q-chip__icon--left",name:q.value}));const f=e.label!==void 0?[d("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(d("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},H(g.default,f))),e.iconRight&&l.push(d(A,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(d(A,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:V.value,...S.value,onClick:n,onKeyup:n})),l}return()=>{if(e.modelValue===!1)return;const l={class:k.value,style:u.value};return x.value===!0&&Object.assign(l,S.value,{onClick:i,onKeyup:a}),G("div",l,h(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[J,e.ripple]])}}}),ge=j({name:"QFile",inheritAttrs:!1,props:{...W,...X,...Y,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Z,...ee],setup(e,{slots:g,emit:v,attrs:C}){const{proxy:y}=O(),u=te(),s=P(null),q=P(!1),V=ae(e),{pickFiles:x,onDragover:k,processFiles:S,getDndNode:a}=le({editable:u.editable,dnd:q,getFileInput:E,addFilesToQueue:z}),i=ne(e),n=o(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),h=o(()=>Q(n.value)),l=o(()=>n.value.map(t=>t.name).join(", ")),f=o(()=>ie(n.value.reduce((t,r)=>t+r.size,0))),c=o(()=>({totalSize:f.value,filesNumber:n.value.length,maxFiles:e.maxFiles})),F=o(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:V.value,...C,id:u.targetUid.value,disabled:u.editable.value!==!0})),m=o(()=>e.multiple===!0&&e.append===!0);function _(t){const r=n.value.slice();r.splice(t,1),R(r)}function D(t){const r=n.value.findIndex(t);r>-1&&_(r)}function R(t){v("update:modelValue",e.multiple===!0?t:t[0])}function N(t){t.keyCode===13&&oe(t)}function w(t){(t.keyCode===13||t.keyCode===32)&&x(t)}function E(){return s.value}function z(t,r){const b=S(t,r,n.value,m.value);b!==void 0&&((e.multiple===!0?e.modelValue&&b.every(L=>n.value.includes(L)):e.modelValue===b[0])||R(m.value===!0?n.value.concat(b):b))}function B(){return[d("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function $(){if(g.file!==void 0)return n.value.length===0?B():n.value.map((r,b)=>g.file({index:b,file:r,ref:this}));if(g.selected!==void 0)return n.value.length===0?B():g.selected({files:n.value,ref:this});if(e.useChips===!0)return n.value.length===0?B():n.value.map((r,b)=>d(be,{key:"file-"+b,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{_(b)}},()=>d("span",{class:"ellipsis",textContent:r.name})));const t=e.displayValue!==void 0?e.displayValue:l.value;return t.length>0?[d("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:B()}function p(){const t={ref:s,...F.value,...i.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:z};return e.multiple===!0&&(t.multiple=!0),d("input",t)}return Object.assign(u,{fieldClass:{value:"q-file q-field--auto-height"},emitValue:R,hasValue:h,inputRef:s,innerValue:n,floatingLabel:o(()=>h.value===!0||Q(e.displayValue)),computedCounter:o(()=>{if(e.counterLabel!==void 0)return e.counterLabel(c.value);const t=e.maxFiles;return`${n.value.length}${t!==void 0?" / "+t:""} (${f.value})`}),getControlChild:()=>a("file"),getControl:()=>{const t={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(t,{onDragover:k,onKeydown:N,onKeyup:w}),d("div",t,[p()].concat($()))}}),Object.assign(y,{removeAtIndex:_,removeFile:D,getNativeElement:()=>s.value}),ue(u)}}),ye=j({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:g,emit:v}){const C=O(),y=P(null);let u=0;const s=[];function q(a){const i=[],n=typeof a=="boolean"?a:e.noErrorFocus!==!0;u++;const h=(f,c)=>{v("validation-"+(f===!0?"success":"error"),c)};for(let f=0;f<s.length;f++){const c=s[f],F=c.validate();if(typeof F.then=="function")i.push(F.then(m=>({valid:m,comp:c}),m=>({valid:!1,comp:c,error:m})));else if(F!==!0){if(e.greedy===!1)return h(!1,c),n===!0&&typeof c.focus=="function"&&c.focus(),Promise.resolve(!1);i.push({valid:!1,comp:c})}}if(i.length===0)return h(!0),Promise.resolve(!0);const l=u;return Promise.all(i).then(f=>{if(l===u){const c=f.filter(_=>_.valid!==!0);if(c.length===0)return h(!0),!0;const{valid:F,comp:m}=c[0];return h(!1,m),n===!0&&F!==!0&&typeof m.focus=="function"&&m.focus(),!1}})}function V(){u++,s.forEach(a=>{typeof a.resetValidation=="function"&&a.resetValidation()})}function x(a){a!==void 0&&I(a),q().then(i=>{i===!0&&(e.onSubmit!==void 0?v("submit",a):a!==void 0&&a.target!==void 0&&typeof a.target.submit=="function"&&a.target.submit())})}function k(a){a!==void 0&&I(a),v("reset"),fe(()=>{V(),e.autofocus===!0&&e.noResetFocus!==!0&&S()})}function S(){ve(()=>{if(y.value===null)return;const a=y.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(y.value.querySelectorAll("[tabindex]"),i=>i.tabIndex>-1);a!=null&&a.focus()})}return se(ce,{bindComponent(a){s.push(a)},unbindComponent(a){const i=s.indexOf(a);i>-1&&s.splice(i,1)}}),re(()=>{e.autofocus===!0&&S()}),Object.assign(C.proxy,{validate:q,resetValidation:V,submit:x,reset:k,focus:S,getValidationComponents:()=>s}),()=>d("form",{class:"q-form",ref:y,onSubmit:x,onReset:k},de(g.default))}});export{ye as Q,ge as a};