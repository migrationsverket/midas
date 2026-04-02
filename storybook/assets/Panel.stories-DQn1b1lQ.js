import{r as p,j as o}from"./iframe-B1eD605p.js";import{P as s}from"./Panel-Djz1Y6KV.js";import{B as i}from"./Button-vXlcn_Zz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DOfAUcES.js";import"./useFocusRing-D_OiBDkF.js";import"./utils-BOUcnJoC.js";import"./index-BWkRMe8I.js";import"./index-TufsVr0_.js";import"./animation-IbfgZhv9.js";import"./clsx-Ciqy0D92.js";import"./Text-EI0dskfY.js";import"./Text-DAxM1VuH.js";import"./x-hYuZlWGy.js";import"./createLucideIcon-B1NmALCH.js";import"./useLocalizedStringFormatter-CLR4R1lI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DMefbg_Z.js";import"./Hidden-B3lfQGCO.js";import"./useLabel-D7VH59ae.js";import"./useLabels-BD-zpGYP.js";import"./useButton-B9teiuVu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_M3vS6z.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
