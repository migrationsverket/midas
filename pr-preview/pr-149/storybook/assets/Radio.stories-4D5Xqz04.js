import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as x,a as r}from"./Radio-BYWMA78b.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-BBIaBYIN.js";import"./useFocusable-CBtYJN0G.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Form-BDgZm-Zm.js";import"./Text-tvqNwYMB.js";import"./useControlledState-nICLO8eb.js";import"./Hidden-BdUlZqv0.js";import"./FocusScope-CQd3XFtb.js";import"./context-DSPFb5Ny.js";import"./VisuallyHidden-BTRt4CT8.js";import"./TextField-CSrwGZI5.js";import"./Button-Cs4NJ-f6.js";const _={title:"Components/Radio",component:x,tags:["autodocs"],args:{label:"Group label",errorMessage:"Du måste välja en frukt?"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},j=[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})],D=[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})],a={args:{label:"Frukt",description:"Välj en frukt",children:[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})]}},s={args:{children:j,isDisabled:!0}},i={args:{children:D}},n={args:{children:j,isInvalid:!0,errorMessage:"Det här stämmer inte!"}};var o,t,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: [<Radio value={'banan'}>Banan</Radio>, <Radio value={'apelsin'}>Apelsin</Radio>, <Radio value={'kiwi'}>Kiwi</Radio>]
  }
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: radioItems,
    isDisabled: true
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: radioItems,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const C=["Normal","Disabled","OneItemDisabled","Invalid"];export{s as Disabled,n as Invalid,a as Normal,i as OneItemDisabled,C as __namedExportsOrder,_ as default};
