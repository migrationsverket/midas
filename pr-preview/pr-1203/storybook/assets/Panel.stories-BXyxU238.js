import{r as p,j as o}from"./iframe-AjHIFKYL.js";import{P as s}from"./Panel-C37eb3yB.js";import{B as i}from"./Button-BEq-_IjI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DTh410_S.js";import"./useFocusRing-CvHv-Osy.js";import"./utils-BQ53D7f7.js";import"./index-Cfk7mVij.js";import"./index-BxE46KD8.js";import"./animation-DCihiTe5.js";import"./clsx-Ciqy0D92.js";import"./Text-pxITg1r8.js";import"./Text-CCR6G686.js";import"./x-DuRIyyoz.js";import"./createLucideIcon-D_tC-MWH.js";import"./useLocalizedStringFormatter-Can2UqR3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C1DU2kQ0.js";import"./Hidden-Ciub7nFQ.js";import"./useLabel-BXU14ybb.js";import"./useLabels-D5qCWeBL.js";import"./useButton-C5zGgHMm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-iv4jmUvN.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
