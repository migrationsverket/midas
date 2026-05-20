import{r as p,j as r}from"./iframe-UJ3BwdI6.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Evf5mwMZ.js";import{B as c}from"./Button-C7x5CU1C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-SS_iM14g.js";import"./useFocusRing-CLeeQzke.js";import"./utils-BYceCV3C.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./animation-B_ZWVv1J.js";import"./PanelTitle-CgN0mmMU.js";import"./clsx-Ciqy0D92.js";import"./Text-C99-Gc34.js";import"./Text-BU9YFTb1.js";import"./x-BHjLPSUz.js";import"./createLucideIcon-C1FynrDV.js";import"./useLocalizedStringFormatter-BPE-JPT8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C3rI1i5q.js";import"./Hidden-Dl3PKEKv.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-KE5d7FBc.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
