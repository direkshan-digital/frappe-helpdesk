import{_ as I,s as P,v as L,u as E,p as k,r as c,o as l,c as w,w as x,b as n,h as A,t as _,m as y,ca as V,d as a,i as p,F as C,e as S,M as D,k as F,q as $,L as j,a as g,x as M,at as q,H as R}from"./index-d9377e3a.js";import{D as B}from"./Dropdown-e0c50cd3.js";import{C as U}from"./CustomIcons-60888788.js";import{u as z}from"./listFilters-8ea4c2e9.js";import{A as H}from"./Autocomplete-c752a27e.js";import{C as Q}from"./CustomSwitch-323f8131.js";import{E as G}from"./ErrorMessage-e4ff6432.js";const J={name:"PresetFilters",components:{Dropdown:B,FeatherIcon:P},props:{doctype:{type:String,required:!0,default:"HD Ticket"},listTitle:{type:String,required:!0,default:"Default List Title"},itemCount:{type:Number,required:!0}},setup(){const e=L("manager"),t=E(),s=z(),r=k([]);return{manager:e,authStore:t,listFilters:s,presetFilters:r}},computed:{title(){return`${this.listTitle} (${this.itemCount})`},filters(){return this.manager.sudoFilters},options(){let e=[],t=this.$resources.presetFilterOptions.data||[];return Object.keys(t).length&&Object.keys(t).forEach(s=>{t[s].length&&e.push({group:s==="user"?"My Filters":"Global",hideLabel:s!=="user",items:t[s].map(r=>({label:r.title,handler:()=>{this.title=r.title,this.presetFilters=[...r.filters],this.manager.addFilters([...r.filters],this.manager.options.urlQueryFilters)},filters:[...r.filters]}))})}),this.$nextTick(()=>{this.sync()}),e}},watch:{filters(){this.sync()}},mounted(){this.$socket.on("list_update",e=>{e.doctype==="FD Preset Filter"&&this.$resources.presetFilterOptions.fetch()})},methods:{sync(){let e=this.filters.filter(s=>s.fieldname&&s.filter_type&&s.value),t=(s,r)=>{if(s.length!==r.length)return!1;for(let i=0;i<s.length;i++){if(s[i].fieldname!==r[i].fieldname)return!1;if(!(s[i].fieldname==="_assign"&&s[i].value==="@me"&&r[i].value===this.authStore.userId)&&(s[i].filter_type!==r[i].filter_type||s[i].value!==r[i].value))return!1}return!0};this.title=`Filtered ${this.manager.options.doctype}s`,e.length==0?this.title=`All ${this.manager.options.doctype}s`:this.options.forEach(s=>{s.items.forEach(r=>{t(r.filters,e)&&(this.title=r.label)})})}},resources:{presetFilterOptions(){return{url:"frappedesk.api.general.get_preset_filters",params:{doctype:this.doctype},auto:!0}}}},K=["onClick"],W={class:"text-lg font-semibold"};function X(e,t,s,r,i,o){const m=c("FeatherIcon"),u=c("Dropdown");return l(),w(u,{placement:"left",options:o.options},{default:x(({toggleDropdown:v})=>[n("div",{class:A(["flex select-none flex-row items-center space-x-1",{"cursor-pointer":!e.$_.isEmpty(o.options)}]),onClick:v},[n("div",W,_(o.title),1),e.$_.isEmpty(o.options)?y("",!0):(l(),w(m,{key:0,name:"chevron-down",class:"h-4 w-4 stroke-2"}))],10,K)]),_:1},8,["options"])}const Y=I(J,[["render",X]]);const Z={name:"FilterBoxItem",props:{filter:{type:Object,required:!0}},components:{FeatherIcon:P,Dropdown:B,Autocomplete:H},inject:["manager"],computed:{operatorOptions(){let e=r=>{switch(r){case"Data":return["like","not like"];case"Link":return["is","is not","like","not like"];case"Datetime":return["before","after"];case"Date":return["before","after"];case"Select":return["is","is not"];default:return["is","is not"]}},[t,s]=this.$resources.dataType.data||"Data";return this.filter.data_type=t,this.filter.data_type=="Link"&&(this.filter.link_doctype=s),e(t).map(r=>({label:r,handler:()=>{this.filter.filter_type=r,this.filter.value?this.$emit("add-filter"):this.toggleDropdown("value")}}))}},mounted(){this.filter.filter_type||this.toggleDropdown("operator")},resources:{dataType(){return{url:"frappedesk.api.general.get_field_data_type",params:{doctype:this.manager.options.doctype,fieldname:this.filter.fieldname},auto:!0}},selectOptionsForField(){return{url:"frappedesk.api.general.get_select_options_for_field"}}},methods:{onInput:V(function(e,t=!0){this.filter.value=e.target.value,this.$emit("add-filter",t)},300),toggleDropdown(e){switch(e){case"operator":document.getElementById(`filter-item-${e}-dropdown-${this.filter.fieldname}`).click();break}},getResourceOptions(e){switch(e.data_type){case"Link":return{url:"frappedesk.extends.client.get_list",inputMap:t=>({doctype:e.link_doctype,pluck:"name",filters:[["name","like",`%${t}%`]]}),responseMap:t=>t.map(s=>({label:s.name,value:s.name}))};case"Select":return{url:"frappedesk.api.general.get_filtered_select_field_options",inputMap:t=>({doctype:this.manager.options.doctype,fieldname:e.fieldname,query:t}),responseMap:t=>t.map(s=>({label:s,value:s}))};default:return null}}}},ee={class:"flex flex-row rounded bg-white shadow pl-1.5 pr-0.5 select-none"},te={class:"py-0.5 px-1 text-gray-700"},re=["id","onClick"],se={key:0,role:"button",class:"hover:bg-gray-100 py-0.5"},oe={key:0},ne=["value"],le={key:1},ie={class:"text-gray-700"},ae={key:2},de=["value"],ce={class:"hover:bg-gray-100 p-1 rounded my-0.5",role:"button"};function ue(e,t,s,r,i,o){const m=c("Dropdown"),u=c("Autocomplete"),v=c("FeatherIcon");return l(),a("div",ee,[n("div",te,_(s.filter.label),1),p(m,{options:o.operatorOptions},{default:x(({toggle:d})=>[n("div",{id:`filter-item-operator-dropdown-${s.filter.fieldname}`,onClick:d,role:"button",class:"hover:bg-gray-100 border-x py-0.5 px-1 text-gray-500"},_(s.filter.filter_type||"operator"),9,re)]),_:1},8,["options"]),s.filter.filter_type?(l(),a("div",se,[["like","not like"].includes(s.filter.filter_type)?(l(),a("div",oe,[n("input",{type:"text",onInput:t[0]||(t[0]=d=>o.onInput(d,!0)),onChange:t[1]||(t[1]=d=>o.onInput(d,!1)),value:s.filter.value,class:"h-2 focus:ring-0 border-0 bg-transparent px-2 text-base text-gray-700"},null,40,ne)])):["Link","Select"].includes(s.filter.data_type)?(l(),a("div",le,[p(u,{class:"px-1",placeholder:`Select ${s.filter.label.toLowerCase()}`,value:s.filter.value,onChange:t[2]||(t[2]=d=>{d&&(s.filter.value=d.value,e.$emit("add-filter"))}),resourceOptions:o.getResourceOptions(s.filter),searchable:!0},{"input-holder":x(({selectedValue:d})=>[n("div",ie,_(d||"select a value"),1)]),_:1},8,["placeholder","value","resourceOptions"])])):["Datetime","Date"].includes(s.filter.data_type)?(l(),a("div",ae,[n("input",{type:"date",class:"h-2 border-0 bg-transparent text-base text-gray-700 focus:ring-0 px-1",role:"button",value:s.filter.value,onInput:t[3]||(t[3]=d=>o.onInput(d,!1))},null,40,de)])):y("",!0)])):y("",!0),n("div",ce,[p(v,{onClick:t[4]||(t[4]=d=>e.$emit("remove-filter")),name:"x",class:"h-3 w-3"})])])}const pe=I(Z,[["render",ue],["__scopeId","data-v-942fcc04"]]),me={name:"FilterBox",components:{FeatherIcon:P,Dropdown:B,FilterBoxItem:pe},inject:["manager","renderOptions"],computed:{showAddFilterButton(){return this.manager.sudoFilters.filter(e=>["like","not like"].includes(e.filter_type)?!(e.fieldname&&e.filter_type):!(e.fieldname&&e.filter_type&&e.value)).length===0},filters(){return this.manager.sudoFilters},filterBoxFieldnameOptions(){let e=[];for(let t in this.manager.options.fields){let s=this.manager.options.fields[t],r=this.manager.helperMethods.convertFieldNameToLabel(s);r&&!this.manager.sudoFilters.find(i=>i.fieldname===s)&&e.push({label:r,handler:()=>{this.createNewFilterItem(s,r)}})}return e}},methods:{createNewFilterItem(e,t=""){this.manager.sudoFilters.push({label:t||e,data_type:null,fieldname:e,filter_type:"",value:""})},applyFilters(){let e=this.manager.sudoFilters.filter(t=>["like","not like"].includes(t.filter_type)?t.fieldname&&t.filter_type:t.fieldname&&t.filter_type&&t.value);this.manager.addFilters(e,this.manager.options.urlQueryFilters)}}},fe={class:"flex flex-row items-center space-x-1 text-base select-none"},he=["onClick"],ge=n("div",null,"Filter",-1);function _e(e,t,s,r,i,o){const m=c("FilterBoxItem"),u=c("FeatherIcon"),v=c("Dropdown");return l(),a("div",fe,[(l(!0),a(C,null,S(o.filters,d=>(l(),a("div",{key:d},[p(m,{ref_for:!0,ref:`filter-box-item-${d.fieldname}`,filter:d,onAddFilter:o.applyFilters,onRemoveFilter:()=>{o.manager.sudoFilters.splice(o.manager.sudoFilters.indexOf(d),1),o.applyFilters()}},null,8,["filter","onAddFilter","onRemoveFilter"])]))),128)),o.showAddFilterButton?(l(),w(v,{key:0,options:o.filterBoxFieldnameOptions},{default:x(({toggle:d})=>[n("div",{role:"button",class:"flex flex-row space-x-1 items-center px-1.5 py-0.5 rounded border border-dashed border-gray-500 text-gray-600 hover:text-gray-900 hover:bg-gray-100",onClick:d},[p(u,{name:"plus",class:"h-4 w-4"}),ge],8,he)]),_:1},8,["options"])):y("",!0)])}const ye=I(me,[["render",_e]]),ve={name:"ListPageController",setup(){const e=L("manager"),t=D(()=>e.value.options.start),s=D(()=>{const o=e.value.options.start,m=e.value.options.pageLength;return o+m>e.value.totalCount?e.value.totalCount:o+m}),r=D(()=>e.value.totalCount),i=k({from:t,to:s,of:r});return{manager:e,showing:i}},components:{FeatherIcon:P}},xe={key:0,class:"flex w-full justify-between space-x-2 items-center text-gray-600 text-base select-none"},Fe={class:"text-gray-900 font-medium"},be={class:"text-gray-900 font-medium"},ke={class:"text-gray-900 font-medium"},we={key:0,class:"flex flex-row space-x-0 items-center"},Ie=["onClick"],Ce={key:1,class:"rounded-[14px] py-1 w-[28px] text-center mx-1"};function Se(e,t,s,r,i,o){const m=c("FeatherIcon");return r.manager.loading?y("",!0):(l(),a("div",xe,[n("div",null,[F(" Showing "),n("span",Fe,_(r.showing.from),1),F(" - "),n("span",be,_(r.showing.to),1),F(" of "),n("span",ke,_(r.showing.of),1)]),r.manager.totalPages!=1?(l(),a("div",we,[p(m,{name:"chevron-left",onClick:t[0]||(t[0]=()=>{r.manager.hasPreviousPage&&r.manager.previousPage()}),class:"rounded-[14px] p-1.5 w-[28px] bg-gray-100 hover:bg-gray-300 stroke-gray-700",role:"button"}),(l(!0),a(C,null,S(r.manager.totalPages,u=>(l(),a("div",{key:u},[[1,r.manager.currentPageNumber-1,r.manager.currentPageNumber,r.manager.currentPageNumber+1,r.manager.totalPages].includes(u)?(l(),a("div",{key:0,role:"button",class:A(["rounded-[14px] py-1 w-[28px] text-center mx-1 hover:bg-gray-600 hover:border hover:border-gray-700 hover:text-white",{"text-white bg-gray-600":u===r.manager.currentPageNumber,"text-gray-600":u!==r.manager.currentPageNumber}]),onClick:()=>{r.manager.currentPageNumber!=u&&r.manager.getPage(u)}},_(u),11,Ie)):[r.manager.currentPageNumber-2,r.manager.currentPageNumber+2].includes(u)&&u>1&&u<r.manager.totalPages?(l(),a("div",Ce," ... ")):y("",!0)]))),128)),p(m,{onClick:t[1]||(t[1]=()=>{r.manager.hasNextPage&&r.manager.nextPage()}),name:"chevron-right",class:"rounded-[14px] p-1.5 w-[28px] bg-gray-100 hover:bg-gray-300 stroke-gray-700",role:"button"})])):y("",!0)]))}const De=I(ve,[["render",Se]]),Pe={name:"SaveFiltersDialog",components:{CustomSwitch:Q,ErrorMessage:G},inject:["manager"],props:{modelValue:{type:Boolean,required:!0}},setup(e,{emit:t}){let s=D({get:()=>e.modelValue,set:m=>{t("update:modelValue",m),m||t("close")}}),r=k(!1),i=k(""),o=k("");return{open:s,showSavedFiltersToAll:r,titleInput:i,titleInputError:o}},watch:{titleInput(e){this.validateInputs()}},methods:{saveFilterPreset(){this.validateInputs()&&this.$resources.saveFilterPreset.submit({doctype:this.manager.options.doctype,is_global:this.showSavedFiltersToAll,title:this.titleInput,filters:this.manager.sudoFilters})},validateInputs(){return this.titleInputError="",this.titleInput===""?(this.titleInputError="Title is required",!1):!0},close(){this.open=!1,this.reset()},reset(){this.showSavedFiltersToAll=!1,this.titleInput="",this.titleInputError=""}},resources:{saveFilterPreset(){return{url:"frappedesk.api.general.save_filter_preset",onSuccess:e=>{this.$toast({title:"Filter Saved!",icon:"check",iconClasses:"text-green-500"}),this.close()},onError:e=>{this.$toast({title:"Error Sending Invites!",text:e,icon:"x",iconClasses:"text-red-500"}),this.close()}}}}},Be={class:"flex flex-col space-y-1"},Oe={class:"flex items-center justify-between space-x-2 text-base"},Le=n("div",null,"Show to all agents",-1);function Ae(e,t,s,r,i,o){const m=c("Input"),u=c("ErrorMessage"),v=c("CustomSwitch"),d=c("Button"),O=c("Dialog");return l(),w(O,{modelValue:r.open,"onUpdate:modelValue":t[3]||(t[3]=h=>r.open=h),options:{title:"Save Filters"},onClose:t[4]||(t[4]=h=>o.reset())},{"body-content":x(()=>[n("form",{class:"flex flex-col space-y-5",onSubmit:t[2]||(t[2]=$((...h)=>o.saveFilterPreset&&o.saveFilterPreset(...h),["prevent"]))},[n("div",Be,[p(m,{type:"text",label:"Title",placeholder:"Title of your filter preset",value:r.titleInput,onInput:t[0]||(t[0]=h=>r.titleInput=h)},null,8,["value"]),p(u,{message:r.titleInputError},null,8,["message"])]),n("div",Oe,[Le,p(v,{modelValue:r.showSavedFiltersToAll,"onUpdate:modelValue":t[1]||(t[1]=h=>r.showSavedFiltersToAll=h)},null,8,["modelValue"])])],32)]),actions:x(()=>[p(d,{appearance:"primary",onClick:o.saveFilterPreset},{default:x(()=>[F("Save")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])}const Te=I(Pe,[["render",Ae]]),Ne={name:"ListViewer",components:{CustomIcons:U,Dropdown:B,FeatherIcon:P,FilterBox:ye,ListPageController:De,LoadingIndicator:j,PresetFilters:Y,SaveFiltersDialog:Te},inject:["manager"],props:{options:{type:Object,default:()=>({})}},setup(e){const t=k(!1),s=D(()=>{const r={fields:{},base:e.options.base||"12",filterBox:e.options.filterBox||!1,presetFilters:e.options.presetFilters||!1};for(let i in e.options.fields)r.fields[i]={label:e.options.fields[i].label||i,width:e.options.fields[i].width||1,priority:e.options.fields[i].priority||5,align:e.options.fields[i].align||"left"};return r});return R("renderOptions",s),{showSaveFiltersDialog:t,renderOptions:s}},computed:{isLoading(){return this.manager.loading}},methods:{sortArrowShow(e){const[t]=this.manager.options.orderBy.split(" ");return t===e},sortArrowName(){const[e,t]=this.manager.options.orderBy.split(" ");return t==="desc"?"chevron-up":"chevron-down"}}},Ee={class:"h-full"},Ve={key:0,class:"flex h-full w-full justify-center align-middle"},$e={key:1,class:"h-full"},je={class:"h-full flex flex-col"},Me={class:"mb-4 flex h-[30px] w-full flex-row items-center space-x-2"},qe={class:"shrink-0"},Re={class:"w-full"},Ue={key:0},ze={class:"shrink-0"},He={key:0},Qe={key:1,class:"flex flex-row space-x-2"},Ge={class:"overflow-auto"},Je={class:"w-full table-auto border-separate border-spacing-y-2"},Ke={class:"z-5 sticky top-0"},We={class:"select-none bg-gray-100 text-base text-gray-500"},Xe={class:"rounded-l-md p-3"},Ye=["onClick"],Ze={class:"inline-table"},et={class:"hover:bg-gray-50"},tt={class:"rounded-l-md p-3"},rt=n("div",{class:"grow"},null,-1),st={class:"flex h-[43px] flex-row items-center"};function ot(e,t,s,r,i,o){const m=c("LoadingIndicator"),u=c("PresetFilters"),v=c("FilterBox"),d=c("Button"),O=c("SaveFiltersDialog"),h=c("Input"),T=c("CustomIcons"),N=c("ListPageController");return l(),a("div",Ee,[o.isLoading?(l(),a("div",Ve,[p(m,{class:"w-8 text-blue-600"})])):(l(),a("div",$e,[g(e.$slots,"body",{},()=>[g(e.$slots,"list-body",{},()=>[n("div",je,[g(e.$slots,"top-section",{},()=>[n("div",Me,[n("div",qe,[g(e.$slots,"top-sub-section-1",{},()=>[s.options.presetFilters?(l(),w(u,{key:0,"list-title":s.options.listTitle},null,8,["list-title"])):y("",!0)])]),n("div",Re,[g(e.$slots,"top-sub-section-2",{},()=>[s.options.filterBox?(l(),w(v,{key:0})):y("",!0)])]),s.options.filterBox&&s.options.presetFilters&&o.manager.options.filters.length>0?(l(),a("div",Ue,[p(d,{"icon-left":"layers",appearance:"minimal",onClick:t[0]||(t[0]=()=>{r.showSaveFiltersDialog=!0})},{default:x(()=>[F(" Save ")]),_:1}),p(O,{modelValue:r.showSaveFiltersDialog,"onUpdate:modelValue":t[1]||(t[1]=f=>r.showSaveFiltersDialog=f),onClose:t[2]||(t[2]=f=>r.showSaveFiltersDialog=!1)},null,8,["modelValue"])])):y("",!0),n("div",ze,[g(e.$slots,"top-sub-section-3",{},()=>[Object.keys(o.manager.selectedItems).length>0?(l(),a("div",He,[g(e.$slots,"bulk-actions",{selectedItems:o.manager.selectedItems})])):(l(),a("div",Qe,[g(e.$slots,"actions"),g(e.$slots,"primary-action",{},()=>[p(d,{appearance:"primary","icon-left":"plus",onClick:t[3]||(t[3]=f=>e.$emit("add-item"))},{default:x(()=>[F(_(s.options.name!=null?`Add ${s.options.name}`:`Add ${o.manager.options.doctype}`),1)]),_:1})])]))])])])]),n("div",Ge,[n("table",Je,[n("thead",Ke,[n("tr",We,[n("th",Xe,[p(h,{type:"checkbox",checked:o.manager.allItemsSelected,class:"cursor-pointer",onClick:o.manager.selectAll},null,8,["checked","onClick"])]),(l(!0),a(C,null,S(Object.keys(r.renderOptions.fields),f=>(l(),a("th",{key:f,class:"cursor-pointer fill-gray-300 text-start font-normal last-of-type:rounded-r-md hover:text-gray-600",onClick:b=>o.manager.toggleOrderBy(f)},[F(_(r.renderOptions.fields[f].label)+" ",1),n("div",Ze,[M(p(T,{name:o.sortArrowName(),class:"h-1 fill-gray-400 stroke-transparent"},null,8,["name"]),[[q,o.sortArrowShow(f)]])])],8,Ye))),128))])]),n("tbody",null,[(l(!0),a(C,null,S(o.manager.list,f=>(l(),a("tr",et,[n("td",tt,[p(h,{type:"checkbox",checked:o.manager.itemSelected(f),class:"cursor-pointer",onClick:b=>o.manager.select(f)},null,8,["checked","onClick"])]),(l(!0),a(C,null,S(Object.keys(r.renderOptions.fields),b=>(l(),a("td",{key:b,class:"py-2 last-of-type:rounded-r-md last-of-type:pr-3"},[g(e.$slots,"field-"+b,{field:b,value:f[b],row:f},()=>[F(_(f[b]),1)])]))),128))]))),256))])])]),rt,n("div",null,[g(e.$slots,"pagination",{},()=>[n("div",st,[p(N)])])])])])])]))])}const pt=I(Ne,[["render",ot]]);export{pt as L};
