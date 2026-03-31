import{r as p,j as o}from"./iframe-BAIFV8Yb.js";import{P as s}from"./Panel-CPnsmWqT.js";import{B as i}from"./Button-CqpMDFXh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CleADvs5.js";import"./useFocusRing-btLeUPqX.js";import"./utils-C4qL7h-Q.js";import"./index-mpJUQRSx.js";import"./index-Baj0KArx.js";import"./animation-COpf6ecM.js";import"./clsx-Ciqy0D92.js";import"./Text-ygME-eTj.js";import"./Text-CmPtR76W.js";import"./x-BbXy3uH4.js";import"./createLucideIcon-CRLMORiX.js";import"./useLocalizedStringFormatter-geOfM1X1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-F9PaMeiW.js";import"./Hidden-I3OO9ryl.js";import"./useLabel-BgyZguEJ.js";import"./useLabels-CWgWqrCK.js";import"./useButton-CcTZ9cV8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-FRjMpRtC.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
