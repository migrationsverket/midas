import{r as p,j as o}from"./iframe-CPZ4_d2q.js";import{P as s}from"./Panel-BisfTREd.js";import{B as i}from"./Button-hn_7_4-p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DiN_YqvG.js";import"./useFocusRing-d1kY_X2y.js";import"./utils-DWW_dCIy.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./animation-RJHByoGu.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhoFnBV.js";import"./Text-C-nhapA_.js";import"./x-_8u0d44F.js";import"./createLucideIcon-CHHQY25e.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CXhapsAk.js";import"./Hidden-ddHOLGj0.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_2Qiydl.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
