import{j as t}from"./jsx-runtime-CfatFE5O.js";import{R as x,a as i}from"./Radio-BDcoTlnc.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-DqznbdRl.js";import"./useFocusable-CUvAewCR.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Form-Bnef0d36.js";import"./Text-CUSXFwf2.js";import"./useControlledState-DFHhQ_7Z.js";import"./Hidden-CB9z-rbJ.js";import"./FocusScope-Do-PkUts.js";import"./context-C9cAOQ0o.js";import"./VisuallyHidden-CU0vF0eT.js";import"./TextField-Bs-AwA5r.js";import"./Button-DRyTw_69.js";import"./ButtonGroup-Duds0FV0.js";const T={title:"Components/Radio",component:x,tags:["autodocs"],args:{label:"Group label",errorMessage:"Du måste välja en frukt?"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},I=["Äpple","Banan","Kiwi","Apelsin"],n=I.map(e=>t.jsx(i,{value:e,id:e.toLowerCase(),children:e},e)),k=[t.jsx(i,{value:"banan",children:"Banan"},"radio-banan"),t.jsx(i,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),t.jsx(i,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],r={args:{label:"Frukt",description:"Välj en frukt",children:n}},s={args:{children:n,isDisabled:!0}},a={args:{children:k}},o={args:{children:n,isInvalid:!0,errorMessage:"Det här stämmer inte!"}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const q=["Normal","Disabled","OneItemDisabled","Invalid"];export{s as Disabled,o as Invalid,r as Normal,a as OneItemDisabled,q as __namedExportsOrder,T as default};