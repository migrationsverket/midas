import{j as r}from"./jsx-runtime-BYYWji4R.js";import{B as u,a as y,b as B}from"./BadgeContainer-QBO4GfvF.js";import{e as h}from"./index-CqmFxPum.js";import{B as L}from"./Button-DP_pM_q5.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-DQK9Z80p.js";import"./clsx-B-dksMZM.js";import"./Button.module-AG3JZ-l4.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";const P={component:u,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{}},n=({...o})=>r.jsx(L,{variant:"tertiary","aria-label":"Notiser",children:r.jsxs(y,{children:[r.jsx(B,{}),r.jsx(u,{...o,"data-testid":"badge"})]})}),e={args:{},render:n,play:async({canvas:o})=>{const x=await o.findByTestId("badge");await h(x).toHaveStyle({backgroundColor:"rgb(230, 35, 35)"})}},a={args:{children:"1"},render:n},t={args:{children:"123"},render:n};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: '1'
  },
  render: Render
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,g,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '123'
  },
  render: Render
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Q=["NoLabel","WithLabel","LongLabel"];export{t as LongLabel,e as NoLabel,a as WithLabel,Q as __namedExportsOrder,P as default};
