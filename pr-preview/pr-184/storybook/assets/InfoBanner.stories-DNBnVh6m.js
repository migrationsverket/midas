import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R}from"./index-ClcD9ViR.js";import{c as V}from"./clsx-B-dksMZM.js";import{B as T}from"./Button-DRyTw_69.js";import"./ButtonGroup-Duds0FV0.js";import{X as C}from"./x-BaIpobvV.js";import{C as q,I as A,a as G,T as z}from"./triangle-alert-JKWECweq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CUvAewCR.js";import"./index-ZuzByk-F.js";import"./Hidden-CB9z-rbJ.js";import"./createLucideIcon-DQK9Z80p.js";const E='"../../../theme/src/lib/tokens.css"',M='"Inter", sans-serif',O="#d5f2d9",P="#008d3c",X="#eaf2f6",$="#0066cc",F="#fff8e1",H="#f1c21b",J="#ffdfdf",K="#e62323",L="#000000",Q="600",U="_infoBanner_tutmf_4",Z="_success_tutmf_12",ee="_info_tutmf_4",ne="_important_tutmf_22",se="_warning_tutmf_27",ae="_content_tutmf_36",te="_heading_tutmf_42",oe="_text_tutmf_47",re="_icon_tutmf_52",ie="_dismissable_tutmf_57",n={tokens:E,display:M,signalGreen10:O,signalGreen100:P,signalBlue10:X,signalBlue100:$,signalYellow10:F,signalYellow100:H,signalRed10:J,signalRed100:K,black:L,semiBoldWeight:Q,infoBanner:U,success:Z,info:ee,important:ne,warning:se,content:ae,heading:te,text:oe,icon:re,dismissable:ie},le={success:q,info:A,important:G,warning:z},l=({title:i,message:I,type:c,children:j,dismissable:N=!1,...m})=>{const S=le[c],[W,D]=R.useState(!0);return W?e.jsxs("div",{className:V(n.infoBanner,n[c],m.className),...m,children:[e.jsx(S,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[i&&e.jsx("strong",{className:n.heading,children:i}),e.jsxs("div",{className:n.text,children:[I,j]})]}),N&&e.jsx("div",{className:n.dismissable,children:e.jsx(T,{variant:"icon","aria-label":"Stäng",onPress:()=>D(!1),children:e.jsx(C,{size:20})})})]}):null};try{l.displayName="InfoBanner",l.__docgenInfo={description:"",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:'"success" | "info" | "important" | "warning"'}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"ReactNode"}},dismissable:{defaultValue:{value:"false"},description:"",name:"dismissable",required:!1,type:{name:"boolean"}}}}}catch{}const ve={component:l,title:"Components/InfoBanner",tags:["autodocs"]},s={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},a={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},t={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},o={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",dismissable:!0}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,y,_;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var b,v,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,B,Y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true
  }
}`,...(Y=(B=r.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};const xe=["Success","Warning","Info","Important","Dismissable"];export{r as Dismissable,o as Important,t as Info,s as Success,a as Warning,xe as __namedExportsOrder,ve as default};
