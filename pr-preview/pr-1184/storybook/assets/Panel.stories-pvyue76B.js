import{r as p,j as o}from"./iframe-2N4-NX-9.js";import{P as s}from"./Panel-DYJms5ZO.js";import{B as i}from"./Button-BhHUqRPQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJB9gvxC.js";import"./useFocusRing-CqNKm5um.js";import"./utils-BDyzcRVF.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./animation-Fa_xDcNS.js";import"./clsx-Ciqy0D92.js";import"./Text-C8oRKnIX.js";import"./Text-CG1bHrxb.js";import"./x-Ceu0gGLD.js";import"./createLucideIcon-BP_ZdL8b.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BdOK34vS.js";import"./Hidden-ByQp7cFw.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BgOvzTZH.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
