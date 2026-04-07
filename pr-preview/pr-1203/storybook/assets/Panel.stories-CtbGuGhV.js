import{r as p,j as o}from"./iframe-CFJCKKvO.js";import{P as s}from"./Panel-RTO6SX4K.js";import{B as i}from"./Button-xnJUq7xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BfOHS3qu.js";import"./useFocusRing-BNbcqK1m.js";import"./utils-GebBTRfX.js";import"./index-D3I_2kbv.js";import"./index-DmhLxtfg.js";import"./animation-CemwV6aI.js";import"./clsx-Ciqy0D92.js";import"./Text-Ch1K88hl.js";import"./Text-3-m5yiWA.js";import"./x-C7yXQpYD.js";import"./createLucideIcon-DogT9pAN.js";import"./useLocalizedStringFormatter-BHn-ZNo3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BT7UBoWJ.js";import"./Hidden-DcC3hzXb.js";import"./useLabel-Byk-C4h5.js";import"./useLabels-BTsH0KFj.js";import"./useButton-DAHkBXtl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Y2lOv2IN.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
