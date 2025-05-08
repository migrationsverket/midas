import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{B as u,a as y,b as B}from"./BadgeContainer-C7VCRoz-.js";import{e as h}from"./index-DtSMq7G1.js";import{B as L}from"./Button-BCEj8EFd.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-8wDOqnHv.js";import"./clsx-B-dksMZM.js";import"./Button.module-BEIdyv-e.js";import"./Button-DMocNr_H.js";import"./utils-Dv9Ux5aE.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BgYBsm5l.js";import"./usePress-B1qsLRUy.js";import"./useFocusRing-CPQALXIu.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";const P={component:u,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{}},n=({...o})=>r.jsx(L,{variant:"tertiary","aria-label":"Notiser",children:r.jsxs(y,{children:[r.jsx(B,{}),r.jsx(u,{...o,"data-testid":"badge"})]})}),e={args:{},render:n,play:async({canvas:o})=>{const x=await o.findByTestId("badge");await h(x).toHaveStyle({backgroundColor:"rgb(230, 35, 35)"})}},a={args:{children:"1"},render:n},t={args:{children:"123"},render:n};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
