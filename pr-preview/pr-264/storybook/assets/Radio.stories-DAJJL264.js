import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{R as x,a as i}from"./Radio-Bmt6ztVq.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-DiArW9zi.js";import"./useFocusable-Ca924fmk.js";import"./clsx-B-dksMZM.js";import"./Form-C4y6ZxmL.js";import"./Text-BkfI_mlu.js";import"./useField-DkY56YAB.js";import"./Hidden-BnkfgUiZ.js";import"./index-cpIEhwLo.js";import"./useLabels-BHDrmz2p.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-C4P3cAwe.js";import"./context-DeC-Ug1U.js";import"./VisuallyHidden-GzJBUnsU.js";import"./TextField-DHll4yNf.js";import"./Input-C5vCrMin.js";import"./TextField-Bo6D7TTg.js";import"./TextField.module-RvTXLpy1.js";import"./Button-BIMRAFov.js";import"./Button-CHB1Xpcb.js";const P={title:"Components/Radio",component:x,tags:["autodocs"],args:{label:"Group label",errorMessage:"Du måste välja en frukt?"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},I=["Äpple","Banan","Kiwi","Apelsin"],n=I.map(e=>t.jsx(i,{value:e,id:e.toLowerCase(),children:e},e)),k=[t.jsx(i,{value:"banan",children:"Banan"},"radio-banan"),t.jsx(i,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),t.jsx(i,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],r={args:{label:"Frukt",description:"Välj en frukt",children:n}},s={args:{children:n,isDisabled:!0}},a={args:{children:k}},o={args:{children:n,isInvalid:!0,errorMessage:"Det här stämmer inte!"}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var D,v,j;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const Q=["Normal","Disabled","OneItemDisabled","Invalid"];export{s as Disabled,o as Invalid,r as Normal,a as OneItemDisabled,Q as __namedExportsOrder,P as default};
