import{j as e}from"./iframe-D3TrqU1c.js";import{B as s,a as B,b as y}from"./BadgeContainer-Bxk_ghvP.js";import{l as L,h as n}from"./test-DcKGE-up.js";import{B as _}from"./Button-DAXVNDDT.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DvAjTehV.js";import"./clsx-B-dksMZM.js";import"./Button.module-DRhvPh0f.js";import"./Button-BB_SyN75.js";import"./utils-DH3YZe7j.js";import"./Hidden-CiZTgx3K.js";import"./useFocusRing-9Tni2VRz.js";import"./index-DA8fU_Zp.js";import"./index-KBbZ-VWL.js";import"./useLabels-CCF8-s-s.js";import"./useButton-bB-Pq-IM.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,M={component:s,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:t=>e.jsx(_,{variant:"tertiary","aria-label":"Notiser",children:e.jsxs(B,{children:[e.jsx(y,{}),e.jsx(s,{...t,"data-testid":"badge"})]})})},a={play:async({canvas:t,globals:{scheme:u}})=>{const x=await t.findByTestId("badge");await T(x).toHaveStyle({backgroundColor:L(n("#e62323"),n("#e62323"),u)})}},r={args:{children:"1"}},o={args:{children:"123"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvas,
    globals: {
      scheme
    }
  }) => {
    const badge = await canvas.findByTestId('badge');
    await expect(badge).toHaveStyle({
      backgroundColor: lightDark(hexToRgb('#e62323'), hexToRgb('#e62323'), scheme)
    });
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: '1'
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '123'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const U=["NoLabel","WithLabel","LongLabel"];export{o as LongLabel,a as NoLabel,r as WithLabel,U as __namedExportsOrder,M as default};
