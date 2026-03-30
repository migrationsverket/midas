import{r as p,j as o}from"./iframe-BWPy1RBq.js";import{P as s}from"./Panel-BIK2uAN5.js";import{B as i}from"./Button-DrPZXGaG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D92tKPK_.js";import"./useFocusRing-RbbtUgdg.js";import"./utils-K3-6RYqB.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./animation-qiytIb7X.js";import"./clsx-Ciqy0D92.js";import"./Text-NU9ujCYW.js";import"./Text-Cia4oSWl.js";import"./x-28n2c5kv.js";import"./createLucideIcon-B4kCR5jG.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CpSzsQmu.js";import"./Hidden-Tw89Zkrb.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bglg35TW.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
