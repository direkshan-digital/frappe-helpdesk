import{L as w}from"./LoginBox-70243d97.js";import{_ as x,s as k,o as l,d as h,i as n,b as e,t as g,a as v,r as a,I as V,p as u,c as f,w as m,v as C,k as _,q as F}from"./index-d9377e3a.js";import{E as B}from"./ErrorMessage-e4ff6432.js";import"./CustomIcons-60888788.js";const L={name:"SuccessCard",props:["title","message"],components:{FeatherIcon:k}},M={class:"flex flex-col items-center rounded-md p-10 text-base bg-green-50"},P={class:"mt-4 text-lg font-medium text-gray-900"},q={class:"mt-1.5 text-center text-base text-gray-700"};function A(o,s,c,t,p,d){const r=a("FeatherIcon");return l(),h("div",M,[n(r,{name:"check-circle",class:"stroke-green-500 stroke-2 h-20 w-20"}),e("h2",P,g(c.title),1),e("p",q,[v(o.$slots,"default")])])}const D=x(L,[["render",A]]),T={name:"SuccessCard",props:["title","message"],components:{FeatherIcon:k}},U={class:"flex flex-col items-center rounded-md p-10 text-base bg-red-50"},R={class:"mt-4 text-lg font-medium text-gray-900"},j={class:"mt-1.5 text-center text-base text-gray-700"};function O(o,s,c,t,p,d){const r=a("FeatherIcon");return l(),h("div",U,[n(r,{name:"x-circle",class:"stroke-red-500 stroke-2 h-20 w-20"}),e("h2",R,g(c.title),1),e("p",j,[v(o.$slots,"default")])])}const G=x(T,[["render",O]]),J={name:"Signup",components:{LoginBox:w,Input:V,FeatherIcon:k,ErrorMessage:B,SuccessCard:D,ErrorCard:G},setup(){const o=u(null),s=u(null),c=u(null),t=u(null),p=u(null),d=C("user"),r=u(!1);return{email:o,firstName:s,lastName:c,signupStatus:t,user:d,submitting:r,error:p}},async mounted(){this.user.isLoggedIn()&&(this.$route.name=="PortalSignup"?this.$router.push({path:"/support/tickets"}):this.$route.name=="DeskSignup"&&this.$router.push({path:"/frappedesk/tickets"}))},methods:{async signup(){this.submitting=!0,this.$event.on("user-signup-success",o=>{this.submitting=!1,this.signupStatus="EMAIL SENT"}),this.$event.on("user-signup-error",o=>{this.error=o,this.submitting=!1,this.signupStatus="SINGUP ERROR"}),await this.user.signup(this.email,this.firstName,this.lastName),this.$event.off("user-signup-success"),this.$event.off("user-signup-error")}}},W={key:0},z=e("div",null,[e("div",{class:"mt-10 border-t text-center"},[e("div",{class:"-translate-y-1/2 transform"},[e("span",{class:"bg-white px-2 text-xs uppercase leading-8 tracking-wider text-gray-800"}," Or ")])])],-1),H=e("div",null,"Already have an account? Log in.",-1),K={key:1,class:"text-base mt-[-20px]"},Q={class:"flex space-x-3"},X=e("div",null,"Please ask the admin to add you as an agent",-1),Y={class:"font-semibold"},Z={class:"flex flex-col space-y-5"};function ee(o,s,c,t,p,d){const r=a("Input"),$=a("ErrorMessage"),y=a("Button"),S=a("router-link"),b=a("FeatherIcon"),I=a("LoginBox"),E=a("SuccessCard"),N=a("ErrorCard");return t.signupStatus?t.signupStatus==="EMAIL SENT"?(l(),f(E,{key:1,class:"mx-auto mt-20 w-96 shadow-md",title:"Verification Email Sent!"},{default:m(()=>[_(" We have sent an email to "),e("span",Y,g(t.email),1),_(". Please click on the link received to verify your email and set up your account. ")]),_:1})):(l(),f(N,{key:2,class:"mx-auto mt-20 w-96 shadow-md",title:"Error while signing up!"},{default:m(()=>[e("div",Z,[e("div",null,g(t.error),1),e("div",null,[n(y,{appearance:"primary",onClick:s[4]||(s[4]=i=>o.$router.go())},{default:m(()=>[_("Try Again")]),_:1})])])]),_:1})):(l(),f(I,{key:0,title:this.$route.name==="PortalSignup"?"Create an account":""},{default:m(()=>[this.$route.name==="PortalSignup"?(l(),h("div",W,[e("form",{class:"space-y-4",onSubmit:s[3]||(s[3]=F(i=>d.signup(),["prevent"]))},[n(r,{label:"Email",type:"email",placeholder:"johndoe@mail.com",autocomplete:"email",modelValue:t.email,"onUpdate:modelValue":s[0]||(s[0]=i=>t.email=i),required:""},null,8,["modelValue"]),n(r,{label:"First Name",type:"text",placeholder:"John",modelValue:t.firstName,"onUpdate:modelValue":s[1]||(s[1]=i=>t.firstName=i),class:"mb-4",required:""},null,8,["modelValue"]),n(r,{label:"Last Name",type:"text",placeholder:"Doe",modelValue:t.lastName,"onUpdate:modelValue":s[2]||(s[2]=i=>t.lastName=i),class:"mb-4",required:""},null,8,["modelValue"]),n($,{class:"mt-4",error:""}),e("div",null,[n(y,{appearance:"primary",class:"w-full mt-4",loading:t.submitting,type:"primary"},{default:m(()=>[_(" Submit ")]),_:1},8,["loading"])]),z,n(S,{class:"text-center text-base",to:`${this.$route.name==="DeskSignup"?"/frappedesk":"/support"}/login`},{default:m(()=>[H]),_:1},8,["to"])],32)])):(l(),h("div",K,[e("div",Q,[n(b,{name:"alert-triangle",class:"h-10 w-10 stroke-2 stroke-orange-500"}),X])]))]),_:1},8,["title"]))}const ae=x(J,[["render",ee]]);export{ae as default};
