import{r as p,j as o}from"./iframe-2y2Syr64.js";import{P as s}from"./Panel-BxRdoYnW.js";import{B as i}from"./Button-D69d27MT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CNntbmuw.js";import"./useFocusRing-g5rhpMio.js";import"./utils-QeTQioJq.js";import"./index-CzLxwmqr.js";import"./index-DXQBrJfU.js";import"./animation-ChgNtnmZ.js";import"./clsx-Ciqy0D92.js";import"./Text-BstWv5qu.js";import"./Text-CjKUI5Vp.js";import"./x-CmHq6MLN.js";import"./createLucideIcon-CukoxtoU.js";import"./useLocalizedStringFormatter-C8Cfl7Hj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-9fFVOiJo.js";import"./Hidden-B__XOjR0.js";import"./useLabel-DEokNCv9.js";import"./useLabels-CDVQ8Dai.js";import"./useButton-BGrK01YR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwQymDfp.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
