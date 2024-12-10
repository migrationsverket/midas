import{j as s}from"./jsx-runtime-CfatFE5O.js";import{$ as v,a as F,I as B,b as L}from"./TextField-CkiZHKZA.js";import{R as J}from"./index-ClcD9ViR.js";import{c as O}from"./clsx-B-dksMZM.js";import"./Form-Bnef0d36.js";import"./useFocusable-CUvAewCR.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-CUSXFwf2.js";import"./useControlledState-DFHhQ_7Z.js";import"./Hidden-CB9z-rbJ.js";import"./Button-DRyTw_69.js";import"./ButtonGroup-Duds0FV0.js";const q='"../../../theme/src/lib/tokens.css"',z='"Inter", sans-serif',G="#ffdfdf",H="(max-width: 767px)",K="#f2f2f2",Q="#e6e6e6",U="#bfbfbf",X="#000000",Y="#e62323",Z="#2e7ca5",ee="500",re="400",se="#1f1f1f",te="0 0 0 2px #ffffff, 0 0 0 4px #000000",ae="_textArea_9dtf9_4",oe="_count_9dtf9_40",ne="_countExceeded_9dtf9_48",a={tokens:q,display:z,signalRed10:G,smBreakpoint:H,gray10:K,gray20:Q,gray50:U,black:X,signalRed100:Y,blue100:Z,mediumWeight:ee,regularWeight:re,inputText:se,focus:te,textArea:ae,count:oe,countExceeded:ne},ce=({label:w,description:A,rows:D,maxCharacters:r,errorMessage:I,showCounter:N,validate:l,...P})=>{const[d,T]=J.useState(""),p=t=>{const u=t.target.value;T(u)},V=()=>r?s.jsxs("span",{className:O(a.count,d.length>r&&a.countExceeded),children:[d.length," / ",r]}):N?s.jsx("span",{className:a.count,children:d.length}):null,W=t=>{const u=r&&t.length>r?`Just nu är det ${t.length-r} tecken för mycket`:null,M=l?l(t):null;return u||M||!0};return s.jsx(v,{className:F.inputField,validate:W,...P,children:s.jsxs(B,{label:w,description:A,errorMessage:I,children:[s.jsx(V,{}),s.jsx(L,{className:a.textArea,rows:D,onFocus:p,onChange:p})]})})},_e={component:ce,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},n={args:{...e.args,maxCharacters:50}},c={args:{...e.args,showCounter:!0}},i={args:{...e.args,isDisabled:!0}};var m,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,E,_;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(_=(E=n.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var k,S,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,$,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(R=($=i.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const ke=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{i as Disabled,n as MaxCharacters,o as NotValid,e as Primary,c as ShowCounter,ke as __namedExportsOrder,_e as default};
