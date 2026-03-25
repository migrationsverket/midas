import{r as p,j as o}from"./iframe-DynRW4HM.js";import{P as s}from"./Panel-DD7uHZPG.js";import{B as i}from"./Button-BvN-UdiG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CKdYrkOm.js";import"./useFocusRing-Ccc6VB4N.js";import"./utils-wI83z-IC.js";import"./index-Dlo0bpld.js";import"./index-B5QOT-C7.js";import"./animation-CH7Kjv5N.js";import"./clsx-Ciqy0D92.js";import"./Text-CeGvnbH5.js";import"./Text-DyP2OCNX.js";import"./x-Bsg9N661.js";import"./createLucideIcon-DGkkD8Qb.js";import"./useLocalizedStringFormatter-D3oqCIEX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CFOPGSLm.js";import"./Hidden-ilD6RPA6.js";import"./useLabels-DQKocp6Q.js";import"./useButton-CnY6hm7P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HbDYDEMR.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
