import{j as a}from"./iframe-BvtnbEWO.js";import{B as n,a as m,b as p}from"./BadgeContainer-DRd44Ei-.js";import{B as d}from"./Button-DciKK2iU.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DLTmB58A.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./Button.module-CtQ1deO8.js";import"./Button-BDKaMgDI.js";import"./utils-Dmj49lEG.js";import"./Hidden-B-AZDmCl.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,T={component:n,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{},render:o=>a.jsx(d,{variant:"tertiary","aria-label":"Notiser",children:a.jsxs(m,{children:[a.jsx(p,{}),a.jsx(n,{...o,"data-testid":"badge"})]})})},s={},e={args:{children:"1"}},r={args:{children:"123"}},t={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{className:"derp"},play:async({canvas:o,args:{className:c}})=>{const i=await o.findByTestId("badge");await l(i).toHaveClass(c)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: '1'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: '123'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["NoLabel","WithLabel","LongLabel","CustomClassName"];export{t as CustomClassName,r as LongLabel,s as NoLabel,e as WithLabel,w as __namedExportsOrder,T as default};
