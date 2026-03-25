import{r as p,j as o}from"./iframe-CJiLO33n.js";import{P as s}from"./Panel-DvFb94gY.js";import{B as i}from"./Button-u-2V4ARC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-sn3ZKmd0.js";import"./useFocusRing-BwtfOiN2.js";import"./utils-BwIbfVvT.js";import"./index-DCLVDLzL.js";import"./index-CWQvnVll.js";import"./animation-Dhf1ggeJ.js";import"./clsx-Ciqy0D92.js";import"./Text-B20Rga9k.js";import"./Text-Cu_x9kkp.js";import"./x-CEEDctr_.js";import"./createLucideIcon-DApbN3tp.js";import"./useLocalizedStringFormatter-CDDiG4UU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BPl7GMUn.js";import"./Hidden-GX2Gt-Bh.js";import"./useLabels-CLDCP1oZ.js";import"./useButton-CDfLXD9h.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DMMbRnDT.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
