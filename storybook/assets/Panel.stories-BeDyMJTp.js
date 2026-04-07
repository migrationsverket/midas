import{r as p,j as o}from"./iframe-oKPevWaY.js";import{P as s}from"./Panel-C_7e_fkW.js";import{B as i}from"./Button-BPGT5-63.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CyVhgPro.js";import"./useFocusRing-BNAmj3ga.js";import"./utils-BqjuQA51.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./animation-rH8nux2W.js";import"./clsx-Ciqy0D92.js";import"./Text-CEmixCfV.js";import"./Text-NuhHAO3F.js";import"./x-DIFCquM7.js";import"./createLucideIcon-D_CPhcXk.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-UMnKvlHB.js";import"./Hidden-DpO7vPy1.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5YwBUcA.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
