import{r as p,j as o}from"./iframe-Cod1JNFG.js";import{P as s}from"./Panel-CrHM0QN0.js";import{B as i}from"./Button-Bv7kxC8o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7bsBW9ME.js";import"./useFocusRing-BTBrbXYF.js";import"./utils-RnFRVAvs.js";import"./index-B6aKl88f.js";import"./index-CYSTLAu0.js";import"./animation-Fwdv0CMl.js";import"./clsx-Ciqy0D92.js";import"./Text-DYp5dFw4.js";import"./Text-Dho6KfK4.js";import"./x-A2fBJB1S.js";import"./createLucideIcon-iT6Y2Uaa.js";import"./useLocalizedStringFormatter-BASSYTlJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DShIviGh.js";import"./Hidden-DSAoUHUZ.js";import"./useLabel-BYcG1Feb.js";import"./useLabels-Bj-Yy0gt.js";import"./useButton-CewAlskq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B_oZwuHi.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
