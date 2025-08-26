import{j as e}from"./jsx-runtime-BYYWji4R.js";import{i as W}from"./icon-map-yTTVA-eu.js";import{r as q}from"./index-ClcD9ViR.js";import{c as E}from"./clsx-B-dksMZM.js";import{B as T}from"./Button-OrY0IjB_.js";import{X as A}from"./x-Dz2R9y6b.js";import{u as R}from"./useLocalizedStringFormatter-9M_dEwOo.js";import"./createLucideIcon-uZw3gxGR.js";import"./info-CSjK64PU.js";import"./check-yXF3Bjrk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";const C='"../theme/tokens.css"',F="_infoBanner_cszz3_4",L="_success_cszz3_14",M="_info_cszz3_4",O="_important_cszz3_24",P="_warning_cszz3_29",X="_content_cszz3_38",G="_heading_cszz3_44",H="_text_cszz3_49",J="_icon_cszz3_55",K="_dismissable_cszz3_60",s={tokens:C,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--line-height-40":"1.375rem","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:F,success:L,info:M,important:O,warning:P,content:X,heading:G,text:H,icon:J,dismissable:K},Q={close:"Close"},U={close:"Stäng"},Z={en:Q,sv:U},c=({title:i,message:S,type:l,children:B,isDismissable:D=!1,...m})=>{const Y=W[l],[N,j]=q.useState(!0),V=R(Z);return N?e.jsxs("div",{...m,className:E(s.infoBanner,s[l],m.className),children:[e.jsx(Y,{size:20,"aria-hidden":!0,className:s.icon}),e.jsxs("div",{className:s.content,children:[i&&e.jsx("strong",{className:s.heading,children:i}),e.jsxs("div",{className:s.text,children:[S,B]})]}),D&&e.jsx("div",{className:s.dismissable,children:e.jsx(T,{variant:"icon","aria-label":V.format("close"),onPress:()=>j(!1),children:e.jsx(A,{size:20})})})]}):null};try{c.displayName="InfoBanner",c.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Specify the title",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Specify the message. Element or string",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements displayed inside the banner",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",name:"isDismissable",required:!1,type:{name:"boolean"}}}}}catch{}const ke={component:c,title:"Components/InfoBanner",tags:["autodocs"]},n={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},t={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},a={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},r={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},o={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,w,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(_=(w=a.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var b,v,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const ze=["Success","Warning","Info","Important","Dismissable"];export{o as Dismissable,r as Important,a as Info,n as Success,t as Warning,ze as __namedExportsOrder,ke as default};
