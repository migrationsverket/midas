import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as N}from"./index-BwDkhjyp.js";import{c as T}from"./clsx-B-dksMZM.js";import{B as C}from"./Button-CFI5xjAF.js";import{X as R}from"./x-BNls5wfR.js";import{C as A,I as G,a as V}from"./info-D354j7Wn.js";import{T as E}from"./triangle-alert-BkMwT_kE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-C3Zwbx3S.js";import"./index-Drt3gf4w.js";import"./Hidden-BkVGwKza.js";import"./createLucideIcon-WuqQdmgs.js";const z='"../../../theme/src/lib/tokens.css"',M='"Inter", sans-serif',O="#d5f2d9",P="#008d3c",X="#eaf2f6",$="#0066cc",q="#fff8e1",F="#f1c21b",H="#ffdfdf",J="#e62323",K="#000000",L="600",Q="_infoBanner_tutmf_4",U="_success_tutmf_12",Z="_info_tutmf_4",ee="_important_tutmf_22",ne="_warning_tutmf_27",se="_content_tutmf_36",te="_heading_tutmf_42",ae="_text_tutmf_47",oe="_icon_tutmf_52",re="_dismissable_tutmf_57",n={tokens:z,display:M,signalGreen10:O,signalGreen100:P,signalBlue10:X,signalBlue100:$,signalYellow10:q,signalYellow100:F,signalRed10:H,signalRed100:J,black:K,semiBoldWeight:L,infoBanner:Q,success:U,info:Z,important:ee,warning:ne,content:se,heading:te,text:ae,icon:oe,dismissable:re},ie={success:A,info:G,important:V,warning:E},le=({title:i,message:B,type:l,children:I,dismissable:j=!1,...c})=>{const S=ie[l],[W,D]=N.useState(!0);return W?e.jsxs("div",{className:T(n.infoBanner,n[l],c.className),...c,children:[e.jsx(S,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[i&&e.jsx("strong",{className:n.heading,children:i}),e.jsxs("div",{className:n.text,children:[B,I]})]}),j&&e.jsx("div",{className:n.dismissable,children:e.jsx(C,{variant:"icon","aria-label":"Stäng",onPress:()=>D(!1),children:e.jsx(R,{size:20})})})]}):null},ve={component:le,title:"Components/InfoBanner",tags:["autodocs"]},s={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},t={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},a={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},o={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,p,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,w,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var _,b,v;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,k,Y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(Y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};const xe=["Success","Warning","Info","Important","Dismissable"];export{r as Dismissable,o as Important,a as Info,s as Success,t as Warning,xe as __namedExportsOrder,ve as default};
