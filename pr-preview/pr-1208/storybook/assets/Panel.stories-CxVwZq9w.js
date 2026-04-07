import{r as p,j as o}from"./iframe-BRlibj-k.js";import{P as s}from"./Panel-DZVI-1qS.js";import{B as i}from"./Button-BCeszJe0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CerSLXPK.js";import"./useFocusRing-CE-jlBYc.js";import"./utils-Bx0A40Hz.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./animation-DHkAtzL7.js";import"./clsx-Ciqy0D92.js";import"./Text-fpqzAeYU.js";import"./Text-Ck72NiTG.js";import"./x-KlHF_jbs.js";import"./createLucideIcon-p72J_6hu.js";import"./useLocalizedStringFormatter-nyGG6W03.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B0keB5Wy.js";import"./Hidden-BrLnFV9D.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DAewgK18.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
