import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as V}from"./index-BbAIUH2N.js";import{c as W}from"./clsx-B-dksMZM.js";import{B as C}from"./Button-CKw4I1QT.js";import{X as T}from"./x-Cu6J0Y2u.js";import{C as A,I as E,T as R}from"./triangle-alert-CJcWSVds.js";import{C as z}from"./circle-alert-CfGi5BVv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-BEIdyv-e.js";import"./Button-C6eeUJZ7.js";import"./utils-Dv9Ux5aE.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BH_mgHDo.js";import"./usePress-COtC8Zcb.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./createLucideIcon-8wDOqnHv.js";const M='"../theme/tokens.css"',O="_infoBanner_1yvqc_4",P="_success_1yvqc_14",X="_info_1yvqc_4",$="_important_1yvqc_24",F="_warning_1yvqc_29",G="_content_1yvqc_38",H="_heading_1yvqc_44",J="_text_1yvqc_49",K="_icon_1yvqc_55",L="_dismissable_1yvqc_60",n={tokens:M,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--line-height-04":"undefined","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:O,success:P,info:X,important:$,warning:F,content:G,heading:H,text:J,icon:K,dismissable:L},Q={success:A,info:E,important:z,warning:R},c=({title:i,message:S,type:l,children:B,dismissable:Y=!1,...m})=>{const N=Q[l],[j,D]=V.useState(!0);return j?e.jsxs("div",{...m,className:W(n.infoBanner,n[l],m.className),children:[e.jsx(N,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[i&&e.jsx("strong",{className:n.heading,children:i}),e.jsxs("div",{className:n.text,children:[S,B]})]}),Y&&e.jsx("div",{className:n.dismissable,children:e.jsx(C,{variant:"icon","aria-label":"Stäng",onPress:()=>D(!1),children:e.jsx(T,{size:20})})})]}):null};try{c.displayName="InfoBanner",c.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Specify what state the InfoBanner represents",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Specify the title",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Specify the message. Element or string",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements displayed inside the banner",name:"children",required:!1,type:{name:"ReactNode"}},dismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",name:"dismissable",required:!1,type:{name:"boolean"}}}}}catch{}const xe={component:c,title:"Components/InfoBanner",tags:["autodocs"]},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},a={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},s={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},r={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},o={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,w,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var _,b,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,I,q;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(q=(I=o.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const Ie=["Success","Warning","Info","Important","Dismissable"];export{o as Dismissable,r as Important,s as Info,t as Success,a as Warning,Ie as __namedExportsOrder,xe as default};
