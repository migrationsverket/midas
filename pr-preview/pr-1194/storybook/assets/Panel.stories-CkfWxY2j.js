import{r as p,j as o}from"./iframe-DCTfXxhU.js";import{P as s}from"./Panel-wj2wmi10.js";import{B as i}from"./Button-9AP9GDtE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-2cB3sfef.js";import"./useFocusRing-DkB_y7Fd.js";import"./utils-nW_xli8K.js";import"./index-mul5IfuL.js";import"./index-oL1NoEtf.js";import"./animation-XKPbh1bn.js";import"./clsx-Ciqy0D92.js";import"./Text-Caoun6Yq.js";import"./Text-5UTT66SL.js";import"./x-DKEdZNvx.js";import"./createLucideIcon-2FpY4XeI.js";import"./useLocalizedStringFormatter-D6vCsR43.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CFGQLTfC.js";import"./Hidden-Dz79xEs9.js";import"./useLabel-5AB1LZK2.js";import"./useLabels-DDnu_dmS.js";import"./useButton-Dit7Lb_r.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BmJc66Gc.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
