import{j as r}from"./jsx-runtime-CfatFE5O.js";import{$ as F,a as B,I as L,b as H}from"./TextField-D2-rM2Si.js";import{R as g}from"./index-ClcD9ViR.js";import"./Form-51MLUZf-.js";import"./useFocusable-ByLM5O5C.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Text-Co9214ok.js";import"./useControlledState--51_K5zJ.js";import"./Hidden-Bxls36u3.js";import"./Button-CzNY3qi3.js";import"./ButtonGroup-Duds0FV0.js";const O='"../../../theme/src/lib/tokens.css"',q='"Inter", sans-serif',z="#ffdfdf",G="(max-width: 767px)",J="#f2f2f2",K="#e6e6e6",Q="#bfbfbf",U="#000000",X="#e62323",Y="#2e7ca5",Z="500",ee="400",re="#1f1f1f",se="0 0 0 2px #ffffff, 0 0 0 4px #000000",te="_textArea_14jom_4",ae="_count_14jom_40",m={tokens:O,display:q,signalRed10:z,smBreakpoint:G,gray10:J,gray20:K,gray50:Q,black:U,signalRed100:X,blue100:Y,mediumWeight:Z,regularWeight:ee,inputText:re,focus:se,textArea:te,count:ae},oe=({label:v,description:w,rows:A,maxCharacters:s,errorMessage:D,showCounter:N,...c})=>{const[i,P]=g.useState(""),[p,T]=g.useState(!1),u=l=>{const d=l.target.value;P(d),s&&T(d.length>s)},W=()=>s?r.jsxs("span",{className:m.count,children:[i.length," / ",s]}):N?r.jsx("span",{className:m.count,children:i.length}):null,V=l=>p?`${i.length-l} tecken för mycket`:D;return r.jsx(F,{className:B.inputField,...c,children:r.jsxs(L,{label:v,description:w,errorMessage:V(s||0),isInvalid:p||c.isInvalid,...c,children:[r.jsx(W,{}),r.jsx(H,{className:m.textArea,rows:A,onFocus:u,onChange:u})]})})},ye={component:oe,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},t={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},a={args:{...e.args,maxCharacters:50}},o={args:{...e.args,showCounter:!0}},n={args:{...e.args,isDisabled:!0}};var f,x,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,y,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var k,C,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,M,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(_=(M=o.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,I,R;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const je=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{n as Disabled,a as MaxCharacters,t as NotValid,e as Primary,o as ShowCounter,je as __namedExportsOrder,ye as default};
