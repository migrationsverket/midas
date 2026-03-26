import{r as p,j as o}from"./iframe-SDpi4twy.js";import{P as s}from"./Panel-ChxBqUK2.js";import{B as i}from"./Button-BFfXUBEp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnKNiq_e.js";import"./useFocusRing-HN10idpk.js";import"./utils-xrvn9yoP.js";import"./index-DtGjaFFO.js";import"./index-BiFAAEUl.js";import"./animation-EkTcRESu.js";import"./clsx-Ciqy0D92.js";import"./Text-fYO5A3M_.js";import"./Text-DfMMI2V7.js";import"./x-BpKlbFNN.js";import"./createLucideIcon-CoSUjgph.js";import"./useLocalizedStringFormatter-DAhT7gg2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CP9rYMdO.js";import"./Hidden-DCBLchC2.js";import"./useLabel-CsVesTp2.js";import"./useLabels-BdN3-T9J.js";import"./useButton-da7p-KW-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDECxo00.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
