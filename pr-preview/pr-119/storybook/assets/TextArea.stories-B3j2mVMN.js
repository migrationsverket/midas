import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{$ as F,a as B,I as L,b as H}from"./TextField-iFYDSKIq.js";import{R as g}from"./index-BwDkhjyp.js";import"./Form-BnF4q38W.js";import"./useFocusable-oEo1n-jK.js";import"./index-Drt3gf4w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CktEcWfI.js";import"./Hidden-CeomKQRv.js";import"./Button-DPHeQjfs.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";const O='"../../../theme/src/lib/tokens.css"',q='"Inter", sans-serif',z="#ffdfdf",G="(max-width: 767px)",J="#f2f2f2",K="#e6e6e6",Q="#bfbfbf",U="#000000",X="#e62323",Y="#2e7ca5",Z="500",ee="400",re="#1f1f1f",se="_textArea_17eb4_4",te="_count_17eb4_45",d={tokens:O,display:q,signalRed10:z,smBreakpoint:G,gray10:J,gray20:K,gray50:Q,black:U,signalRed100:X,blue100:Y,mediumWeight:Z,regularWeight:ee,inputText:re,textArea:se,count:te},ae=({label:v,description:w,rows:A,maxCharacters:s,errorMessage:D,showCounter:N,...c})=>{const[i,P]=g.useState(""),[m,T]=g.useState(!1),p=l=>{const u=l.target.value;P(u),s&&T(u.length>s)},W=()=>s?r.jsxs("span",{className:d.count,children:[i.length," / ",s]}):N?r.jsx("span",{className:d.count,children:i.length}):null,V=l=>m?`${i.length-l} tecken för mycket`:D;return r.jsx(F,{className:B.inputField,...c,children:r.jsxs(L,{label:v,description:w,errorMessage:V(s||0),isInvalid:m||c.isInvalid,...c,children:[r.jsx(W,{}),r.jsx(H,{className:d.textArea,rows:A,onFocus:p,onChange:p})]})})},be={component:ae,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},t={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},a={args:{...e.args,maxCharacters:50}},n={args:{...e.args,showCounter:!0}},o={args:{...e.args,isDisabled:!0}};var f,x,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,y,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,S,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var E,M,_;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(_=(M=n.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,I,R;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const ye=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{o as Disabled,a as MaxCharacters,t as NotValid,e as Primary,n as ShowCounter,ye as __namedExportsOrder,be as default};
