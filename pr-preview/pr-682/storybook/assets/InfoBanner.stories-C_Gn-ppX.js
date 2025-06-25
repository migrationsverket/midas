import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as W}from"./index-ClcD9ViR.js";import{c as q}from"./clsx-B-dksMZM.js";import{T}from"./triangle-alert-BtsNBhJc.js";import{C as A,a as C}from"./circle-check-C7SBYxMN.js";import{I as E}from"./info-DTm9uzms.js";import{B as R}from"./Button-d2SnGqZk.js";import{X as P}from"./x-BaIpobvV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-DQK9Z80p.js";import"./Button.module-AG3JZ-l4.js";import"./Button-D5YfTa-t.js";import"./utils-BLyg3OOq.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-d6PNTTSe.js";import"./useButton-rs5PgjfN.js";const M='"../theme/tokens.css"',O="_infoBanner_cszz3_4",X="_success_cszz3_14",$="_info_cszz3_4",F="_important_cszz3_24",G="_warning_cszz3_29",H="_content_cszz3_38",J="_heading_cszz3_44",K="_text_cszz3_49",L="_icon_cszz3_55",Q="_dismissable_cszz3_60",s={tokens:M,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--line-height-40":"1.375rem","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:O,success:X,info:$,important:F,warning:G,content:H,heading:J,text:K,icon:L,dismissable:Q},U={success:C,info:E,important:A,warning:T},l=({title:i,message:S,type:c,children:B,dismissable:D=!1,isDismissable:Y=!1,...m})=>{const N=U[c],[j,V]=W.useState(!0);return j?e.jsxs("div",{...m,className:q(s.infoBanner,s[c],m.className),children:[e.jsx(N,{size:20,"aria-hidden":!0,className:s.icon}),e.jsxs("div",{className:s.content,children:[i&&e.jsx("strong",{className:s.heading,children:i}),e.jsxs("div",{className:s.text,children:[S,B]})]}),(D||Y)&&e.jsx("div",{className:s.dismissable,children:e.jsx(R,{variant:"icon","aria-label":"Stäng",onPress:()=>V(!1),children:e.jsx(P,{size:20})})})]}):null};try{l.displayName="InfoBanner",l.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Specify what state the InfoBanner represents",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Specify the title",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Specify the message. Element or string",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements displayed inside the banner",name:"children",required:!1,type:{name:"ReactNode"}},dismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner\n@deprecated since 10.0.1. Please use `isDismissable` instead",name:"dismissable",required:!1,type:{name:"boolean"}},isDismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",name:"isDismissable",required:!1,type:{name:"boolean"}}}}}catch{}const we={component:l,title:"Components/InfoBanner",tags:["autodocs"]},a={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},n={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},t={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},r={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},o={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,w,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var _,v,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(k=(v=r.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var z,x,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const be=["Success","Warning","Info","Important","Dismissable"];export{o as Dismissable,r as Important,t as Info,a as Success,n as Warning,be as __namedExportsOrder,we as default};
