import{j as s}from"./jsx-runtime-CfatFE5O.js";import{$ as v,a as F,I as B,b as L}from"./TextField-CdDi8fW9.js";import{R as O}from"./index-ClcD9ViR.js";import{c as q}from"./clsx-B-dksMZM.js";import"./Form-Bnef0d36.js";import"./useFocusable-CUvAewCR.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-CUSXFwf2.js";import"./useControlledState-DFHhQ_7Z.js";import"./Hidden-CB9z-rbJ.js";import"./Button-CSKZEJUE.js";import"./ButtonGroup-Duds0FV0.js";const z='"../../../theme/src/lib/tokens.css"',G='"Inter", sans-serif',H="#ffdfdf",J="#b31b1b",K="(max-width: 767px)",Q="#f2f2f2",U="#e6e6e6",X="#bfbfbf",Y="#000000",Z="#e62323",ee="#2e7ca5",re="500",se="400",te="#1f1f1f",ae="0 0 0 2px #ffffff, 0 0 0 4px #000000",oe="_textArea_55s6x_4",ne="_count_55s6x_40",ce="_countExceeded_55s6x_48",a={tokens:z,display:G,signalRed10:H,signalRed130:J,smBreakpoint:K,gray10:Q,gray20:U,gray50:X,black:Y,signalRed100:Z,blue100:ee,mediumWeight:re,regularWeight:se,inputText:te,focus:ae,textArea:oe,count:ne,countExceeded:ce},ie=({label:w,description:A,rows:D,maxCharacters:r,errorMessage:I,showCounter:N,validate:d,...P})=>{const[l,T]=O.useState(""),u=t=>{const p=t.target.value;T(p)},V=()=>r?s.jsxs("span",{className:q(a.count,l.length>r&&a.countExceeded),children:[l.length," / ",r]}):N?s.jsx("span",{className:a.count,children:l.length}):null,W=t=>{const p=r&&t.length>r?`${t.length-r} tecken för mycket`:null,M=d?d(t):null;return p||M||!0};return s.jsx(v,{className:F.inputField,validate:W,...P,children:s.jsxs(B,{label:w,description:A,errorMessage:I,children:[s.jsx(V,{}),s.jsx(L,{className:a.textArea,rows:D,onFocus:u,onChange:u})]})})},ke={component:ie,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},n={args:{...e.args,maxCharacters:50}},c={args:{...e.args,showCounter:!0}},i={args:{...e.args,isDisabled:!0}};var m,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,b,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,E,_;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(_=(E=n.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var k,R,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var j,C,$;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...($=(C=i.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};const Re=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{i as Disabled,n as MaxCharacters,o as NotValid,e as Primary,c as ShowCounter,Re as __namedExportsOrder,ke as default};
