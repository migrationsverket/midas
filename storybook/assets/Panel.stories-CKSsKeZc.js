import{r as p,j as o}from"./iframe-D6LQdl6O.js";import{P as s}from"./Panel-CBWwUTLz.js";import{B as i}from"./Button-BVWIHAUA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-FXE_mKkD.js";import"./useFocusRing-BDbVtPGE.js";import"./utils-CZfNivSw.js";import"./index-DPCjDfDX.js";import"./index-DlVk54G_.js";import"./animation-CfkmMHKA.js";import"./clsx-Ciqy0D92.js";import"./Text-RYp74C2J.js";import"./Text-CwW63OZO.js";import"./x-CNFfLLin.js";import"./createLucideIcon-kgcsXuQA.js";import"./useLocalizedStringFormatter-rG6cuzBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-9qwLQrmH.js";import"./Hidden-yz3dW65o.js";import"./useLabel-B512jCzb.js";import"./useLabels-CAs9k4GA.js";import"./useButton-CQHMF8NW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cd1-ui_g.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
