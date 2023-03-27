import{p as f,H as V,M as c,C as S,a8 as x,R as O,ab as T,E as F,a6 as g,v as L,cG as G,a0 as R,O as H,U as k,a3 as M,a4 as N,a5 as U,a7 as A,F as z,ad as C,_ as I,o as Y,d as q,i as J,w as Q,b as W,h as w,r as X}from"./index-d9377e3a.js";import{b as Z}from"./use-resolve-button-type-390b11ae.js";import{d as ee,p as te}from"./use-controllable-93c8440b.js";let E=Symbol("LabelContext");function _(){let e=L(E,null);if(e===null){let o=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(o,_),o}return e}function ae({slot:e={},name:o="Label",props:n={}}={}){let l=f([]);function s(r){return l.value.push(r),()=>{let a=l.value.indexOf(r);a!==-1&&l.value.splice(a,1)}}return V(E,{register:s,slot:e,name:o,props:n}),c(()=>l.value.length>0?l.value.join(" "):void 0)}S({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${x()}`}},setup(e,{slots:o,attrs:n}){let l=_();return O(()=>T(l.register(e.id))),()=>{let{name:s="Label",slot:r={},props:a={}}=l,{id:d,passive:p,...m}=e,u={...Object.entries(a).reduce((v,[b,y])=>Object.assign(v,{[b]:F(y)}),{}),id:d};return p&&(delete u.onClick,delete u.htmlFor,delete m.onClick),g({ourProps:u,theirProps:m,slot:r,attrs:n,slots:o,name:s})}}});let B=Symbol("GroupContext");S({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:o,attrs:n}){let l=f(null),s=ae({name:"SwitchLabel",props:{htmlFor:c(()=>{var a;return(a=l.value)==null?void 0:a.id}),onClick(a){l.value&&(a.currentTarget.tagName==="LABEL"&&a.preventDefault(),l.value.click(),l.value.focus({preventScroll:!0}))}}}),r=G({name:"SwitchDescription"});return V(B,{switchRef:l,labelledby:s,describedby:r}),()=>g({theirProps:e,ourProps:{},slot:{},slots:o,attrs:n,name:"SwitchGroup"})}});let le=S({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${x()}`}},inheritAttrs:!1,setup(e,{emit:o,attrs:n,slots:l,expose:s}){let r=L(B,null),[a,d]=ee(c(()=>e.modelValue),t=>o("update:modelValue",t),c(()=>e.defaultChecked));function p(){d(!a.value)}let m=f(null),u=r===null?m:r.switchRef,v=Z(c(()=>({as:e.as,type:n.type})),u);s({el:u,$el:u});function b(t){t.preventDefault(),p()}function y(t){t.key===C.Space?(t.preventDefault(),p()):t.key===C.Enter&&te(t.currentTarget)}function $(t){t.preventDefault()}let h=c(()=>{var t,i;return(i=(t=R(u))==null?void 0:t.closest)==null?void 0:i.call(t,"form")});return O(()=>{H([h],()=>{if(!h.value||e.defaultChecked===void 0)return;function t(){d(e.defaultChecked)}return h.value.addEventListener("reset",t),()=>{var i;(i=h.value)==null||i.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{id:t,name:i,value:j,...D}=e,P={checked:a.value},K={id:t,ref:u,role:"switch",type:v.value,tabIndex:0,"aria-checked":a.value,"aria-labelledby":r?.labelledby.value,"aria-describedby":r?.describedby.value,onClick:b,onKeyup:y,onKeypress:$};return k(z,[i!=null&&a.value!=null?k(M,N({features:U.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:a.value,name:i,value:j})):null,g({ourProps:K,theirProps:{...n,...A(D,["modelValue","defaultChecked"])},slot:P,attrs:n,slots:l,name:"Switch"})])}}});const ne={name:"CustomSwitch",components:{Switch:le},props:{modelValue:{type:[Boolean]},disabled:{type:[Boolean]}},emits:["update:modelValue"],data(){return{isSwitchOn:f(!1)}},watch:{isSwitchOn(e){this.$emit("update:modelValue",e)}},mounted(){this.isSwitchOn=this.modelValue}};function re(e,o,n,l,s,r){const a=X("Switch");return Y(),q("div",{class:w(n.disabled?"pointer-events-none":"")},[J(a,{modelValue:s.isSwitchOn,"onUpdate:modelValue":o[0]||(o[0]=d=>s.isSwitchOn=d),class:w([n.disabled?"border-gray-300":n.modelValue?"border-blue-500":"border-gray-700","relative inline-flex h-4 w-[1.7rem] items-center rounded-full border bg-white"])},{default:Q(()=>[W("span",{class:w([`${n.modelValue?"translate-x-[0.9rem]":"translate-x-1"} ${n.disabled?"bg-gray-300":n.modelValue?"bg-blue-500":"bg-gray-700"}`,"inline-block h-[0.5rem] w-[0.5rem] rounded-full"])},null,2)]),_:1},8,["modelValue","class"])],2)}const ie=I(ne,[["render",re]]);export{ie as C};
