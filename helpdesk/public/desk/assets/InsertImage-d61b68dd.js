import{_ as I,B as f,D,l as h,r as d,o as m,d as c,a as _,n as y,g as w,i as n,w as s,b as r,t as C,m as b,k as u,F as k}from"./index-d9377e3a.js";const B={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addImageDialog:{url:"",file:null,show:!1}}},components:{Button:f,Dialog:D},methods:{openDialog(){this.addImageDialog.show=!0},onImageSelect(t){let e=t.target.files[0];e&&(this.addImageDialog.file=e,h(e).then(i=>{this.addImageDialog.url=i}))},addImage(t){this.editor.chain().focus().setImage({src:t}).run(),this.reset()},reset(){this.addImageDialog=this.$options.data().addImageDialog}}},v={class:"relative cursor-pointer rounded-lg bg-gray-100 py-1 focus-within:bg-gray-200 hover:bg-gray-200"},x={class:"absolute inset-0 select-none px-2 py-1 text-base"},S=["src"];function V(t,e,i,N,a,o){const g=d("Button"),p=d("Dialog");return m(),c(k,null,[_(t.$slots,"default",y(w({onClick:o.openDialog}))),n(p,{options:{title:"Add Image"},modelValue:a.addImageDialog.show,"onUpdate:modelValue":e[2]||(e[2]=l=>a.addImageDialog.show=l),onAfterLeave:o.reset},{"body-content":s(()=>[r("label",v,[r("input",{type:"file",class:"w-full opacity-0",onChange:e[0]||(e[0]=(...l)=>o.onImageSelect&&o.onImageSelect(...l)),accept:"image/*"},null,32),r("span",x,C(a.addImageDialog.file?"Select another image":"Select an image"),1)]),a.addImageDialog.url?(m(),c("img",{key:0,src:a.addImageDialog.url,class:"mt-2 w-full rounded-lg"},null,8,S)):b("",!0)]),actions:s(()=>[n(g,{appearance:"primary",onClick:e[1]||(e[1]=l=>o.addImage(a.addImageDialog.url))},{default:s(()=>[u(" Insert Image ")]),_:1}),n(g,{onClick:o.reset},{default:s(()=>[u(" Cancel ")]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}const F=I(B,[["render",V]]);export{F as default};
