import{r as p,j as o}from"./iframe-BmAdb1PA.js";import{P as s}from"./Panel-p_v62DVH.js";import{B as i}from"./Button-Cxe1PoSr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dv2Kshwg.js";import"./useFocusRing-DjzcYn69.js";import"./utils-CCClzR0P.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./animation-U_IkXvLC.js";import"./clsx-Ciqy0D92.js";import"./Text-GqXtxiSt.js";import"./Text-CWRsvaQ5.js";import"./x-BgO40Plk.js";import"./createLucideIcon-CbxvyYW-.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-MRSjvKjG.js";import"./Hidden-B3pD7GY2.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDq5yWsw.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
