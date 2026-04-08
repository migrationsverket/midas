import{r as p,j as o}from"./iframe-D1quRbgW.js";import{P as s}from"./Panel-Cy2zYk_K.js";import{B as i}from"./Button-BfQ6mpwy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DeZ6Yvot.js";import"./useFocusRing-9kJRwLWf.js";import"./utils-5jbBDEho.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./animation-C7P9G73n.js";import"./clsx-Ciqy0D92.js";import"./Text-D_OKwN2L.js";import"./Text-3Qvoq1in.js";import"./x-C6gJ_9jG.js";import"./createLucideIcon-xiP51FEZ.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BhbL5JV7.js";import"./Hidden-CE_f7fkS.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BTPkzFD2.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
