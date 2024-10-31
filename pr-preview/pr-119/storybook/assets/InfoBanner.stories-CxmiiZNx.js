import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as N}from"./index-BwDkhjyp.js";import{c as T}from"./clsx-B-dksMZM.js";import{B as C}from"./Button-DPHeQjfs.js";import{X as R}from"./x-BNls5wfR.js";import{C as A,I as G,a as V}from"./info-D354j7Wn.js";import{T as E}from"./triangle-alert-BkMwT_kE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-oEo1n-jK.js";import"./index-Drt3gf4w.js";import"./Hidden-CeomKQRv.js";import"./createLucideIcon-WuqQdmgs.js";const z='"../../../theme/src/lib/tokens.css"',M='"Inter", sans-serif',O="#d5f2d9",P="#008d3c",X="#eaf2f6",$="#0066cc",q="#fff8e1",F="#f1c21b",H="#ffdfdf",J="#e62323",K="#000000",L="600",Q="_infoBanner_tutmf_4",U="_success_tutmf_12",Z="_info_tutmf_4",ee="_important_tutmf_22",ne="_warning_tutmf_27",se="_content_tutmf_36",te="_heading_tutmf_42",ae="_text_tutmf_47",oe="_icon_tutmf_52",re="_dismissable_tutmf_57",n={tokens:z,display:M,signalGreen10:O,signalGreen100:P,signalBlue10:X,signalBlue100:$,signalYellow10:q,signalYellow100:F,signalRed10:H,signalRed100:J,black:K,semiBoldWeight:L,infoBanner:Q,success:U,info:Z,important:ee,warning:ne,content:se,heading:te,text:ae,icon:oe,dismissable:re},ie={success:A,info:G,important:V,warning:E},le=({title:i,message:Y,type:l,children:B,dismissable:I=!1,...j})=>{const S=ie[l],[W,D]=N.useState(!0);return W?e.jsxs("div",{className:T(n.infoBanner,n[l]),...j,children:[e.jsx(S,{size:20,className:n.icon}),e.jsxs("div",{className:n.content,children:[i&&e.jsx("strong",{className:n.heading,children:i}),e.jsxs("div",{className:n.text,children:[Y,B]})]}),I&&e.jsx("div",{className:n.dismissable,children:e.jsx(C,{variant:"icon","aria-label":"Stäng",onPress:()=>D(!1),children:e.jsx(R,{size:16})})})]}):null},ve={component:le,title:"Components/InfoBanner",tags:["autodocs"]},s={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},t={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},a={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},o={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,h,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,_,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var v,x,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const xe=["Success","Warning","Info","Important","Dismissable"];export{r as Dismissable,o as Important,a as Info,s as Success,t as Warning,xe as __namedExportsOrder,ve as default};
