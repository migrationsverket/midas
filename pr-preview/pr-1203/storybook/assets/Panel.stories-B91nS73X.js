import{r as p,j as o}from"./iframe-CpD0sz2e.js";import{P as s}from"./Panel-CuYpS0c-.js";import{B as i}from"./Button-BEQpNkHS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DBG5XgRx.js";import"./useFocusRing-CBhF1Pep.js";import"./utils-ojEvGYm9.js";import"./index-2osu5sAu.js";import"./index-C5xpIHaH.js";import"./animation-Comx9zlQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BdNXNsJY.js";import"./Text-eC571-Sp.js";import"./x-CZaGtiyi.js";import"./createLucideIcon-DFkdkqMu.js";import"./useLocalizedStringFormatter-BvEEsuGU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-TIyC3aNe.js";import"./Hidden-CJYkSVxl.js";import"./useLabel-BcpaW40H.js";import"./useLabels-DFOTVMl_.js";import"./useButton-ku5NYICY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BXLSQV9r.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
