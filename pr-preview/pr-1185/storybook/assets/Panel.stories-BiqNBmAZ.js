import{r as p,j as o}from"./iframe-BpREUp_n.js";import{P as s}from"./Panel-DY7tBxRi.js";import{B as i}from"./Button-B5TSA_w8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKT2uJC_.js";import"./useFocusRing-Di2Wci7-.js";import"./utils-5mnyh4pq.js";import"./index-CHND_S8B.js";import"./index-DHEjYkx-.js";import"./animation-DxJps0mT.js";import"./clsx-Ciqy0D92.js";import"./Text-C8nfs_6S.js";import"./Text-BIdbVrWu.js";import"./x-Dwm5AF8c.js";import"./createLucideIcon-Bp1NIHzV.js";import"./useLocalizedStringFormatter-BRvvA8cH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B1ymHcEs.js";import"./Hidden-C8ihGYRf.js";import"./useLabel-Wrhj3pEV.js";import"./useLabels-Bs18rTxZ.js";import"./useButton-BeSKsTxR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BSeLhscq.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
