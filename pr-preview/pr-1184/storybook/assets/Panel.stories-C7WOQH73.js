import{r as p,j as o}from"./iframe-76Zbcpfm.js";import{P as s}from"./Panel-gz1S8mTt.js";import{B as i}from"./Button-DDxQAl6w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DdSN72zB.js";import"./useFocusRing--jUHa30l.js";import"./utils-DKhtQhER.js";import"./index-CYYDks4G.js";import"./index-Bikl_74K.js";import"./animation-Cvg5n42G.js";import"./clsx-Ciqy0D92.js";import"./Text-BvHKVa0m.js";import"./Text-BtsDHilU.js";import"./x-Cpfzd3NA.js";import"./createLucideIcon-C-Fi2tn8.js";import"./useLocalizedStringFormatter-CyEIBYX2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CGIWV9qi.js";import"./Hidden-CtdbjR1M.js";import"./useLabel-Dyg0KZIl.js";import"./useLabels-DGXzYi66.js";import"./useButton-FpSsaIPg.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-r55FRtGJ.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
