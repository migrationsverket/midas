import{j as e}from"./iframe-CBLyp6Df.js";import{B as s,a as B,b as y}from"./BadgeContainer-QFZN45l6.js";import{l as L,h as n}from"./test-DcKGE-up.js";import{B as _}from"./Button-ByLLZfj5.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-pVx8Uva1.js";import"./clsx-B-dksMZM.js";import"./Button.module-DRhvPh0f.js";import"./Button-DNy0we5g.js";import"./utils-CZnmoRnZ.js";import"./Hidden-Cgex3EGe.js";import"./useFocusRing-Ba5BIRHo.js";import"./index-BeMsLq_7.js";import"./index-XngMirVr.js";import"./useLabels-xFBToVlf.js";import"./useButton-BYvOX5r7.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,M={component:s,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:t=>e.jsx(_,{variant:"tertiary","aria-label":"Notiser",children:e.jsxs(B,{children:[e.jsx(y,{}),e.jsx(s,{...t,"data-testid":"badge"})]})})},a={play:async({canvas:t,globals:{scheme:u}})=>{const x=await t.findByTestId("badge");await T(x).toHaveStyle({backgroundColor:L(n("#e62323"),n("#e62323"),u)})}},r={args:{children:"1"}},o={args:{children:"123"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
