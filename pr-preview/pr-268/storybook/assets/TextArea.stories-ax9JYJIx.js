import{j as t}from"./jsx-runtime-CBDCb4rg.js";import{$ as L,I as R,a as W}from"./TextField-CEBpLkqm.js";import{T as O}from"./TextField.module-Nb1XZxae.js";import{r as z}from"./index-B-o1Wr-g.js";import{c as B}from"./clsx-B-dksMZM.js";import"./Form-DKIud6kt.js";import"./useFocusable-BFvoMS9y.js";import"./Text-BvZdlzFi.js";import"./useField-BVKRIrPf.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-slPl-z-z.js";import"./Button-dZcdrYJ-.js";import"./Button-BeKNHBLF.js";import"./useControlledState-BgxdDqm0.js";const G="_textArea_1tbo6_4",H="_count_1tbo6_40",J="_countExceeded_1tbo6_48",a={textArea:G,count:H,countExceeded:J},j=({label:D,description:N,rows:P,maxCharacters:r,errorMessage:q,showCounter:v,validate:d,...I})=>{const[p,V]=z.useState(""),u=s=>{const l=s.target.value;V(l)},k=()=>r?t.jsxs("span",{className:B(a.count,p.length>r&&a.countExceeded),children:[p.length," / ",r]}):v?t.jsx("span",{className:a.count,children:p.length}):null,F=s=>{const l=r&&s.length>r?`Du har angett ${s.length-r} tecken för mycket. Fältet är begränsat till ${r} tecken.`:null,M=d?d(s):null;return l||M||!0};return t.jsx(L,{className:O.inputField,validate:F,...I,children:t.jsxs(R,{label:D,description:N,errorMessage:q,children:[t.jsx(k,{}),t.jsx(W,{className:a.textArea,rows:P,onFocus:u,onChange:u})]})})};j.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Specify label displayed above the TextArea"},description:{required:!1,tsType:{name:"string"},description:"Specify description displayed below the label"},rows:{required:!1,tsType:{name:"number"},description:"Set number of rows for the TextArea"},maxCharacters:{required:!1,tsType:{name:"number"},description:"Set number of characters that are allowed before the TextArea is put in an invalid state"},showCounter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the character counter or not
@default
false`},errorMessage:{required:!1,tsType:{name:"union",raw:"string | ((validation: ValidationResult) => string)",elements:[{name:"string"},{name:"unknown"}]},description:""}},composes:["AriaTextFieldProps"]};const le={component:j,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},e={args:{label:"Label",description:"Description"}},o={args:{...e.args,isInvalid:!0,errorMessage:"Error"}},n={args:{...e.args,maxCharacters:50}},i={args:{...e.args,showCounter:!0}},c={args:{...e.args,isDisabled:!0}};var m,g,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,T,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxCharacters: 50
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,_,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true
  }
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var A,C,$;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...($=(C=c.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};const de=["Primary","NotValid","MaxCharacters","ShowCounter","Disabled"];export{c as Disabled,n as MaxCharacters,o as NotValid,e as Primary,i as ShowCounter,de as __namedExportsOrder,le as default};
