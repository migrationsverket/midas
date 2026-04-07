import{r as p,j as o}from"./iframe-BQjBM75C.js";import{P as s}from"./Panel-Chv_e9i2.js";import{B as i}from"./Button-BrUsIHUW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C34v6o9-.js";import"./useFocusRing-gicmbIfS.js";import"./utils-BSV0ImVH.js";import"./index-DYrIRKkS.js";import"./index-Voaa81LI.js";import"./animation-BMKhccaE.js";import"./clsx-Ciqy0D92.js";import"./Text-CSQrQWbM.js";import"./Text-ByOtvKGn.js";import"./x-CzDTAgEv.js";import"./createLucideIcon-CfIBoofS.js";import"./useLocalizedStringFormatter-C1cV6AoF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CleE5i4u.js";import"./Hidden-DsiXMF_M.js";import"./useLabel--h21IWG8.js";import"./useLabels-CtGdXDZ4.js";import"./useButton-BZFew9pY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUlqTjt1.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
