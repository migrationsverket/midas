import{r as p,j as o}from"./iframe-DJnBo8qx.js";import{P as s}from"./Panel-Dq33I8xj.js";import{B as i}from"./Button-DxRtiFp7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGw5Me1h.js";import"./useFocusRing-Bp7BshOu.js";import"./utils-gWiD0ns3.js";import"./index-DrJKcisO.js";import"./index-BBWpXqfQ.js";import"./animation-yCPDjLRE.js";import"./clsx-Ciqy0D92.js";import"./Text-CwlODUSS.js";import"./Text-C5-sBZVY.js";import"./x-DoHdhEkA.js";import"./createLucideIcon-mT6cpvLo.js";import"./useLocalizedStringFormatter-DDDranTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DeGMYH9f.js";import"./Hidden-DalgADPi.js";import"./useLabel-CQ_H6yZ6.js";import"./useLabels-CCJcnJYo.js";import"./useButton-CF9JOIlT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-XMqtKg57.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
