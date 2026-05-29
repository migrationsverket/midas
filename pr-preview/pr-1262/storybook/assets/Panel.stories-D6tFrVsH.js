import{r as p,j as r}from"./iframe-CDEaDO_F.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DB3DDdeK.js";import{B as c}from"./Button-BRFWodMz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DL-5sHQJ.js";import"./useFocusRing-D6D_N6j5.js";import"./utils-OMrxCTYB.js";import"./index-HLg42q85.js";import"./index-BWuCcNre.js";import"./animation-BPjnfsCI.js";import"./PanelTitle-Cg-VgL27.js";import"./clsx-Ciqy0D92.js";import"./Text-I0yIqnfi.js";import"./Text-BM9CJ7ZD.js";import"./x-jshiSbcB.js";import"./createLucideIcon-B5m9rABL.js";import"./useLocalizedStringFormatter-1JfWbRYz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-VtRoDegr.js";import"./Hidden-DV64-eP0.js";import"./useLabel-BWHpOmGl.js";import"./useLabels-BTwbSZKD.js";import"./useButton-mnoEnHil.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_heY0RE.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
