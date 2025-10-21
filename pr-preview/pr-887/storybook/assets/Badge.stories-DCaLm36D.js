import{j as a}from"./iframe-D0MnHx7_.js";import{B as n,a as _,b as y}from"./BadgeContainer-DVkUW_EY.js";import{B as C}from"./Button-_otvzGNR.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DpmW14MN.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button.module-CcWMkJAG.js";import"./Button-DmxnH2Va.js";import"./utils-pp0QcdTs.js";import"./Hidden-Da0TrTOe.js";import"./useFocusRing-Da1HHjoJ.js";import"./index-CQZ3zNG1.js";import"./index-1Vm2fim1.js";import"./useLabels-CxIcwF3m.js";import"./useButton-ClVfglou.js";const{expect:S}=__STORYBOOK_MODULE_TEST__,k={component:n,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:o=>a.jsx(C,{variant:"tertiary","aria-label":"Notiser",children:a.jsxs(_,{children:[a.jsx(y,{}),a.jsx(n,{...o,"data-testid":"badge"})]})})},s={},e={args:{children:"1"}},r={args:{children:"123"}},t={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"derp"},play:async({canvas:o,args:{className:L}})=>{const N=await o.findByTestId("badge");await S(N).toHaveClass(L)}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
