import{r as p,j as o}from"./iframe-DTOqtRPp.js";import{P as s}from"./Panel-BaZVMJD1.js";import{B as i}from"./Button-CDDDIvIj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DPZt2fnR.js";import"./useFocusRing-jHCCwEPg.js";import"./utils-CQz-p0Ar.js";import"./index-ChMjBSia.js";import"./index-CEAST5hf.js";import"./animation-CT07G7Xc.js";import"./clsx-Ciqy0D92.js";import"./Text-BaCnxKWQ.js";import"./Text-CIhwCa8A.js";import"./x-CrpZHpR_.js";import"./createLucideIcon-DdZg643M.js";import"./useLocalizedStringFormatter-CV8JNlf3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C4kKXxPS.js";import"./Hidden-BopZmEN9.js";import"./useLabel-BQ4cknfe.js";import"./useLabels-w95u50Wj.js";import"./useButton-sObWSv1u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DwgxUjwt.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
