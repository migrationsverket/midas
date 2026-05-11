import{r as p,j as r}from"./iframe-B8ApkfN9.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BuJMEmia.js";import{B as c}from"./Button-DBfSMFHv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CcqX14cB.js";import"./useFocusRing-t4lmh3Yy.js";import"./utils-DY9Yxgt6.js";import"./index-B1GJl5u8.js";import"./index-Dam3589Q.js";import"./animation-B3iQyTM3.js";import"./PanelTitle-DQ-jIOyb.js";import"./clsx-Ciqy0D92.js";import"./Text-nPgffpxE.js";import"./Text-DCpVGc-0.js";import"./x-DqxHC3Oe.js";import"./createLucideIcon-tZEetkZ6.js";import"./useLocalizedStringFormatter-5IW1LiLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D0ujuU3m.js";import"./Hidden-B3-5R_c4.js";import"./useLabel-CJkRyn3E.js";import"./useLabels-C6kkXsgA.js";import"./useButton-CG0EpAju.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cpti0KaM.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <>
        <Main>
          <Button onPress={() => setIsOpen(true)}>Open panel</Button>
        </Main>
        <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const D=["Primary","Controlled"];export{t as Controlled,e as Primary,D as __namedExportsOrder,z as default};
