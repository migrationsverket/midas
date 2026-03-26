import{r as p,j as o}from"./iframe-pPxe0wf0.js";import{P as s}from"./Panel-DOgSIjy2.js";import{B as i}from"./Button-KC2D_O3S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DALrvKda.js";import"./useFocusRing-Brybz-Mb.js";import"./utils-B9dfa99f.js";import"./index-DfEuJvHS.js";import"./index-pyYMLEYk.js";import"./animation-Dh-JrWpK.js";import"./clsx-Ciqy0D92.js";import"./Text-DnWwzkAf.js";import"./Text-CfRTLfl7.js";import"./x-Ck7RLK17.js";import"./createLucideIcon-DWvekaMf.js";import"./useLocalizedStringFormatter-BLFE94iF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C0xfSFPn.js";import"./Hidden-BcuSkgl5.js";import"./useLabel-CL1tYCOJ.js";import"./useLabels-CMOJ4jYS.js";import"./useButton-BKxgzcHi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ByZgoMRK.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
