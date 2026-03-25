import{r as p,j as o}from"./iframe-ArSWsRFy.js";import{P as s}from"./Panel-DsAVsZYG.js";import{B as i}from"./Button-B7NXJoV0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BLEc30eS.js";import"./useFocusRing-CuEBX_ny.js";import"./utils-Bk01FJOF.js";import"./index-h5O7gEHG.js";import"./index-CBhfX2fa.js";import"./animation-KcLlQzwX.js";import"./clsx-Ciqy0D92.js";import"./Text-DS3DZlwG.js";import"./Text-BQUF3iRq.js";import"./x-BmJ6_yih.js";import"./createLucideIcon-xPhfpX1g.js";import"./useLocalizedStringFormatter-BNDpmOum.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BEQHwt_x.js";import"./Hidden-DhQXB3Em.js";import"./useLabel-CGDLzIxe.js";import"./useLabels-P6wNBidM.js";import"./useButton-2SAmbr6R.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7lPtWpQ.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
