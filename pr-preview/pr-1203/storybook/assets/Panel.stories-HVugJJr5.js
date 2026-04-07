import{r as p,j as o}from"./iframe-BObKWO8P.js";import{P as s}from"./Panel-B1UUZvHa.js";import{B as i}from"./Button-CF3n8BCq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-2AKkTK1v.js";import"./useFocusRing-CEJP2sKk.js";import"./utils-L1ZXEAM0.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./animation-DfesOHlA.js";import"./clsx-Ciqy0D92.js";import"./Text-BL0-OeDh.js";import"./Text-B0SIJ0ar.js";import"./x-Ci83I339.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bj1Gx374.js";import"./Hidden-pBI9L9bQ.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2-WAH_L.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
