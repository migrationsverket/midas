import{j as a}from"./iframe-DlHlAQJo.js";import{B as n,a as _,b as y}from"./BadgeContainer-CtSrw9iu.js";import{B as C}from"./Button-Dplqfzqs.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DpIge4kZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button.module-CcWMkJAG.js";import"./Button-DkbZ2U0v.js";import"./utils-CoWnALh5.js";import"./Hidden-2FK6M7Gy.js";import"./useFocusRing-BNxWl82l.js";import"./index-Hhdo2DzF.js";import"./index-3FC3mL86.js";import"./useLabels-DRdIFR70.js";import"./useButton-BhskPxTZ.js";const{expect:S}=__STORYBOOK_MODULE_TEST__,k={component:n,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:o=>a.jsx(C,{variant:"tertiary","aria-label":"Notiser",children:a.jsxs(_,{children:[a.jsx(y,{}),a.jsx(n,{...o,"data-testid":"badge"})]})})},s={},e={args:{children:"1"}},r={args:{children:"123"}},t={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"derp"},play:async({canvas:o,args:{className:L}})=>{const N=await o.findByTestId("badge");await S(N).toHaveClass(L)}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: '1'
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '123'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,B,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(x=(B=t.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const q=["NoLabel","WithLabel","LongLabel","CustomClassName"];export{t as CustomClassName,r as LongLabel,s as NoLabel,e as WithLabel,q as __namedExportsOrder,k as default};
