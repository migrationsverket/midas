import{j as r}from"./jsx-runtime-BYYWji4R.js";import{B as u,a as y,b as B}from"./BadgeContainer-QBO4GfvF.js";import{e as h}from"./index-CqmFxPum.js";import{B as L}from"./Button-CJayXUqt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-DQK9Z80p.js";import"./clsx-B-dksMZM.js";import"./Button.module-AG3JZ-l4.js";import"./Button-Dw7lljiq.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";const A={component:u,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{}},n=({...o})=>r.jsx(L,{variant:"tertiary","aria-label":"Notiser",children:r.jsxs(y,{children:[r.jsx(B,{}),r.jsx(u,{...o,"data-testid":"badge"})]})}),e={args:{},render:n,play:async({canvas:o})=>{const x=await o.findByTestId("badge");await h(x).toHaveStyle({backgroundColor:"rgb(230, 35, 35)"})}},a={args:{children:"1"},render:n},t={args:{children:"123"},render:n};var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: Render,
  play: async ({
    canvas
  }) => {
    const badge = await canvas.findByTestId('badge');
    await expect(badge).toHaveStyle({
      backgroundColor: 'rgb(230, 35, 35)'
    });
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: '1'
  },
  render: Render
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,g,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '123'
  },
  render: Render
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const D=["NoLabel","WithLabel","LongLabel"];export{t as LongLabel,e as NoLabel,a as WithLabel,D as __namedExportsOrder,A as default};
