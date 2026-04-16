import{r as p,j as r}from"./iframe-DLmeXnKv.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-GivmR3eD.js";import{B as c}from"./Button-CmoC0nDS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B3HwZ_qH.js";import"./useFocusRing-Chec2SQM.js";import"./utils-ClLZ4yi-.js";import"./index-CXmu4Dre.js";import"./index-Bf1sSXM2.js";import"./animation-BGjDSiHx.js";import"./PanelTitle-C-d7R3N3.js";import"./clsx-Ciqy0D92.js";import"./Text-ByAHNZXR.js";import"./Text-as2Y-4wz.js";import"./x-WR_Pezhl.js";import"./createLucideIcon-Cb9jSIDP.js";import"./useLocalizedStringFormatter-CtddYHoj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-6oEuMc47.js";import"./Hidden-DYR-bjkD.js";import"./useLabel-DFg61T6F.js";import"./useLabels-CdIpmnty.js";import"./useButton-2j0Kbf_l.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BCbNtM-G.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
