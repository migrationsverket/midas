import{r as p,j as o}from"./iframe-BcVWnjiq.js";import{P as s}from"./Panel-zyH6LCHL.js";import{B as i}from"./Button-aD9_wGcx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BeIEKiqF.js";import"./useFocusRing-Cr43T2xz.js";import"./utils-BHfrMThS.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./animation-DYSUuiTn.js";import"./clsx-Ciqy0D92.js";import"./Text-aEiNTvlh.js";import"./Text-Cf3_Dpr9.js";import"./x-B_mInUxe.js";import"./createLucideIcon-DKRKL4qZ.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-X_O9ad-3.js";import"./Hidden-B1e2ot4t.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DQYzeIJf.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
