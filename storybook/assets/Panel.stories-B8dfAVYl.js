import{r as p,j as o}from"./iframe-SOAudsoD.js";import{P as s}from"./Panel-3qfPwRJi.js";import{B as i}from"./Button-C52wufQI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bfp68Ksh.js";import"./useFocusRing-BAXSXuvY.js";import"./utils-CIsr0dbb.js";import"./index-BD7D_b6m.js";import"./index-TydVMVST.js";import"./animation-sSSQQuxs.js";import"./clsx-Ciqy0D92.js";import"./Text-BA3To6tW.js";import"./Text-BaMrJhkm.js";import"./x-MNLtDlkP.js";import"./createLucideIcon-C9pXYI_x.js";import"./useLocalizedStringFormatter-DNP-DOoF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D067fNNN.js";import"./Hidden-B1WT_Vdg.js";import"./useLabel-CkEKqqdX.js";import"./useLabels-CF8dmUib.js";import"./useButton-BQJi0Bnf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DchdFXfm.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
