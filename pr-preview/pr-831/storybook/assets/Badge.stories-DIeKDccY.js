import{j as e}from"./iframe-aRD0Mkaw.js";import{l as B,h as s}from"./test-DcKGE-up.js";import{B as n,a as y,b as L}from"./BadgeContainer-DUSZjONx.js";import{B as _}from"./Button-PTsis6M8.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-PtsNCAY4.js";import"./clsx-B-dksMZM.js";import"./Button.module-DRhvPh0f.js";import"./Button-CDyNVJk1.js";import"./utils-DBWduLU9.js";import"./Hidden-Dkjnz7-u.js";import"./useFocusRing-CwniUdxO.js";import"./index-CgoR9ooH.js";import"./index-DuOXwpRn.js";import"./useLabels-DCVgCxBr.js";import"./useButton-Ca1ObhS9.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,M={component:n,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:t=>e.jsx(_,{variant:"tertiary","aria-label":"Notiser",children:e.jsxs(y,{children:[e.jsx(L,{}),e.jsx(n,{...t,"data-testid":"badge"})]})})},a={play:async({canvas:t,globals:{scheme:u}})=>{const x=await t.findByTestId("badge");await T(x).toHaveStyle({backgroundColor:B(s("#e62323"),s("#e62323"),u)})}},r={args:{children:"1"}},o={args:{children:"123"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
