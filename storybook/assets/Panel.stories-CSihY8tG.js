import{r as p,j as o}from"./iframe-B6v7SNgB.js";import{P as s}from"./Panel-JU3pBJ0I.js";import{B as i}from"./Button-DFw2NzPi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BWAzPrBc.js";import"./useFocusRing-BmrkPpfG.js";import"./utils-DvQnzAUx.js";import"./index-CKeRqnm_.js";import"./index-D5Cv7XFv.js";import"./animation-DoWW0umo.js";import"./clsx-Ciqy0D92.js";import"./Text-IRrkNmmn.js";import"./Text-BIYy6_GG.js";import"./x-DEpZC0gz.js";import"./createLucideIcon-DJSw6RDm.js";import"./useLocalizedStringFormatter-d_TsE8p1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-R8L0fisR.js";import"./Hidden-DVRxRWYq.js";import"./useLabel-CZ56tTPg.js";import"./useLabels-BrspC8rV.js";import"./useButton-k8VWywdi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-s-TUYsoQ.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
