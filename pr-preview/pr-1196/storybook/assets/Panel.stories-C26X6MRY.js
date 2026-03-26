import{r as p,j as o}from"./iframe-DUmnjMKN.js";import{P as s}from"./Panel-C7JKUJtV.js";import{B as i}from"./Button-tmoOZgUj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D6z3aXVM.js";import"./useFocusRing-CNLfoayx.js";import"./utils-0xSMeEGm.js";import"./index-DqAa-ger.js";import"./index-B5i8x2Yv.js";import"./animation-D6XhKofk.js";import"./clsx-Ciqy0D92.js";import"./Text-CnbD-jnj.js";import"./Text-CeMQVnHe.js";import"./x-54C-wf8A.js";import"./createLucideIcon-D1JpQBbc.js";import"./useLocalizedStringFormatter-DAICFjeC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-6X6Z2oCH.js";import"./Hidden-Cfzmra0d.js";import"./useLabel-CcUgjBrh.js";import"./useLabels-DUPDduiv.js";import"./useButton-DCAwdvik.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cb4icQhq.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
