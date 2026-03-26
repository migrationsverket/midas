import{r as p,j as o}from"./iframe-BhCsjan0.js";import{P as s}from"./Panel-DOKHCqWM.js";import{B as i}from"./Button-1iG7gZrx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CoCU8B0S.js";import"./useFocusRing-Ws2f8SLu.js";import"./utils-CtrZbhzi.js";import"./index-DDDUdMNC.js";import"./index-D_WqKMc5.js";import"./animation-C7iI9wL4.js";import"./clsx-Ciqy0D92.js";import"./Text-CFjsaxmQ.js";import"./Text-DhUSBMS-.js";import"./x-DuKAZAyJ.js";import"./createLucideIcon-Bp2jaLbZ.js";import"./useLocalizedStringFormatter-K5Z3y1WJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C2NaQWvO.js";import"./Hidden-D6UeEvFM.js";import"./useLabel-B7TVwUpE.js";import"./useLabels-BLj4vdHd.js";import"./useButton-By7DbLK9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CfUMAOQ3.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
