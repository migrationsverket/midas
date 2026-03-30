import{r as p,j as o}from"./iframe-BY9vh6z6.js";import{P as s}from"./Panel-Ea56PsX9.js";import{B as i}from"./Button-C6EXF9Um.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-tRNWjYkK.js";import"./useFocusRing-C58Wldhw.js";import"./utils-CvO9wRJK.js";import"./index-BCEmrA-k.js";import"./index-BY7PPuin.js";import"./animation-GQeaOULT.js";import"./clsx-Ciqy0D92.js";import"./Text-D2NltcsY.js";import"./Text-CS2W2lPB.js";import"./x-L5wRjwNt.js";import"./createLucideIcon-BXNm475a.js";import"./useLocalizedStringFormatter-CAo6NRgz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BRroCyFc.js";import"./Hidden-CtZVxLKv.js";import"./useLabel-BGiQ4ILo.js";import"./useLabels-BEKF_Ui1.js";import"./useButton-C5riGvhj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_LmADCN.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
