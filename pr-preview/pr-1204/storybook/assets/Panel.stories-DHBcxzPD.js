import{r as p,j as o}from"./iframe-Bp0IlJF2.js";import{P as s}from"./Panel-0TFtuVo2.js";import{B as i}from"./Button-CuWSXiv5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ClzZCqkV.js";import"./useFocusRing-DY1AMT3v.js";import"./utils-CjNbFGiN.js";import"./index-XmjshE1X.js";import"./index-DtgVGp9d.js";import"./animation-Dkj0nb8S.js";import"./clsx-Ciqy0D92.js";import"./Text-DQDnVDGB.js";import"./Text-BZtrmicZ.js";import"./x-C5nPMzLL.js";import"./createLucideIcon-DC4UrGzm.js";import"./useLocalizedStringFormatter-DkhY-lw-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-JPYQALf4.js";import"./Hidden-D7-h4wXt.js";import"./useLabel-DUfJ5yQb.js";import"./useLabels-BVCe-bH1.js";import"./useButton-BNdBcGOL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BVXE9jAl.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
