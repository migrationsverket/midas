import{r as p,j as o}from"./iframe-CmC6_uFn.js";import{P as s}from"./Panel-BKvCwndz.js";import{B as i}from"./Button-WgLWfZml.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-x3Q8v9NC.js";import"./useFocusRing-CnXjVSj9.js";import"./utils-DpIGtToL.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./animation-Ccbo1JNi.js";import"./clsx-Ciqy0D92.js";import"./Text-ChJGU_Xm.js";import"./Text-bLb0hYqG.js";import"./x-BfnY6ZJn.js";import"./createLucideIcon-DG07A9xd.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BfXSwHW0.js";import"./Hidden-Ci7T1bEi.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DhqoAnIr.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
