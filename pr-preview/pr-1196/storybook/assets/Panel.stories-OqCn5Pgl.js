import{r as p,j as o}from"./iframe-BaglzexA.js";import{P as s}from"./Panel-DCTejX85.js";import{B as i}from"./Button-DEzldRuR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-j7ZeGh6U.js";import"./useFocusRing-o2chUIJx.js";import"./utils-BRuvLXhr.js";import"./index-BDFHFH_G.js";import"./index-B5KTxMw4.js";import"./animation-BiW8wGFg.js";import"./clsx-Ciqy0D92.js";import"./Text-BUo0m_vR.js";import"./Text-BjRotHGw.js";import"./x-B7iLIw8y.js";import"./createLucideIcon-B0HwbXf8.js";import"./useLocalizedStringFormatter-DzzpmN-7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-4C6qbeHh.js";import"./Hidden-DtQ8Bocl.js";import"./useLabel-DPVf23Bi.js";import"./useLabels-BQSacZGu.js";import"./useButton-CAOCdVrC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden--A_wY8k-.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
