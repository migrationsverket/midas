import{r as p,j as o}from"./iframe-D4usB9n2.js";import{P as s}from"./Panel-ClIgoMXE.js";import{B as i}from"./Button-DaUg4W92.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DA5Xz2a0.js";import"./useFocusRing-ihkH1nOS.js";import"./utils-Chiz1oN2.js";import"./index-D_BiQ3CN.js";import"./index-D7VIiBEs.js";import"./animation-CAMo3Vmy.js";import"./clsx-Ciqy0D92.js";import"./Text-BPVUDIkV.js";import"./Text-DCjCSbNe.js";import"./x-B4mY3mrq.js";import"./createLucideIcon-DqajdqxS.js";import"./useLocalizedStringFormatter-C7hYA8xN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C0ozI8gk.js";import"./Hidden-Cn6dZTod.js";import"./useLabel-Bqb-L3h5.js";import"./useLabels-D2vaRbqn.js";import"./useButton-DDapGTCA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DISGYBiK.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
