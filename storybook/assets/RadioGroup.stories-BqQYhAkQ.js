import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as j,R as r}from"./Radio-CI7O1cZE.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Group-CScXN0eg.js";import"./useFocusable-oEo1n-jK.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Form-BnF4q38W.js";import"./useControlledState-CktEcWfI.js";import"./Hidden-CeomKQRv.js";import"./FocusScope-B0iEahOm.js";import"./context-CTzaVcmG.js";import"./VisuallyHidden-BgAYQwv3.js";import"./TextField-BLg3SWSQ.js";import"./Button-C_z7reC9.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";const C={title:"Components/Radio/RadioGroup",component:j,tags:["autodocs"],args:{label:"Group label",errorMessage:"errrrrror"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},x=[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})],D=[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})],a={args:{label:"Frukt",description:"Välj en frukt",children:[e.jsx(r,{value:"banan",children:"Banan"}),e.jsx(r,{value:"apelsin",children:"Apelsin"}),e.jsx(r,{value:"kiwi",children:"Kiwi"})]}},s={args:{children:x,isDisabled:!0}},i={args:{children:D}},o={args:{children:x,isInvalid:!0,errorMessage:"Det här stämmer inte!"}};var n,t,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: radioItems,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const T=["Normal","Disabled","OneItemDisabled","Error"];export{s as Disabled,o as Error,a as Normal,i as OneItemDisabled,T as __namedExportsOrder,C as default};