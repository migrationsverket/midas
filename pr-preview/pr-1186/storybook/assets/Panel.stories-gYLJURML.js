import{r as p,j as o}from"./iframe-Cd0-ZcsP.js";import{P as s}from"./Panel-CuffRY57.js";import{B as i}from"./Button-pofFgtnZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-d4JhcqA_.js";import"./useFocusRing-Dfp5Gp4o.js";import"./utils-DhqpUTpA.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./animation-CqfiVXdi.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw2Ugvgy.js";import"./Text-DyAmcS7z.js";import"./x-DC2j07Yv.js";import"./createLucideIcon-BVwfSxcn.js";import"./useLocalizedStringFormatter-DOvNyG8w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-7ELWuSQK.js";import"./Hidden-CPmKijlW.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUU_0XCx.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
