import{r as p,j as o}from"./iframe-DeJZYfs6.js";import{P as s}from"./Panel-DdIb8MbW.js";import{B as i}from"./Button-7AU2H28z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-e4htfzmn.js";import"./useFocusRing-EUZ5WM39.js";import"./utils-CVaTJ4pr.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./animation-Drxg6nEc.js";import"./clsx-Ciqy0D92.js";import"./Text-BDvIHgKo.js";import"./Text-DiI9AjCa.js";import"./x-QMdCwQzi.js";import"./createLucideIcon-BN41fbAL.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-TyrtoBf7.js";import"./Hidden-CpOEnTcU.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C7trIB5i.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
