import{r as p,j as r}from"./iframe-CjS4NLOn.js";import{P as n,M as i,L as m,a as u}from"./LayoutContent-NqQqxzTq.js";import{B as c}from"./Button-iv9BguPP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BbWK1__y.js";import"./useFocusRing-DglKaSCo.js";import"./utils-Bd-AzVom.js";import"./index-BAKX6Q0C.js";import"./index-Bkm3VJ40.js";import"./animation-ctB5lWfz.js";import"./PanelTitle-YrPGmV_V.js";import"./clsx-Ciqy0D92.js";import"./Text-CX-M1xx_.js";import"./Text-BbW2XwBz.js";import"./x-Dux1vDQf.js";import"./createLucideIcon-DkfyV_c3.js";import"./useLocalizedStringFormatter-FU720mIV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dd-c5XOo.js";import"./Hidden-DQ5FusQj.js";import"./useLabel-BNspr0mf.js";import"./useLabels-Dg9_l0gi.js";import"./useButton-K15jCtz1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CY_5XPqM.js";const D={component:n,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,s]=p.useState(!0);return r.jsxs(i,{children:[r.jsx(c,{onPress:()=>s(!0),children:"Open panel"}),r.jsx(n,{...o,isOpen:a,onOpenChange:s})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <Main>
        <Button onPress={() => setIsOpen(true)}>Open panel</Button>
        <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </Main>;
  }
}`,...t.parameters?.docs?.source}}};const F=["Primary","Controlled"];export{t as Controlled,e as Primary,F as __namedExportsOrder,D as default};
