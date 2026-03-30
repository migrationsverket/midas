import{r as p,j as o}from"./iframe-DOVonus9.js";import{P as s}from"./Panel-DW9TlNVK.js";import{B as i}from"./Button-BMOShfgc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BPaR75DG.js";import"./useFocusRing-DFqQelvs.js";import"./utils-DhPCiJLe.js";import"./index-BXLzhsHf.js";import"./index-DynpYPKw.js";import"./animation-DHfUSsMm.js";import"./clsx-Ciqy0D92.js";import"./Text-DX6xJkbU.js";import"./Text-DFd043ah.js";import"./x-BOgOzpuz.js";import"./createLucideIcon-CfE47YAu.js";import"./useLocalizedStringFormatter-zR7_kec3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Cz99NuPN.js";import"./Hidden-DMUfuflC.js";import"./useLabel-CFmo7f_1.js";import"./useLabels-DhmD3WfL.js";import"./useButton-DPc7CUXt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BveXVc2Y.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
