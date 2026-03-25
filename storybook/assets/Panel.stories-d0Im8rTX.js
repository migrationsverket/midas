import{r as p,j as o}from"./iframe-CS97_aKA.js";import{P as s}from"./Panel-Cqs11Hha.js";import{B as i}from"./Button-BxQXJJlf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DJ6meZbb.js";import"./useFocusRing-D6iyZNHD.js";import"./utils-Csn9hih_.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./animation-BvqAEV7Q.js";import"./clsx-Ciqy0D92.js";import"./Text-BsEp3Lpg.js";import"./Text-DllmWVRt.js";import"./x-BZc_-WXG.js";import"./createLucideIcon-CpkX-fVF.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BEBLvHt_.js";import"./Hidden-CZHel-hh.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-XYRUvUKq.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
