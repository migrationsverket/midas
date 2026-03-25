import{r as p,j as o}from"./iframe-C-K27eAl.js";import{P as s}from"./Panel-BtKaKCo7.js";import{B as i}from"./Button-BIatrZTr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BS7oDD3M.js";import"./useFocusRing-DxSA2Sop.js";import"./utils-CJaZGGf7.js";import"./index-BKKwvpcz.js";import"./index-DBCMJ7yJ.js";import"./animation-2g1vnqBv.js";import"./clsx-Ciqy0D92.js";import"./Text-BSrzc_20.js";import"./Text-CDT_NlP5.js";import"./x-BOs9pbax.js";import"./createLucideIcon-3jo47RrT.js";import"./useLocalizedStringFormatter-CVaM3I0e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BT6WGe3E.js";import"./Hidden-Vwjx6V0Q.js";import"./useLabels-bQBwCpKg.js";import"./useButton-UoBuyatd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-u6B1l6x2.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
