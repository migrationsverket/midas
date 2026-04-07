import{r as p,j as o}from"./iframe-dJ9N4Hwo.js";import{P as s}from"./Panel-BOut7jys.js";import{B as i}from"./Button-Cxxx7spL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BVn3AEak.js";import"./useFocusRing-DNc8UdyY.js";import"./utils-D-XK7wRt.js";import"./index--Ro6Hv8b.js";import"./index-CtGu0Onf.js";import"./animation-CKCu8Pqt.js";import"./clsx-Ciqy0D92.js";import"./Text-CrKOi2mC.js";import"./Text-BxsbjcMl.js";import"./x-D6CWGX1J.js";import"./createLucideIcon-B0IDBM20.js";import"./useLocalizedStringFormatter-Br0ol2So.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BbXYBFSI.js";import"./Hidden-DOBdyTg3.js";import"./useLabel-Bu1777AN.js";import"./useLabels-CNniH7Tl.js";import"./useButton-3Dpu7dn4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dxq67aJu.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
