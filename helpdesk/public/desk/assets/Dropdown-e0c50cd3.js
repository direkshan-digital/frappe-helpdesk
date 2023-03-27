import{C as T,p as x,Y as W,M,Z as Y,$ as Z,a0 as b,H as J,a1 as X,W as $,a2 as C,a6 as D,a8 as O,a9 as G,aa as E,R as N,ab as ee,Q as te,V as _,v as ne,ad as f,cb as ae,aj as L,cc as Q,ac as oe,_ as le,B as re,s as se,P as ue,o as h,c as S,w as k,i as F,a as ie,n as ce,bj as V,k as de,t as A,h as j,d as R,e as K,m as z,F as U,bB as H,b as pe,r as w}from"./index-d9377e3a.js";import{p as ve,u as me,x as fe,a as y}from"./use-tracked-pointer-4b3ac621.js";import{b as be}from"./use-resolve-button-type-390b11ae.js";var ge=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(ge||{}),Ie=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ie||{});function ye(n){requestAnimationFrame(()=>requestAnimationFrame(n))}let q=Symbol("MenuContext");function B(n){let s=ne(q,null);if(s===null){let d=new Error(`<${n} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,B),d}return s}let he=T({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(n,{slots:s,attrs:d}){let I=x(1),e=x(null),p=x(null),i=x([]),g=x(""),c=x(null),u=x(1);function t(l=r=>r){let r=c.value!==null?i.value[c.value]:null,a=oe(l(i.value.slice()),m=>b(m.dataRef.domRef)),o=r?a.indexOf(r):null;return o===-1&&(o=null),{items:a,activeItemIndex:o}}let v={menuState:I,buttonRef:e,itemsRef:p,items:i,searchQuery:g,activeItemIndex:c,activationTrigger:u,closeMenu:()=>{I.value=1,c.value=null},openMenu:()=>I.value=0,goToItem(l,r,a){let o=t(),m=fe(l===y.Specific?{focus:y.Specific,id:r}:{focus:l},{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:P=>P.id,resolveDisabled:P=>P.dataRef.disabled});g.value="",c.value=m,u.value=a??1,i.value=o.items},search(l){let r=g.value!==""?0:1;g.value+=l.toLowerCase();let a=(c.value!==null?i.value.slice(c.value+r).concat(i.value.slice(0,c.value+r)):i.value).find(m=>m.dataRef.textValue.startsWith(g.value)&&!m.dataRef.disabled),o=a?i.value.indexOf(a):-1;o===-1||o===c.value||(c.value=o,u.value=1)},clearSearch(){g.value=""},registerItem(l,r){let a=t(o=>[...o,{id:l,dataRef:r}]);i.value=a.items,c.value=a.activeItemIndex,u.value=1},unregisterItem(l){let r=t(a=>{let o=a.findIndex(m=>m.id===l);return o!==-1&&a.splice(o,1),a});i.value=r.items,c.value=r.activeItemIndex,u.value=1}};return W([e,p],(l,r)=>{var a;v.closeMenu(),Y(r,Z.Loose)||(l.preventDefault(),(a=b(e))==null||a.focus())},M(()=>I.value===0)),J(q,v),X(M(()=>$(I.value,{[0]:C.Open,[1]:C.Closed}))),()=>{let l={open:I.value===0,close:v.closeMenu};return D({ourProps:{},theirProps:n,slot:l,slots:s,attrs:d,name:"Menu"})}}}),xe=T({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${O()}`}},setup(n,{attrs:s,slots:d,expose:I}){let e=B("MenuButton");I({el:e.buttonRef,$el:e.buttonRef});function p(u){switch(u.key){case f.Space:case f.Enter:case f.ArrowDown:u.preventDefault(),u.stopPropagation(),e.openMenu(),_(()=>{var t;(t=b(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(y.First)});break;case f.ArrowUp:u.preventDefault(),u.stopPropagation(),e.openMenu(),_(()=>{var t;(t=b(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(y.Last)});break}}function i(u){switch(u.key){case f.Space:u.preventDefault();break}}function g(u){n.disabled||(e.menuState.value===0?(e.closeMenu(),_(()=>{var t;return(t=b(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(u.preventDefault(),e.openMenu(),ye(()=>{var t;return(t=b(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let c=be(M(()=>({as:n.as,type:s.type})),e.buttonRef);return()=>{var u;let t={open:e.menuState.value===0},{id:v,...l}=n,r={ref:e.buttonRef,id:v,type:c.value,"aria-haspopup":"menu","aria-controls":(u=b(e.itemsRef))==null?void 0:u.id,"aria-expanded":n.disabled?void 0:e.menuState.value===0,onKeydown:p,onKeyup:i,onClick:g};return D({ourProps:r,theirProps:l,slot:t,attrs:s,slots:d,name:"MenuButton"})}}}),Me=T({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${O()}`}},setup(n,{attrs:s,slots:d,expose:I}){let e=B("MenuItems"),p=x(null);I({el:e.itemsRef,$el:e.itemsRef}),ve({container:M(()=>b(e.itemsRef)),enabled:M(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function i(t){var v;switch(p.value&&clearTimeout(p.value),t.key){case f.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case f.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let l=e.items.value[e.activeItemIndex.value];(v=b(l.dataRef.domRef))==null||v.click()}e.closeMenu(),Q(b(e.buttonRef));break;case f.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.Next);case f.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.Previous);case f.Home:case f.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.First);case f.End:case f.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.Last);case f.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),_(()=>{var l;return(l=b(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case f.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),_(()=>ae(b(e.buttonRef),t.shiftKey?L.Previous:L.Next));break;default:t.key.length===1&&(e.search(t.key),p.value=setTimeout(()=>e.clearSearch(),350));break}}function g(t){switch(t.key){case f.Space:t.preventDefault();break}}let c=G(),u=M(()=>c!==null?(c.value&C.Open)===C.Open:e.menuState.value===0);return()=>{var t,v;let l={open:e.menuState.value===0},{id:r,...a}=n,o={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(v=b(e.buttonRef))==null?void 0:v.id,id:r,onKeydown:i,onKeyup:g,role:"menu",tabIndex:0,ref:e.itemsRef};return D({ourProps:o,theirProps:a,slot:l,attrs:s,slots:d,features:E.RenderStrategy|E.Static,visible:u.value,name:"MenuItems"})}}}),ke=T({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${O()}`}},setup(n,{slots:s,attrs:d,expose:I}){let e=B("MenuItem"),p=x(null);I({el:p,$el:p});let i=M(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===n.id:!1),g=M(()=>({disabled:n.disabled,textValue:"",domRef:p}));N(()=>{var a,o;let m=(o=(a=b(p))==null?void 0:a.textContent)==null?void 0:o.toLowerCase().trim();m!==void 0&&(g.value.textValue=m)}),N(()=>e.registerItem(n.id,g)),ee(()=>e.unregisterItem(n.id)),te(()=>{e.menuState.value===0&&i.value&&e.activationTrigger.value!==0&&_(()=>{var a,o;return(o=(a=b(p))==null?void 0:a.scrollIntoView)==null?void 0:o.call(a,{block:"nearest"})})});function c(a){if(n.disabled)return a.preventDefault();e.closeMenu(),Q(b(e.buttonRef))}function u(){if(n.disabled)return e.goToItem(y.Nothing);e.goToItem(y.Specific,n.id)}let t=me();function v(a){t.update(a)}function l(a){t.wasMoved(a)&&(n.disabled||i.value||e.goToItem(y.Specific,n.id,0))}function r(a){t.wasMoved(a)&&(n.disabled||i.value&&e.goToItem(y.Nothing))}return()=>{let{disabled:a}=n,o={active:i.value,disabled:a,close:e.closeMenu},{id:m,...P}=n;return D({ourProps:{id:m,ref:p,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:v,onMouseenter:v,onPointermove:l,onMousemove:l,onPointerleave:r,onMouseleave:r},theirProps:{...d,...P},slot:o,attrs:d,slots:s,name:"MenuItem"})}}});const we={name:"Dropdown",props:{button:{type:Object,default:null},options:{type:Array,default:()=>[]},placement:{type:String,default:"left"}},components:{Menu:he,MenuButton:xe,MenuItems:Me,MenuItem:ke,Button:re,FeatherIcon:se,Popover:ue},methods:{normalizeDropdownItem(n){let s=n.handler||null;return!s&&n.route&&this.$router&&(s=()=>this.$router.push(n.route)),{label:n.label,icon:n.icon,group:n.group,component:n.component,onClick:s}},filterOptions(n){return(n||[]).filter(Boolean).filter(s=>s.condition?s.condition():!0).map(s=>this.normalizeDropdownItem(s))}},computed:{groups(){return(this.options[0]?.group?this.options:[{group:"",items:this.options}]).map((s,d)=>({key:d,group:s.group,hideLabel:s.hideLabel||!1,items:this.filterOptions(s.items)}))},dropdownTransition(){return{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"}}}},Se={key:0,class:"px-2 py-1 text-xs font-semibold uppercase tracking-wider text-gray-500"},_e=["onClick"],Pe={class:"whitespace-nowrap"};function Re(n,s,d,I,e,p){const i=w("Button"),g=w("MenuButton"),c=w("FeatherIcon"),u=w("MenuItem"),t=w("MenuItems"),v=w("Popover"),l=w("Menu");return h(),S(l,{as:"div",class:"relative inline-block text-left"},{default:k(({open:r})=>[F(v,{transition:p.dropdownTransition,show:r},{target:k(()=>[F(g,{as:"div"},{default:k(()=>[n.$slots.default?ie(n.$slots,"default",ce(V({key:0},{open:r}))):(h(),S(i,V({key:1,active:r},d.button),{default:k(()=>[de(A(d.button?d.button?.label||null:"Options"),1)]),_:2},1040,["active"]))]),_:2},1024)]),body:k(()=>[F(t,{class:j(["min-w-40 mt-2 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",{"left-0 origin-top-left":d.placement=="left","right-0 origin-top-right":d.placement=="right","inset-x-0 origin-top":d.placement=="center"}])},{default:k(()=>[(h(!0),R(U,null,K(p.groups,a=>(h(),R("div",{key:a.key,class:"px-1 py-1"},[a.group&&!a.hideLabel?(h(),R("div",Se,A(a.group),1)):z("",!0),(h(!0),R(U,null,K(a.items,o=>(h(),S(u,{key:o.label},{default:k(({active:m})=>[o.component?(h(),S(H(o.component),{key:0,active:m},null,8,["active"])):(h(),R("button",{key:1,class:j([m?"bg-gray-100":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"]),onClick:o.onClick},[o.icon&&typeof o.icon=="string"?(h(),S(c,{key:0,name:o.icon,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-500","aria-hidden":"true"},null,8,["name"])):o.icon?(h(),S(H(o.icon),{key:1,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-500"})):z("",!0),pe("span",Pe,A(o.label),1)],10,_e))]),_:2},1024))),128))]))),128))]),_:1},8,["class"])]),_:2},1032,["transition","show"])]),_:3})}const Be=le(we,[["render",Re]]);export{Be as D};
