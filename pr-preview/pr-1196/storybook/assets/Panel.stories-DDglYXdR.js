import{r as p,j as o}from"./iframe-Csz20ARP.js";import{P as s}from"./Panel-K1JAIQp1.js";import{B as i}from"./Button-CwrtXb_B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C0z1d-QQ.js";import"./useFocusRing-86VLoSnj.js";import"./utils-CLTlmF8J.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./animation-BmeOkpPh.js";import"./clsx-Ciqy0D92.js";import"./Text--2gnQNTy.js";import"./Text-C-Hcl69m.js";import"./x-BnuAwExu.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-kUaaPtXV.js";import"./Hidden-Be3C43tB.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5NA-uw_.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
