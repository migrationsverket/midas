import{r as p,j as o}from"./iframe-BsX4-fHl.js";import{P as s}from"./Panel-Dz-I7iOY.js";import{B as i}from"./Button-BTWfCVSc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-1XtDDM6q.js";import"./useFocusRing-DHGOOITS.js";import"./utils-WmpgZI0L.js";import"./index--eTuDDLm.js";import"./index-8LgWGc9O.js";import"./animation-B77ezQWY.js";import"./clsx-Ciqy0D92.js";import"./Text-AfY7AoQf.js";import"./Text-BO6cVHx4.js";import"./x-BRKCJtiN.js";import"./createLucideIcon-lE9BzsE-.js";import"./useLocalizedStringFormatter-tfIgws8_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-mui9UUMM.js";import"./Hidden-Du6MB-px.js";import"./useLabel-C3_xLHTN.js";import"./useLabels-DE2ohQQR.js";import"./useButton-bzYxxfaT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUS8JXkv.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
