import{B as p}from"./Breadcrumbs-4289cef3.js";import{_ as v,s as b,p as d,o as a,d as n,a as w,i as s,w as g,b as l,F as I,e as x,t as k,k as D,r as c}from"./index-d9377e3a.js";const N={name:"CategorySelector",props:{selectedCategory:{type:String,default:null}},components:{Breadcrumbs:p,FeatherIcon:b},emits:["category-selected","update:show"],setup(){const t=d(null),r=d(!1),u=d(null);return{currentCategory:t,showDialog:r,selectedCategoryName:u}},mounted(){this.fetchSubCategoriesInCategory(this.currentCategory?.name);const t=document.getElementById("input");t&&t.addEventListener("focus",r=>{t.blur()})},computed:{isRoot(){return!this.currentCategory},categoriesInCurrentLevel(){return this.$resources.categoriesInCurrentLevel.data||[]}},watch:{currentCategory(t){this.fetchSubCategoriesInCategory(t?.name)}},resources:{categoriesInCurrentLevel(){return{url:"frappedesk.extends.client.get_list"}},selectedCategory(){if(this.selectedCategory)return{url:"frappe.client.get",params:{doctype:"HD Article Category",name:this.selectedCategory},auto:!0,onSuccess:t=>{this.selectedCategoryName=t.category_name}}}},methods:{fetchSubCategoriesInCategory(t){this.$resources.categoriesInCurrentLevel.fetch({doctype:"HD Article Category",fields:["name","category_name","parent_category"],filters:{parent_category:t||"",status:"Published"},order_by:"idx desc",limit:999})}}},S={class:"flex flex-col space-y-3 p-5"},B={class:"rounded border border-gray-200 p-2"},L={class:"h-[200px] overflow-y-auto"},V={key:0,class:"flex flex-col"},F=["onClick"],R={class:"grow line-clamp-1 text-base"},E={key:1,class:"text-base text-gray-700"};function A(t,r,u,e,H,i){const y=c("Input"),m=c("Breadcrumbs"),C=c("FeatherIcon"),h=c("Button"),_=c("Dialog");return a(),n("div",null,[w(t.$slots,"selector-main",{show:()=>{e.showDialog=!0},selectedCategoryName:e.selectedCategoryName},()=>[s(y,{id:"input",label:"Category",onClick:r[0]||(r[0]=()=>{e.showDialog=!0}),placeholder:"Choose Category",role:"button",value:e.selectedCategoryName},null,8,["value"])]),s(_,{options:{title:"Select a Category"},show:e.showDialog,onClose:r[2]||(r[2]=()=>{e.currentCategory=null}),modelValue:e.showDialog,"onUpdate:modelValue":r[3]||(r[3]=o=>e.showDialog=o)},{"body-main":g(()=>[l("div",S,[l("div",B,[s(m,{docType:"Category",docName:e.currentCategory?.name,isRoot:!e.currentCategory,overrideInteraction:(o,f)=>{f?e.currentCategory=null:e.currentCategory=o}},null,8,["docName","isRoot","overrideInteraction"])]),l("div",L,[i.categoriesInCurrentLevel.length>0?(a(),n("div",V,[(a(!0),n(I,null,x(i.categoriesInCurrentLevel,o=>(a(),n("div",{key:o.name},[l("div",{onClick:()=>{e.currentCategory=o},class:"select-none py-3 flex flex-row items-center w-full rounded-sm px-2 border-gray-200 hover:bg-gray-50 border-b",role:"button"},[l("div",R,k(o.category_name),1),s(C,{name:"chevron-right",class:"h-5 w-5 stroke-gray-500"})],8,F)]))),128))])):(a(),n("div",E," Its empty here "))])])]),actions:g(()=>[s(h,{appearance:"primary",disabled:i.isRoot,onClick:r[1]||(r[1]=()=>{e.showDialog=!1,t.$emit("selection",e.currentCategory),e.selectedCategoryName=e.currentCategory.category_name,e.currentCategory=null})},{default:g(()=>[D(" Select ")]),_:1},8,["disabled"])]),_:1},8,["show","modelValue"])])}const U=v(N,[["render",A]]);export{U as C};
