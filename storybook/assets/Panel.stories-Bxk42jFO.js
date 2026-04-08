import{r as p,j as o}from"./iframe-BgNoMb1-.js";import{P as s}from"./Panel-CVOIswVz.js";import{B as i}from"./Button-gs8bFcYH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ITUua2kv.js";import"./useFocusRing-CdEgrIPc.js";import"./utils-Cf4EtztR.js";import"./index-C0ZyhkQq.js";import"./index-BH1r8cCI.js";import"./animation-BW_nyKCM.js";import"./clsx-Ciqy0D92.js";import"./Text-CfXADzCS.js";import"./Text-DTrIh8Ah.js";import"./x-BxCihT4A.js";import"./createLucideIcon-DvRkoRzG.js";import"./useLocalizedStringFormatter-D0yQtf2N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DuzmOBcr.js";import"./Hidden-Oz1FCPRp.js";import"./useLabel-BFLzfKfJ.js";import"./useLabels-D5sc6rkA.js";import"./useButton-BqxH6UIc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CAQ7uxZn.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
