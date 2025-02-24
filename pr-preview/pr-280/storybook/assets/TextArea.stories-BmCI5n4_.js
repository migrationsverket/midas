import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{$ as B,I as O,a as z}from"./TextField-BnkJ9nF7.js";import{T as G}from"./TextField.module-Cp8R-C_q.js";import{r as H}from"./index-BbAIUH2N.js";import{c as J}from"./clsx-B-dksMZM.js";import"./Form-DXGSlahV.js";import"./useFocusable-DG2xZKJq.js";import"./Text-BeLJy-LL.js";import"./useField-BphT9t-O.js";import"./Hidden-CYwu0huo.js";import"./index-i7ZvCR4f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-BEKG7W4A.js";import"./Button-CYeqw5FN.js";import"./Button-D8XuhR1x.js";import"./useControlledState-DGyHFLi9.js";const K='"../theme/tokens.css"',L='"Inter", sans-serif',Q="#ffdfdf",U="(max-width: 767px)",X="#f2f2f2",Y="#e6e6e6",Z="#bfbfbf",ee="#000000",re="#e62323",te="#2e7ca5",se="500",ae="400",ne="#1f1f1f",oe="0 0 0 2px #ffffff, 0 0 0 4px #000000",ie="_textArea_r27ql_4",ce="_count_r27ql_45",le="_countExceeded_r27ql_53",n={tokens:K,display:L,signalRed10:Q,smBreakpoint:U,gray10:X,gray20:Y,gray50:Z,black:ee,signalRed100:re,blue100:te,mediumWeight:se,regularWeight:ae,inputText:ne,focus:oe,textArea:ie,count:ce,countExceeded:le},j=({label:D,description:I,rows:N,maxLength:r,minLength:a,errorMessage:P,showCounter:V,validate:m,...d})=>{const[p,v]=H.useState(d.defaultValue??d.value??""),g=t=>{const u=t.target.value;v(u)},F=()=>r?s.jsxs("span",{className:J(n.count,p.length>r&&n.countExceeded),children:[p.length," / ",r]}):V?s.jsx("span",{className:n.count,children:p.length}):null,M=t=>{const u=r&&t.length>r?`Du har angett ${t.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,R=a&&t.length<a?`Du har angett ${Math.abs(t.length-a)} tecken för lite. Fältet kräver åtminstone ${a} tecken.`:null,W=m?m(t):null;return u||R||W||!0};return s.jsx(B,{className:G.inputField,validate:M,...d,children:s.jsxs(O,{label:D,description:I,errorMessage:P,children:[s.jsx(F,{}),s.jsx(z,{className:n.textArea,rows:N,onFocus:g,onChange:g})]})})};j.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Specify label displayed above the TextArea"},description:{required:!1,tsType:{name:"string"},description:"Specify description displayed below the label"},rows:{required:!1,tsType:{name:"number"},description:"Set number of rows for the TextArea"},minLength:{required:!1,tsType:{name:"number"},description:"Set minimum number of characters that are allowed before the TextArea is put in an invalid state"},showCounter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the character counter or not
@default
false`},errorMessage:{required:!1,tsType:{name:"union",raw:"string | ((validation: ValidationResult) => string)",elements:[{name:"string"},{name:"unknown"}]},description:""}},composes:["AriaTextFieldProps"]};const Ae={component:j,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},i={args:{...e.args,maxLength:50}},c={args:{...e.args,showCounter:!0}},l={args:{...e.args,isDisabled:!0}};var f,h,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(q=l.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const $e=["Primary","NotValid","MaxLength","ShowCounter","Disabled"];export{l as Disabled,i as MaxLength,o as NotValid,e as Primary,c as ShowCounter,$e as __namedExportsOrder,Ae as default};
