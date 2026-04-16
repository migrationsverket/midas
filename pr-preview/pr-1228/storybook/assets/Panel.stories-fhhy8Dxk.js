import{r as p,j as r}from"./iframe-Xm_9cv73.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BcLLEKol.js";import{B as c}from"./Button-Da8bQidF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B_fJsoKU.js";import"./useFocusRing-B1Kohi3p.js";import"./utils-BrYTleyQ.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./animation-DwL4Kwi0.js";import"./PanelTitle-C7n5KO-l.js";import"./clsx-Ciqy0D92.js";import"./Text-C4UzyOu1.js";import"./Text-83WNws37.js";import"./x-CXw9u6Gz.js";import"./createLucideIcon-9sC3-GJ0.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DVfOBJT3.js";import"./Hidden-BZlSwNP_.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BGkpKKxN.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
