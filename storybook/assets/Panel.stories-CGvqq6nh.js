import{r as p,j as o}from"./iframe-Du56DBQ9.js";import{P as s}from"./Panel-r9wPkwaR.js";import{B as i}from"./Button-COw5A1XQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DMDoFiwU.js";import"./useFocusRing-f_eVeiMs.js";import"./utils-CAvnU5Td.js";import"./index-CuQRkvKt.js";import"./index-QgZ7VLnC.js";import"./animation-CKmp2i_8.js";import"./clsx-Ciqy0D92.js";import"./Text-Cp0RoVFZ.js";import"./Text-BILk2R8l.js";import"./x-Cw-UH40G.js";import"./createLucideIcon-CmFcJ4zx.js";import"./useLocalizedStringFormatter-B6x4H80B.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bp_A6Sod.js";import"./Hidden-pui8tPLU.js";import"./useLabel-B6ITnJQY.js";import"./useLabels-BbAQfqg_.js";import"./useButton-BRUJuVat.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DfEAH0ac.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
