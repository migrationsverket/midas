import{j as e}from"./iframe-JTr4gq9D.js";import{B as s,a as B,b as y}from"./BadgeContainer-DEUMoiMt.js";import{l as L,h as n}from"./test-DcKGE-up.js";import{B as _}from"./Button-Bxc7q8hO.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-BHnEd9kD.js";import"./clsx-B-dksMZM.js";import"./Button.module-DKVuWS4g.js";import"./Button-BLwjQO4b.js";import"./utils-Bx4Dt0bq.js";import"./Hidden-DIiXKeAw.js";import"./useFocusRing-CbLxu3WS.js";import"./index-g6cWe-al.js";import"./index-3d2vR5fa.js";import"./useLabels-DkOfICx8.js";import"./useButton-CDEMr44G.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,M={component:s,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:t=>e.jsx(_,{variant:"tertiary","aria-label":"Notiser",children:e.jsxs(B,{children:[e.jsx(y,{}),e.jsx(s,{...t,"data-testid":"badge"})]})})},a={play:async({canvas:t,globals:{scheme:u}})=>{const x=await t.findByTestId("badge");await T(x).toHaveStyle({backgroundColor:L(n("#e62323"),n("#eb4e4e"),u)})}},r={args:{children:"1"}},o={args:{children:"123"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvas,
    globals: {
      scheme
    }
  }) => {
    const badge = await canvas.findByTestId('badge');
    await expect(badge).toHaveStyle({
      backgroundColor: lightDark(hexToRgb('#e62323'), hexToRgb('#eb4e4e'), scheme)
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
