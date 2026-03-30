import{r as p,j as o}from"./iframe-mq0SU6Z9.js";import{P as s}from"./Panel-iegjjd-G.js";import{B as i}from"./Button-Cvp14hiG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CIPDjvWu.js";import"./useFocusRing-D78q_c7L.js";import"./utils-BJUm3EKx.js";import"./index-CiCCX6wU.js";import"./index-Cnhx9KUB.js";import"./animation-Pd6N4DBb.js";import"./clsx-Ciqy0D92.js";import"./Text-QATMG5Uj.js";import"./Text-BbVeu3X7.js";import"./x-yCiVd0iJ.js";import"./createLucideIcon-D9XqkqtN.js";import"./useLocalizedStringFormatter-Deu_fvUu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D5Wvq1Pl.js";import"./Hidden-CNCyzMOi.js";import"./useLabel-B5pFd3Xm.js";import"./useLabels-CIFPEs6o.js";import"./useButton-KkDhW6MW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbUhQySq.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
