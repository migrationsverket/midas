import{r as p,j as o}from"./iframe-B3vg1P6Y.js";import{P as s}from"./Panel-DspBPSlb.js";import{B as i}from"./Button-Bihgy3ar.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CZjhAhOw.js";import"./useFocusRing-C6AjoB7d.js";import"./utils-n5Tj6M7m.js";import"./index-C-kva3F-.js";import"./index-BwBCavJo.js";import"./animation-BnO3CeRR.js";import"./clsx-Ciqy0D92.js";import"./Text-BlzVF25n.js";import"./Text-DUOd7G_7.js";import"./x-BD201NTP.js";import"./createLucideIcon-CB7DrpFH.js";import"./useLocalizedStringFormatter-Cy8EaEdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CnxNAqy1.js";import"./Hidden-fGQAJpTQ.js";import"./useLabel-DI7fi0Ro.js";import"./useLabels-DY9VFMmE.js";import"./useButton-BK-h-LZH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BtPzLQ1W.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
