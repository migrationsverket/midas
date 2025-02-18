import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{$ as F,I as M,a as B}from"./TextField-BFPI6Sxf.js";import{T as L}from"./TextField.module-C2s9jx-z.js";import{r as O}from"./index-BbAIUH2N.js";import{c as z}from"./clsx-B-dksMZM.js";import"./Form-CdOY3XQC.js";import"./useFocusable-BTV2lCc9.js";import"./Text-DrzpM1Jb.js";import"./useField-DN-D1gXY.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-BlF-T0UY.js";import"./Button-BLzfcKvT.js";import"./Button-PMtIgk3z.js";import"./useControlledState-DGyHFLi9.js";const G='"../theme/tokens.css"',H='"Inter", sans-serif',J="#ffdfdf",K="(max-width: 767px)",Q="#f2f2f2",U="#e6e6e6",X="#bfbfbf",Y="#000000",Z="#e62323",ee="#2e7ca5",re="500",te="400",se="#1f1f1f",ae="0 0 0 2px #ffffff, 0 0 0 4px #000000",ne="_textArea_r27ql_4",oe="_count_r27ql_45",ie="_countExceeded_r27ql_53",a={tokens:G,display:H,signalRed10:J,smBreakpoint:K,gray10:Q,gray20:U,gray50:X,black:Y,signalRed100:Z,blue100:ee,mediumWeight:re,regularWeight:te,inputText:se,focus:ae,textArea:ne,count:oe,countExceeded:ie},C=({label:$,description:j,rows:D,maxCharacters:r,errorMessage:I,showCounter:N,validate:d,...P})=>{const[l,v]=O.useState(""),u=s=>{const p=s.target.value;v(p)},R=()=>r?t.jsxs("span",{className:z(a.count,l.length>r&&a.countExceeded),children:[l.length," / ",r]}):N?t.jsx("span",{className:a.count,children:l.length}):null,V=s=>{const p=r&&s.length>r?`Du har angett ${s.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,W=d?d(s):null;return p||W||!0};return t.jsx(F,{className:L.inputField,validate:V,...P,children:t.jsxs(M,{label:$,description:j,errorMessage:I,children:[t.jsx(R,{}),t.jsx(B,{className:a.textArea,rows:D,onFocus:u,onChange:u})]})})};C.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Specify label displayed above the TextArea"},description:{required:!1,tsType:{name:"string"},description:"Specify description displayed below the label"},rows:{required:!1,tsType:{name:"number"},description:"Set number of rows for the TextArea"},maxCharacters:{required:!1,tsType:{name:"number"},description:"Set number of characters that are allowed before the TextArea is put in an invalid state"},showCounter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the character counter or not
@default
false`},errorMessage:{required:!1,tsType:{name:"union",raw:"string | ((validation: ValidationResult) => string)",elements:[{name:"string"},{name:"unknown"}]},description:""}},composes:["AriaTextFieldProps"]};const ke={component:C,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},n={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},o={args:{...e.args,maxCharacters:50}},i={args:{...e.args,showCounter:!0}},c={args:{...e.args,isDisabled:!0}};var m,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,T,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,_,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var E,A,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(q=(A=c.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const Ee=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{c as Disabled,o as MaxCharacters,n as NotValid,e as Primary,i as ShowCounter,Ee as __namedExportsOrder,ke as default};
