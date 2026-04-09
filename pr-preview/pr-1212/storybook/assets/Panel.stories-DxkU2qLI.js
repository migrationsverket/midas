import{r as p,j as o}from"./iframe-CKFMuO9m.js";import{P as s}from"./Panel-DqDkzJAF.js";import{B as i}from"./Button-DCc3RCFi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BexPn5vQ.js";import"./useFocusRing-yfimCeup.js";import"./utils-D5GKgKLw.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./animation-_EkHvhyP.js";import"./clsx-Ciqy0D92.js";import"./Text-CA1blZ7p.js";import"./Text-D6Srqbyc.js";import"./x-BvWk0FrP.js";import"./createLucideIcon-C2PX8F3A.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-r5FEcXKA.js";import"./Hidden-Dy9FDq_i.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DCQS44v1.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
