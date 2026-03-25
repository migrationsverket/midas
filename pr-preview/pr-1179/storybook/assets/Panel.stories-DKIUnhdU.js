import{r as p,j as o}from"./iframe-zC7rO4bQ.js";import{P as s}from"./Panel-DrepzoPL.js";import{B as i}from"./Button-w7ryzoNy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B6sghpTG.js";import"./useFocusRing-BstF4Rhc.js";import"./utils-DJDHHgRa.js";import"./index-Dv34dGV6.js";import"./index-2cydjPlj.js";import"./animation-BUEZL38U.js";import"./clsx-Ciqy0D92.js";import"./Text-Dq6fJTxq.js";import"./Text-B2ypy93g.js";import"./x-Bhv1l1lN.js";import"./createLucideIcon-BRqO66r7.js";import"./useLocalizedStringFormatter-CWhgLXAn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C21x7wzp.js";import"./Hidden-iMadBBvo.js";import"./useLabel-1c7fDk1R.js";import"./useLabels-DXFco5wv.js";import"./useButton-DgxqVrin.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-satwz06w.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
