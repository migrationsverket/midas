import{r as p,j as o}from"./iframe-BP7DzUIh.js";import{P as s}from"./Panel-eWxoCXKK.js";import{B as i}from"./Button-e7FuQA8u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B7al1qBg.js";import"./useFocusRing-Apf-8Fr7.js";import"./utils-B9_czYqy.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./animation-qcmAUM1D.js";import"./clsx-Ciqy0D92.js";import"./Text-C-lFPFDT.js";import"./Text-C6QCLAD1.js";import"./x-BKCqd2ot.js";import"./createLucideIcon-zXtIRWL6.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-yD28QKfx.js";import"./Hidden-DlKvXDgO.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CFJkh_29.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
