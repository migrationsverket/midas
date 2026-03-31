import{r as p,j as o}from"./iframe-CXDxfhKB.js";import{P as s}from"./Panel-QC0ZcGyR.js";import{B as i}from"./Button-BZAdL-F6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C3yTnT2d.js";import"./useFocusRing-V1VB5dDl.js";import"./utils-BlE_s_bB.js";import"./index-C3fyWD75.js";import"./index-0GWGer8Z.js";import"./animation-BYO-5mxD.js";import"./clsx-Ciqy0D92.js";import"./Text-NatKauD4.js";import"./Text-w7WBT89W.js";import"./x-8JNHbqX6.js";import"./createLucideIcon-DfHQJbWK.js";import"./useLocalizedStringFormatter-BSYNBMcv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-rApmyro7.js";import"./Hidden-DFs8xn-0.js";import"./useLabel-BQWuOrga.js";import"./useLabels-CzD1PIZv.js";import"./useButton-CHfNFaSS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D1jOK9_R.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
