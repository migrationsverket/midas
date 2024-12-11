import{j as t}from"./jsx-runtime-CfatFE5O.js";import{$ as M,a as v,I as B,b as L}from"./TextField-DCLVmT4M.js";import{R as O}from"./index-ClcD9ViR.js";import{c as q}from"./clsx-B-dksMZM.js";import"./Form-Bnef0d36.js";import"./useFocusable-CUvAewCR.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Text-CUSXFwf2.js";import"./useControlledState-DFHhQ_7Z.js";import"./Hidden-CB9z-rbJ.js";import"./Button-CSKZEJUE.js";import"./ButtonGroup-Duds0FV0.js";const z='"../../../theme/src/lib/tokens.css"',G='"Inter", sans-serif',H="#ffdfdf",J="(max-width: 767px)",K="#f2f2f2",Q="#e6e6e6",U="#bfbfbf",X="#000000",Y="#e62323",Z="#2e7ca5",ee="500",re="400",te="#1f1f1f",se="0 0 0 2px #ffffff, 0 0 0 4px #000000",ae="_textArea_9dtf9_4",ne="_count_9dtf9_40",oe="_countExceeded_9dtf9_48",a={tokens:z,display:G,signalRed10:H,smBreakpoint:J,gray10:K,gray20:Q,gray50:U,black:X,signalRed100:Y,blue100:Z,mediumWeight:ee,regularWeight:re,inputText:te,focus:se,textArea:ae,count:ne,countExceeded:oe},ce=({label:R,description:w,rows:A,maxCharacters:r,errorMessage:I,showCounter:N,validate:p,...P})=>{const[l,T]=O.useState(""),u=s=>{const d=s.target.value;T(d)},V=()=>r?t.jsxs("span",{className:q(a.count,l.length>r&&a.countExceeded),children:[l.length," / ",r]}):N?t.jsx("span",{className:a.count,children:l.length}):null,W=s=>{const d=r&&s.length>r?`Du har angett ${s.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,F=p?p(s):null;return d||F||!0};return t.jsx(M,{className:v.inputField,validate:W,...P,children:t.jsxs(B,{label:R,description:w,errorMessage:I,children:[t.jsx(V,{}),t.jsx(L,{className:a.textArea,rows:A,onFocus:u,onChange:u})]})})},Ee={component:ce,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},n={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},o={args:{...e.args,maxCharacters:50}},c={args:{...e.args,showCounter:!0}},i={args:{...e.args,isDisabled:!0}};var m,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,k,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,S,$;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var j,C,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const _e=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{i as Disabled,o as MaxCharacters,n as NotValid,e as Primary,c as ShowCounter,_e as __namedExportsOrder,Ee as default};
