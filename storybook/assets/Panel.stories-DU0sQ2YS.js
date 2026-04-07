import{r as p,j as o}from"./iframe-CuFHe2Vf.js";import{P as s}from"./Panel-lBEBVrQA.js";import{B as i}from"./Button-CksL_-0o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-JP9W3MVB.js";import"./useFocusRing-B1hdhdHY.js";import"./utils-VBjVty-c.js";import"./index-XnHTh2k6.js";import"./index-6uxo6Atk.js";import"./animation-hEtmpAV_.js";import"./clsx-Ciqy0D92.js";import"./Text-C4mdW1tH.js";import"./Text-BF1VogWM.js";import"./x-Dr_a8wCQ.js";import"./createLucideIcon-C4YuFSR4.js";import"./useLocalizedStringFormatter-CZd5T7mu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-VKTXL-zI.js";import"./Hidden-Bu9Ft7CN.js";import"./useLabel-BWPwXwHm.js";import"./useLabels-DvXUCZzH.js";import"./useButton-CH05P1-e.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CygALObj.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
