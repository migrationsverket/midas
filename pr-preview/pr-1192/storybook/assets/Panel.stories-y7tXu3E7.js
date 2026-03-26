import{r as p,j as o}from"./iframe-I-T_H5J_.js";import{P as s}from"./Panel-DBPWaDE_.js";import{B as i}from"./Button-B83Ld0RX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B5eahPl_.js";import"./useFocusRing-B9IqJ9Mt.js";import"./utils-JproU_nw.js";import"./index-CYZt27Wv.js";import"./index-B8pVpPqH.js";import"./animation-CsRXW8Qt.js";import"./clsx-Ciqy0D92.js";import"./Text-DpvJioBU.js";import"./Text-BJ8cMGkE.js";import"./x-DtRGZRlW.js";import"./createLucideIcon-BVI9IRTp.js";import"./useLocalizedStringFormatter-B0a8KkB4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C5239-Pe.js";import"./Hidden-BMWDbIRC.js";import"./useLabel-QpkB0RGM.js";import"./useLabels-DPpJmx2A.js";import"./useButton-Bv3qVFH-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ImRnGBY4.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
