import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as j,R as r}from"./Radio-Dqe0gXIW.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-Bs25zYM-.js";import"./useFocusable-B5I9Mbqb.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Form-BsnM7wIB.js";import"./Text-DQL_qUAc.js";import"./useControlledState-D4qbXjzs.js";import"./Hidden-Gy3GO5dR.js";import"./FocusScope-DNSqUz2w.js";import"./context-B6q4sYiW.js";import"./VisuallyHidden-PZ3yCKRL.js";import"./TextField-CGuP3PZF.js";import"./Button-BxwB_ABT.js";import"./Button-DXFpw2KU.js";import"./triangle-alert-BtsNBhJc.js";import"./createLucideIcon-DQK9Z80p.js";const q={title:"Components/Radio/RadioGroup",component:j,tags:["autodocs"],args:{label:"Group label",errorMessage:"errrrrror"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},x=[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})],D=[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})],a={args:{label:"Frukt",description:"Välj en frukt",children:[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})]}},i={args:{children:x,isDisabled:!0}},s={args:{children:D}},o={args:{children:x,isInvalid:!0,errorMessage:"Det här stämmer inte!"}};var n,t,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: [<Radio value={'banan'}>Banan</Radio>, <Radio value={'apelsin'}>Apelsin</Radio>, <Radio value={'kiwi'}>Kiwi</Radio>]
  }
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: radioItems,
    isDisabled: true
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: radioItems,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const z=["Normal","Disabled","OneItemDisabled","Error"];export{i as Disabled,o as Error,a as Normal,s as OneItemDisabled,z as __namedExportsOrder,q as default};
