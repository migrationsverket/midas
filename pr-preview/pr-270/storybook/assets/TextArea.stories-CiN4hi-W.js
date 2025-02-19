import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{$ as B,I as L,a as O}from"./TextField-DjUf-eJX.js";import{T as z}from"./TextField.module-Cq1EB13r.js";import{r as G}from"./index-BbAIUH2N.js";import{c as H}from"./clsx-B-dksMZM.js";import"./Form-CdOY3XQC.js";import"./useFocusable-BTV2lCc9.js";import"./Text-DrzpM1Jb.js";import"./useField-DN-D1gXY.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-BlF-T0UY.js";import"./Button-DeVX-GBX.js";import"./Button-PMtIgk3z.js";import"./useControlledState-DGyHFLi9.js";const J='"../theme/tokens.css"',K='"Inter", sans-serif',Q="#ffdfdf",U="(max-width: 767px)",X="#f2f2f2",Y="#e6e6e6",Z="#bfbfbf",ee="#000000",re="#e62323",te="#2e7ca5",se="500",ae="400",ne="#1f1f1f",oe="0 0 0 2px #ffffff, 0 0 0 4px #000000",ie="_textArea_1tbo6_4",ce="_count_1tbo6_40",le="_countExceeded_1tbo6_48",n={tokens:J,display:K,signalRed10:Q,smBreakpoint:U,gray10:X,gray20:Y,gray50:Z,black:ee,signalRed100:re,blue100:te,mediumWeight:se,regularWeight:ae,inputText:ne,focus:oe,textArea:ie,count:ce,countExceeded:le},j=({label:D,description:q,rows:I,maxCharacters:r,minLength:a,errorMessage:N,showCounter:P,validate:u,...v})=>{const[p,F]=G.useState(""),m=t=>{const d=t.target.value;F(d)},M=()=>r?s.jsxs("span",{className:H(n.count,p.length>r&&n.countExceeded),children:[p.length," / ",r]}):P?s.jsx("span",{className:n.count,children:p.length}):null,R=t=>{const d=r&&t.length>r?`Du har angett ${t.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,V=a&&t.length<a?`Du har angett ${Math.abs(t.length-a)} tecken för lite. Fältet kräver åtminstone ${a} tecken.`:null,W=u?u(t):null;return d||V||W||!0};return s.jsx(B,{className:z.inputField,validate:R,...v,children:s.jsxs(L,{label:D,description:q,errorMessage:N,children:[s.jsx(M,{}),s.jsx(O,{className:n.textArea,rows:I,onFocus:m,onChange:m})]})})};j.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Specify label displayed above the TextArea"},description:{required:!1,tsType:{name:"string"},description:"Specify description displayed below the label"},rows:{required:!1,tsType:{name:"number"},description:"Set number of rows for the TextArea"},maxCharacters:{required:!1,tsType:{name:"number"},description:"Set number of characters that are allowed before the TextArea is put in an invalid state"},minLength:{required:!1,tsType:{name:"number"},description:"Set minimum number of characters that are allowed before the TextArea is put in an invalid state"},showCounter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the character counter or not
@default
false`},errorMessage:{required:!1,tsType:{name:"union",raw:"string | ((validation: ValidationResult) => string)",elements:[{name:"string"},{name:"unknown"}]},description:""}},composes:["AriaTextFieldProps"]};const Ae={component:j,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},i={args:{...e.args,maxCharacters:50}},c={args:{...e.args,showCounter:!0}},l={args:{...e.args,isDisabled:!0}};var g,f,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,k,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,E,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var A,$,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(C=($=l.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const $e=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{l as Disabled,i as MaxCharacters,o as NotValid,e as Primary,c as ShowCounter,$e as __namedExportsOrder,Ae as default};
