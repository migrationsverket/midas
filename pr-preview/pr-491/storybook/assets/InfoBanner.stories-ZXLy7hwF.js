import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as W}from"./index-BbAIUH2N.js";import{c as C}from"./clsx-B-dksMZM.js";import{B as T}from"./Button-DGiOj9pJ.js";import{X as q}from"./x-Cu6J0Y2u.js";import{C as A,I as E,T as R}from"./triangle-alert-CJcWSVds.js";import{C as z}from"./circle-alert-CfGi5BVv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Cqa6HD_M.js";import"./Button-Co7pWk88.js";import"./utils-Dv9Ux5aE.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./createLucideIcon-8wDOqnHv.js";const M='"../theme/tokens.css"',O="_infoBanner_1xef3_4",P="_success_1xef3_14",X="_info_1xef3_4",$="_important_1xef3_24",F="_warning_1xef3_29",G="_content_1xef3_38",H="_heading_1xef3_44",J="_text_1xef3_49",K="_icon_1xef3_54",L="_dismissable_1xef3_59",t={tokens:M,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:O,success:P,info:X,important:$,warning:F,content:G,heading:H,text:J,icon:K,dismissable:L},Q={success:A,info:E,important:z,warning:R},l=({title:i,message:B,type:c,children:Y,dismissable:N=!1,...m})=>{const j=Q[c],[D,V]=W.useState(!0);return D?e.jsxs("div",{className:C(t.infoBanner,t[c],m.className),...m,children:[e.jsx(j,{size:20,"aria-hidden":!0,className:t.icon}),e.jsxs("div",{className:t.content,children:[i&&e.jsx("strong",{className:t.heading,children:i}),e.jsxs("div",{className:t.text,children:[B,Y]})]}),N&&e.jsx("div",{className:t.dismissable,children:e.jsx(T,{variant:"icon","aria-label":"Stäng",onPress:()=>V(!1),children:e.jsx(q,{size:20})})})]}):null};try{l.displayName="InfoBanner",l.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Specify what state the InfoBanner represents",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Specify the title",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Specify the message. Element or string",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements displayed inside the banner",name:"children",required:!1,type:{name:"ReactNode"}},dismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",name:"dismissable",required:!1,type:{name:"boolean"}}}}}catch{}const xe={component:l,title:"Components/InfoBanner",tags:["autodocs"]},n={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},a={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},s={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},r={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},o={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,w,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(_=(w=s.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var b,k,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,I,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const Ie=["Success","Warning","Info","Important","Dismissable"];export{o as Dismissable,r as Important,s as Info,n as Success,a as Warning,Ie as __namedExportsOrder,xe as default};
