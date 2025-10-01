import{j as e}from"./iframe-tg55KViq.js";import{l as T,h as i}from"./test-DcKGE-up.js";import{B as d,a as f,b as L}from"./BadgeContainer-BhrExfSa.js";import{B as N}from"./Button-CbjeGp8I.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-sJqR73sg.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button.module-DRhvPh0f.js";import"./Button-C8wh5iYF.js";import"./utils-CW23PGLJ.js";import"./Hidden-t_I5kgNB.js";import"./useFocusRing-DAVsqA2_.js";import"./index-RaVpyZeL.js";import"./index-DEkcVeXa.js";import"./useLabels-CMBzL3Yz.js";import"./useButton-BTqK5PhC.js";const{expect:S}=__STORYBOOK_MODULE_TEST__,A={component:d,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:a=>e.jsx(N,{variant:"tertiary","aria-label":"Notiser",children:e.jsxs(f,{children:[e.jsx(L,{}),e.jsx(d,{...a,"data-testid":"badge"})]})})},s={play:async({canvas:a,globals:{scheme:n}})=>{const c=await a.findByTestId("badge");await S(c).toHaveStyle({backgroundColor:T(i("#e62323"),i("#e62323"),n)})}},r={args:{children:"1"}},t={args:{children:"123"}},o={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"derp"},play:async({canvas:a,args:{className:n}})=>{const c=await a.findByTestId("badge");await S(c).toHaveClass(n)}};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,b,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '1'
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,y,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '123'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,v,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const F=["NoLabel","WithLabel","LongLabel","CustomClassName"];export{o as CustomClassName,t as LongLabel,s as NoLabel,r as WithLabel,F as __namedExportsOrder,A as default};
