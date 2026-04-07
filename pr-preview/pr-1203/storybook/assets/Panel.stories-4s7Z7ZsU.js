import{r as p,j as o}from"./iframe-Bn-EzP7D.js";import{P as s}from"./Panel-OdL9nrwX.js";import{B as i}from"./Button-CQePxhIL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DvYkz0eX.js";import"./useFocusRing-vAuqzLMr.js";import"./utils-CQaUuJEL.js";import"./index-C-alUKfN.js";import"./index-B6pc0358.js";import"./animation-Z5vcQ66U.js";import"./clsx-Ciqy0D92.js";import"./Text-6vmkm8mz.js";import"./Text-Bqg57V95.js";import"./x-CdpnhCRh.js";import"./createLucideIcon-DeptTAqN.js";import"./useLocalizedStringFormatter-Cu0XKz1n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Cc7PB3J4.js";import"./Hidden-CqBpBgFh.js";import"./useLabel-Bl9zNTe3.js";import"./useLabels-DUs2w_Mz.js";import"./useButton-9sNlXb4L.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKLV3oRP.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
