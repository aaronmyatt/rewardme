import{aF as m,aG as $,A as o,x as b,ax as k,C as v,a9 as S}from"./index.9630c0f8.js";const P={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function C(){const{props:e,proxy:c}=b(),{$q:n}=c,i=m($,()=>{console.error("QPageSticky needs to be child of QLayout")}),x=o(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),l=o(()=>i.header.offset),f=o(()=>i.right.offset),u=o(()=>i.footer.offset),p=o(()=>i.left.offset),d=o(()=>{let t=0,a=0;const r=x.value,g=n.lang.rtl===!0?-1:1;r.top===!0&&l.value!==0?a=`${l.value}px`:r.bottom===!0&&u.value!==0&&(a=`${-u.value}px`),r.left===!0&&p.value!==0?t=`${g*p.value}px`:r.right===!0&&f.value!==0&&(t=`${-g*f.value}px`);const s={transform:`translate(${t}, ${a})`};return e.offset&&(s.margin=`${e.offset[1]}px ${e.offset[0]}px`),r.vertical===!0?(p.value!==0&&(s[n.lang.rtl===!0?"right":"left"]=`${p.value}px`),f.value!==0&&(s[n.lang.rtl===!0?"left":"right"]=`${f.value}px`)):r.horizontal===!0&&(l.value!==0&&(s.top=`${l.value}px`),u.value!==0&&(s.bottom=`${u.value}px`)),s}),h=o(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const a=k(t.default);return v("div",{class:h.value,style:d.value},e.expand===!0?a:[v("div",a)])}return{$layout:i,getStickyContent:y}}var O=S({name:"QPageSticky",props:P,setup(e,{slots:c}){const{getStickyContent:n}=C();return()=>n(c)}});export{O as Q};
