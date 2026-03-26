import{r as p,j as o}from"./iframe-GWyqpu_M.js";import{P as s}from"./Panel-DmOeYTtR.js";import{B as i}from"./Button-CSLm8s2k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cjxvjhkl.js";import"./useFocusRing-BEBkue70.js";import"./utils-Dt2I5FC1.js";import"./index-D2WS1qCH.js";import"./index-CwQDUu6A.js";import"./animation-DYU0HbgZ.js";import"./clsx-Ciqy0D92.js";import"./Text-P__SInd9.js";import"./Text-BzWdciNH.js";import"./x-UXvlZnGy.js";import"./createLucideIcon-BoYLuSqv.js";import"./useLocalizedStringFormatter-CybCfRF3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DaVw9Yu8.js";import"./Hidden-i5KMI_eW.js";import"./useLabel-DHRJ-v17.js";import"./useLabels-BvrpK5k3.js";import"./useButton-BCnnqreW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-d58nTTlD.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
