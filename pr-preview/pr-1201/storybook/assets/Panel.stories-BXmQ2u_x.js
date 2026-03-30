import{r as p,j as o}from"./iframe-KvMX5Axs.js";import{P as s}from"./Panel-DbFEGnLs.js";import{B as i}from"./Button-C1NVLp98.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CT69c7wx.js";import"./useFocusRing-vgvsKIAr.js";import"./utils-DQB0ixZT.js";import"./index-DTZE8lUv.js";import"./index-Y9HTW2-l.js";import"./animation-BI7Uh8GK.js";import"./clsx-Ciqy0D92.js";import"./Text-xieIOj6u.js";import"./Text-BvSzNFUh.js";import"./x-BXrTPOwi.js";import"./createLucideIcon-CKpEkAd-.js";import"./useLocalizedStringFormatter-NesSIbJ3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bo3Qklea.js";import"./Hidden-DgM1V2hb.js";import"./useLabel-0b57TDxq.js";import"./useLabels-CR00I-nd.js";import"./useButton-DgCOwdob.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BX39qD-v.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
