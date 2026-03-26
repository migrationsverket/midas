import{r as p,j as o}from"./iframe-BgSB-ePP.js";import{P as s}from"./Panel-kiDrDft4.js";import{B as i}from"./Button-BXdJw4HN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DJPtRTJ6.js";import"./useFocusRing-CEd5VvO1.js";import"./utils-C5FyKCk8.js";import"./index-ByecJ60K.js";import"./index-DoB2i7js.js";import"./animation-B-urWx1P.js";import"./clsx-Ciqy0D92.js";import"./Text-Bp3gM7sB.js";import"./Text-BdZEyiog.js";import"./x-CEx6wB1z.js";import"./createLucideIcon-B3pidq9m.js";import"./useLocalizedStringFormatter-CqnGehUR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Lo8sEzbF.js";import"./Hidden-CuqOQBO_.js";import"./useLabel-BzarhHDS.js";import"./useLabels-DD4u-YLs.js";import"./useButton-DS4hbBUr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bm0pqSKV.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
