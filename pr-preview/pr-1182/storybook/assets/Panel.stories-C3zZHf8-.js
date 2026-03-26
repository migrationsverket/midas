import{r as p,j as o}from"./iframe-BfMhQjGU.js";import{P as s}from"./Panel-DqdReLOe.js";import{B as i}from"./Button-blC6kfyz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DswV1VSh.js";import"./useFocusRing-C5Yjq8eB.js";import"./utils-DaDNkmjx.js";import"./index-CANV50_Z.js";import"./index-DcgLR03X.js";import"./animation-CMPtAkPr.js";import"./clsx-Ciqy0D92.js";import"./Text--boW3P5m.js";import"./Text-9jZvM0HP.js";import"./x-CGIghyVu.js";import"./createLucideIcon-DSNzZSu6.js";import"./useLocalizedStringFormatter-7a6_xXLI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-9bk196xZ.js";import"./Hidden-DhDQuc5B.js";import"./useLabel-DV2YbXB7.js";import"./useLabels-DmE0eIr6.js";import"./useButton-CVkS8nd6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CrEXwPZJ.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
