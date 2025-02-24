import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{$ as z,I as G,a as H}from"./TextField-pA66d_yF.js";import{T as J}from"./TextField.module-Cp8R-C_q.js";import{r as K}from"./index-BbAIUH2N.js";import{c as g}from"./clsx-B-dksMZM.js";import"./Form-DXGSlahV.js";import"./useFocusable-DG2xZKJq.js";import"./Text-BeLJy-LL.js";import"./useField-BphT9t-O.js";import"./Hidden-CYwu0huo.js";import"./index-i7ZvCR4f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-BEKG7W4A.js";import"./Button-CYeqw5FN.js";import"./Button-D8XuhR1x.js";import"./useControlledState-DGyHFLi9.js";const L='"../theme/tokens.css"',Q='"Inter", sans-serif',U="#ffdfdf",X="(max-width: 767px)",Y="#f2f2f2",Z="#e6e6e6",ee="#bfbfbf",re="#000000",te="#e62323",se="#2e7ca5",ae="500",ne="400",oe="#1f1f1f",ie="0 0 0 2px #ffffff, 0 0 0 4px #000000",ce="_textArea_r27ql_4",le="_count_r27ql_45",pe="_countExceeded_r27ql_53",n={tokens:L,display:Q,signalRed10:U,smBreakpoint:X,gray10:Y,gray20:Z,gray50:ee,black:re,signalRed100:te,blue100:se,mediumWeight:ae,regularWeight:ne,inputText:oe,focus:ie,textArea:ce,count:le,countExceeded:pe},j=({label:D,description:I,rows:N,maxLength:r,minLength:a,errorMessage:P,showCounter:F,validate:u,className:M,...R})=>{const[p,V]=K.useState(""),m=t=>{const d=t.target.value;V(d)},W=()=>r?s.jsxs("span",{className:g(n.count,p.length>r&&n.countExceeded),children:[p.length," / ",r]}):F?s.jsx("span",{className:n.count,children:p.length}):null,v=t=>{const d=r&&t.length>r?`Du har angett ${t.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,B=a&&t.length<a?`Du har angett ${Math.abs(t.length-a)} tecken för lite. Fältet kräver åtminstone ${a} tecken.`:null,O=u?u(t):null;return d||B||O||!0};return s.jsx(z,{className:g(J.inputField,M),validate:v,...R,children:s.jsxs(G,{label:D,description:I,errorMessage:P,children:[s.jsx(W,{}),s.jsx(H,{className:n.textArea,rows:N,onFocus:m,onChange:m})]})})};j.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Specify label displayed above the TextArea"},description:{required:!1,tsType:{name:"string"},description:"Specify description displayed below the label"},rows:{required:!1,tsType:{name:"number"},description:"Set number of rows for the TextArea"},minLength:{required:!1,tsType:{name:"number"},description:"Set minimum number of characters that are allowed before the TextArea is put in an invalid state"},showCounter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the character counter or not
@default
false`},errorMessage:{required:!1,tsType:{name:"union",raw:"string | ((validation: ValidationResult) => string)",elements:[{name:"string"},{name:"unknown"}]},description:""}},composes:["AriaTextFieldProps"]};const $e={component:j,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},i={args:{...e.args,maxLength:50}},c={args:{...e.args,showCounter:!0}},l={args:{...e.args,isDisabled:!0}};var f,h,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,y,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var k,w,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,_,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var $,q,C;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(C=(q=l.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const qe=["Primary","NotValid","MaxLength","ShowCounter","Disabled"];export{l as Disabled,i as MaxLength,o as NotValid,e as Primary,c as ShowCounter,qe as __namedExportsOrder,$e as default};
