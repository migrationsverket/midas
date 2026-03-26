import{r as p,j as o}from"./iframe-B04rcWcX.js";import{P as s}from"./Panel-qZlcAxXD.js";import{B as i}from"./Button-9yaBleaj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C9VnzheA.js";import"./useFocusRing-DOTrmHAk.js";import"./utils-5SWrrdiI.js";import"./index-DR4XYI1U.js";import"./index-Co-GRlRp.js";import"./animation-BmiF16cr.js";import"./clsx-Ciqy0D92.js";import"./Text-CLa1xROh.js";import"./Text-b-jINt27.js";import"./x-BCKhYY4g.js";import"./createLucideIcon-VXkpW6uL.js";import"./useLocalizedStringFormatter-C68HHjER.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BsMpdhm5.js";import"./Hidden-CsiOlUYT.js";import"./useLabel-CuMqu2Vz.js";import"./useLabels-gSO7jKxM.js";import"./useButton-CqaBofGl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-wR3lvsEV.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
