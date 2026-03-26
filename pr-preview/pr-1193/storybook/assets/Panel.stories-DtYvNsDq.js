import{r as p,j as o}from"./iframe-Nwmt74ZK.js";import{P as s}from"./Panel-FBE3c3h9.js";import{B as i}from"./Button-BFrhdIAu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BkVOv_aE.js";import"./useFocusRing-CWypq6Zx.js";import"./utils-C6s6aSRX.js";import"./index-ch-f0Bx3.js";import"./index-BhWzPHH5.js";import"./animation-DRZdtGyM.js";import"./clsx-Ciqy0D92.js";import"./Text-BsCHJ-9I.js";import"./Text-C173mZfn.js";import"./x-CcBqmnVo.js";import"./createLucideIcon-BM-CznMN.js";import"./useLocalizedStringFormatter-C2TFJ0GM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BFe_Cqcu.js";import"./Hidden-BPf52IcM.js";import"./useLabel-NM3EoEuU.js";import"./useLabels-BWJGA9gI.js";import"./useButton-DPlFKcS8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CtXXaRnR.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
