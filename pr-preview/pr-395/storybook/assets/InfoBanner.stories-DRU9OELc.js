import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as W}from"./index-BbAIUH2N.js";import{c as T}from"./clsx-B-dksMZM.js";import{B as q}from"./Button-CJWBcdoM.js";import{X as A}from"./x-Cu6J0Y2u.js";import{C,I as E,a as R,T as z}from"./triangle-alert-BPGApjnK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BAmjpgnq.js";import"./utils-Cd6MiihZ.js";import"./ProgressBar-Dh0Vg3qS.js";import"./Label-Bf-bZThx.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing--RQdELqC.js";import"./index-cpIEhwLo.js";import"./useFocusable-5VAxOUE-.js";import"./createLucideIcon-8wDOqnHv.js";const M='"../theme/tokens.css"',O="_infoBanner_itrpd_4",P="_success_itrpd_14",X="_info_itrpd_4",$="_important_itrpd_24",F="_warning_itrpd_29",G="_content_itrpd_38",H="_heading_itrpd_44",J="_text_itrpd_49",K="_icon_itrpd_54",L="_dismissable_itrpd_59",n={tokens:M,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--notification-border-success":"light-dark(#008d3c, #008d3c)","--notification-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--notification-border-info":"light-dark(#0066cc, #0066cc)","--notification-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--notification-border-warning":"light-dark(#e62323, #e62323)","--notification-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--notification-border-important":"light-dark(#fdb813, #fdb813)","--notification-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:O,success:P,info:X,important:$,warning:F,content:G,heading:H,text:J,icon:K,dismissable:L},Q={success:C,info:E,important:R,warning:z},c=({title:o,message:B,type:l,children:Y,dismissable:N=!1,...d})=>{const j=Q[l],[D,V]=W.useState(!0);return D?e.jsxs("div",{className:T(n.infoBanner,n[l],d.className),...d,children:[e.jsx(j,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[o&&e.jsx("strong",{className:n.heading,children:o}),e.jsxs("div",{className:n.text,children:[B,Y]})]}),N&&e.jsx("div",{className:n.dismissable,children:e.jsx(q,{variant:"icon","aria-label":"Stäng",onPress:()=>V(!1),children:e.jsx(A,{size:20})})})]}):null};try{c.displayName="InfoBanner",c.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Specify what state the InfoBanner represents",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Specify the title",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Specify the message. Element or string",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements displayed inside the banner",name:"children",required:!1,type:{name:"ReactNode"}},dismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",name:"dismissable",required:!1,type:{name:"boolean"}}}}}catch{}const _e={component:c,title:"Components/InfoBanner",tags:["autodocs"]},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},a={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},s={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},r={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,I,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const be=["Success","Warning","Info","Important","Dismissable"];export{i as Dismissable,r as Important,s as Info,t as Success,a as Warning,be as __namedExportsOrder,_e as default};
