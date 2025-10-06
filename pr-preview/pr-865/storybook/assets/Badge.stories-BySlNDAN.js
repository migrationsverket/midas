import{j as a}from"./iframe-Be0g_aJO.js";import{B as n,a as T,b as f}from"./BadgeContainer-inTtSgfp.js";import{B as C}from"./Button-WxyWdEj2.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DknQS7n1.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button.module-DRhvPh0f.js";import"./Button-D8MC8HcS.js";import"./utils-ddu2LZsb.js";import"./Hidden-DfyZdMIn.js";import"./useFocusRing-COr-n7Fx.js";import"./index-B0KwozC5.js";import"./index-BSeW_fek.js";import"./useLabels-COtLsp3_.js";import"./useButton-C8AwPNN5.js";const{expect:L}=__STORYBOOK_MODULE_TEST__,Y={component:n,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:o=>a.jsx(C,{variant:"tertiary","aria-label":"Notiser",children:a.jsxs(T,{children:[a.jsx(f,{}),a.jsx(n,{...o,"data-testid":"badge"})]})})},e={},s={args:{children:"1"}},r={args:{children:"123"}},t={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"derp"},play:async({canvas:o,args:{className:B}})=>{const v=await o.findByTestId("badge");await L(v).toHaveClass(B)}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // TODO: This test will fail in forced-colors mode
  // play: async ({ canvas, globals: { scheme } }) => {
  //   const badge = await canvas.findByTestId('badge')
  //   await expect(badge).toHaveStyle({
  //     backgroundColor: lightDark(
  //       hexToRgb('#e62323'),
  //       hexToRgb('#e62323'),
  //       scheme,
  //     ),
  //   })
  // },
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: '1'
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '123'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    className: 'derp'
  },
  play: async ({
    canvas,
    args: {
      className
    }
  }) => {
    const badge = await canvas.findByTestId('badge');
    await expect(badge).toHaveClass(className as string);
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const q=["NoLabel","WithLabel","LongLabel","CustomClassName"];export{t as CustomClassName,r as LongLabel,e as NoLabel,s as WithLabel,q as __namedExportsOrder,Y as default};
