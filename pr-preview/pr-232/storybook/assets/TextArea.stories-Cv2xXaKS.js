import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{$ as F,I as M,a as B}from"./TextField-BltTte2-.js";import{T as L}from"./TextField.module-Cq1EB13r.js";import{r as O}from"./index-BbAIUH2N.js";import{c as z}from"./clsx-B-dksMZM.js";import"./Form-CdOY3XQC.js";import"./useFocusable-BTV2lCc9.js";import"./Text-DrzpM1Jb.js";import"./useField-DN-D1gXY.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-BlF-T0UY.js";import"./Button-D8-dz4sF.js";import"./Button-PMtIgk3z.js";import"./useControlledState-DGyHFLi9.js";const G='"../theme/tokens.css"',H='"Inter", sans-serif',J="#ffdfdf",K="(max-width: 767px)",Q="#f2f2f2",U="#e6e6e6",X="#bfbfbf",Y="#000000",Z="#e62323",ee="#2e7ca5",re="500",te="400",se="#1f1f1f",ae="0 0 0 2px #ffffff, 0 0 0 4px #000000",oe="_textArea_1tbo6_4",ne="_count_1tbo6_40",ie="_countExceeded_1tbo6_48",a={tokens:G,display:H,signalRed10:J,smBreakpoint:K,gray10:Q,gray20:U,gray50:X,black:Y,signalRed100:Z,blue100:ee,mediumWeight:re,regularWeight:te,inputText:se,focus:ae,textArea:oe,count:ne,countExceeded:ie},$=({label:j,description:D,rows:I,maxCharacters:r,errorMessage:N,showCounter:P,validate:d,...q})=>{const[l,v]=O.useState(""),u=s=>{const p=s.target.value;v(p)},R=()=>r?t.jsxs("span",{className:z(a.count,l.length>r&&a.countExceeded),children:[l.length," / ",r]}):P?t.jsx("span",{className:a.count,children:l.length}):null,V=s=>{const p=r&&s.length>r?`Du har angett ${s.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,W=d?d(s):null;return p||W||!0};return t.jsx(F,{className:L.inputField,validate:V,...q,children:t.jsxs(M,{label:j,description:D,errorMessage:N,children:[t.jsx(R,{}),t.jsx(B,{className:a.textArea,rows:I,onFocus:u,onChange:u})]})})};$.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Specify label displayed above the TextArea"},description:{required:!1,tsType:{name:"string"},description:"Specify description displayed below the label"},rows:{required:!1,tsType:{name:"number"},description:"Set number of rows for the TextArea"},maxCharacters:{required:!1,tsType:{name:"number"},description:"Set number of characters that are allowed before the TextArea is put in an invalid state"},showCounter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the character counter or not
@default
false`},errorMessage:{required:!1,tsType:{name:"union",raw:"string | ((validation: ValidationResult) => string)",elements:[{name:"string"},{name:"unknown"}]},description:""}},composes:["AriaTextFieldProps"]};const ke={component:$,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},n={args:{...e.args,maxCharacters:50}},i={args:{...e.args,showCounter:!0}},c={args:{...e.args,isDisabled:!0}};var m,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,T,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,_,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var E,A,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Ee=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{c as Disabled,n as MaxCharacters,o as NotValid,e as Primary,i as ShowCounter,Ee as __namedExportsOrder,ke as default};
