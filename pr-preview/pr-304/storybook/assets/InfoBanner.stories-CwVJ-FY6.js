import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as V}from"./index-BbAIUH2N.js";import{c as R}from"./clsx-B-dksMZM.js";import{B as T}from"./Button-B9fbOQiA.js";import{X as q}from"./x-Cu6J0Y2u.js";import{C as A,I as C,a as E,T as G}from"./triangle-alert-BPGApjnK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-yfKCtftD.js";import"./useFocusable-DASL9ZMT.js";import"./Hidden-BuU8W4f_.js";import"./index-cpIEhwLo.js";import"./createLucideIcon-8wDOqnHv.js";const z='"../theme/tokens.css"',M="undefined",O="undefined",P="undefined",X="undefined",$="undefined",F="undefined",H="undefined",J="undefined",K="undefined",L="undefined",Q="undefined",U="_infoBanner_1tfw7_4",Z="_success_1tfw7_13",ee="_info_1tfw7_4",ne="_important_1tfw7_23",se="_warning_1tfw7_28",ae="_content_1tfw7_37",te="_heading_1tfw7_43",ie="_text_1tfw7_48",oe="_icon_1tfw7_53",re="_dismissable_1tfw7_58",n={tokens:z,display:M,signalGreen10:O,signalGreen100:P,signalBlue10:X,signalBlue100:$,signalYellow10:F,signalYellow100:H,signalRed10:J,signalRed100:K,black:L,semiBoldWeight:Q,infoBanner:U,success:Z,info:ee,important:ne,warning:se,content:ae,heading:te,text:ie,icon:oe,dismissable:re},le={success:A,info:C,important:E,warning:G},l=({title:r,message:Y,type:c,children:S,dismissable:N=!1,...d})=>{const j=le[c],[W,D]=V.useState(!0);return W?e.jsxs("div",{className:R(n.infoBanner,n[c],d.className),...d,children:[e.jsx(j,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[r&&e.jsx("strong",{className:n.heading,children:r}),e.jsxs("div",{className:n.text,children:[Y,S]})]}),N&&e.jsx("div",{className:n.dismissable,children:e.jsx(T,{variant:"icon","aria-label":"Stäng",onPress:()=>D(!1),children:e.jsx(q,{size:20})})})]}):null};try{l.displayName="InfoBanner",l.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Specify what state the InfoBanner represents",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Specify the title",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Specify the message. Element or string",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements displayed inside the banner",name:"children",required:!1,type:{name:"ReactNode"}},dismissable:{defaultValue:{value:"false"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",name:"dismissable",required:!1,type:{name:"boolean"}}}}}catch{}const be={component:l,title:"Components/InfoBanner",tags:["autodocs"]},s={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},a={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},t={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},i={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},o={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,y,_;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var v,b,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var B,k,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(I=(k=o.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const xe=["Success","Warning","Info","Important","Dismissable"];export{o as Dismissable,i as Important,t as Info,s as Success,a as Warning,xe as __namedExportsOrder,be as default};
