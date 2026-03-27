import{r as p,j as o}from"./iframe-XIh9uYhW.js";import{P as s}from"./Panel-vWjoM6Im.js";import{B as i}from"./Button-D1gmeqQE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CqcNfIKv.js";import"./useFocusRing-BdFa1UIk.js";import"./utils-QqHpIW-4.js";import"./index-BudLXS22.js";import"./index-BA9v5sbd.js";import"./animation-Dqh80AvR.js";import"./clsx-Ciqy0D92.js";import"./Text-FP4KMc3f.js";import"./Text-DrkaIHH8.js";import"./x-Drs9DY4g.js";import"./createLucideIcon-C-gCmxMp.js";import"./useLocalizedStringFormatter-BC9Xw6Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BsucxUz-.js";import"./Hidden-l3oUe_Z9.js";import"./useLabel-bPnROONS.js";import"./useLabels-BwsWDKVI.js";import"./useButton-DN2W_ujz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C1E6EF0U.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
