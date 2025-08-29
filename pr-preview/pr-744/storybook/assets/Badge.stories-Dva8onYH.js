import{j as e}from"./iframe-DgUUoo4T.js";import{B as s,a as B,b as y}from"./BadgeContainer-BoXxq_nh.js";import{l as L,h as n}from"./test-DcKGE-up.js";import{B as _}from"./Button-cnfrlHZK.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DWDaj1ca.js";import"./clsx-B-dksMZM.js";import"./Button.module-CF2bVDCq.js";import"./Button-CfaThaXB.js";import"./utils-CSUHdYcV.js";import"./Hidden-Dg1s9RhG.js";import"./useFocusRing-B4yI1PJW.js";import"./index-D2B3xfdm.js";import"./index-DiO0iGYb.js";import"./useLabels-9Z-pw4ee.js";import"./useButton-CzH63SGf.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,M={component:s,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:t=>e.jsx(_,{variant:"tertiary","aria-label":"Notiser",children:e.jsxs(B,{children:[e.jsx(y,{}),e.jsx(s,{...t,"data-testid":"badge"})]})})},a={play:async({canvas:t,globals:{scheme:u}})=>{const x=await t.findByTestId("badge");await T(x).toHaveStyle({backgroundColor:L(n("#e62323"),n("#eb4e4e"),u)})}},r={args:{children:"1"}},o={args:{children:"123"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
