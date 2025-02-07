import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as W}from"./index-BbAIUH2N.js";import{c as D}from"./clsx-B-dksMZM.js";import{B as q}from"./Button-BMilrlhz.js";import{X as A}from"./x-Cu6J0Y2u.js";import{C,I as V,a as E,T as G}from"./triangle-alert-BPGApjnK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-D8XuhR1x.js";import"./useFocusable-DG2xZKJq.js";import"./Hidden-CYwu0huo.js";import"./index-i7ZvCR4f.js";import"./createLucideIcon-8wDOqnHv.js";const z='"../theme/tokens.css"',M='"Inter", sans-serif',O="#d5f2d9",P="#008d3c",X="#eaf2f6",$="#0066cc",F="#fff8e1",H="#f1c21b",J="#ffdfdf",K="#e62323",L="#000000",Q="600",U="_infoBanner_1tfw7_4",Z="_success_1tfw7_13",ee="_info_1tfw7_4",ne="_important_1tfw7_23",se="_warning_1tfw7_28",ae="_content_1tfw7_37",te="_heading_1tfw7_43",oe="_text_1tfw7_48",re="_icon_1tfw7_53",ie="_dismissable_1tfw7_58",n={tokens:z,display:M,signalGreen10:O,signalGreen100:P,signalBlue10:X,signalBlue100:$,signalYellow10:F,signalYellow100:H,signalRed10:J,signalRed100:K,black:L,semiBoldWeight:Q,infoBanner:U,success:Z,info:ee,important:ne,warning:se,content:ae,heading:te,text:oe,icon:re,dismissable:ie},le={success:C,info:V,important:E,warning:G},I=({title:i,message:Y,type:l,children:R,dismissable:S=!1,...c})=>{const N=le[l],[T,j]=W.useState(!0);return T?e.jsxs("div",{className:D(n.infoBanner,n[l],c.className),...c,children:[e.jsx(N,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[i&&e.jsx("strong",{className:n.heading,children:i}),e.jsxs("div",{className:n.text,children:[Y,R]})]}),S&&e.jsx("div",{className:n.dismissable,children:e.jsx(q,{variant:"icon","aria-label":"Stäng",onPress:()=>j(!1),children:e.jsx(A,{size:20})})})]}):null};I.__docgenInfo={description:"Displays a static message as an inline banner",methods:[],displayName:"InfoBanner",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'info' | 'important' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'important'"},{name:"literal",value:"'warning'"}]},description:"Specify what state the InfoBanner represents"},title:{required:!1,tsType:{name:"string"},description:"Specify the title"},message:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Specify the message. Element or string"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional elements displayed inside the banner"},dismissable:{required:!1,tsType:{name:"boolean"},description:"Specify if the InfoBanner should have a dismiss button in the top right corner",defaultValue:{value:"false",computed:!1}}}};const be={component:I,title:"Components/InfoBanner",tags:["autodocs"]},s={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},a={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},t={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},o={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,w,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var _,v,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,B,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(k=(B=r.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const xe=["Success","Warning","Info","Important","Dismissable"];export{r as Dismissable,o as Important,t as Info,s as Success,a as Warning,xe as __namedExportsOrder,be as default};
