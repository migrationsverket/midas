import{r as p,j as o}from"./iframe-BkUM7oEP.js";import{P as s}from"./Panel-Br9gppFr.js";import{B as i}from"./Button-aQxjv1sN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BozTthf5.js";import"./useFocusRing-CU5ndcID.js";import"./utils-DWoj52PP.js";import"./index-Db2I9cuy.js";import"./index-BL6dPHEM.js";import"./animation-C1LaiR6c.js";import"./clsx-Ciqy0D92.js";import"./Text-pLibJUKD.js";import"./Text-ClKfHAct.js";import"./x-69nCWHEw.js";import"./createLucideIcon-tb5hO106.js";import"./useLocalizedStringFormatter-B4MD3dHV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-UyuoNVOf.js";import"./Hidden-iTXT5-p2.js";import"./useLabel-Digs7FVA.js";import"./useLabels-DJtxT6T3.js";import"./useButton-y66OoghU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-eByAjNhP.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
