import{r as p,j as o}from"./iframe-hABApRlT.js";import{P as s}from"./Panel-DDJb8m1V.js";import{B as i}from"./Button-D27stedr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-vYw9-Cid.js";import"./useFocusRing-BP25i5uK.js";import"./utils-BkABga95.js";import"./index-77qwmgqY.js";import"./index-BVfSwpPB.js";import"./animation-BQVMG8z-.js";import"./clsx-Ciqy0D92.js";import"./Text-DztaIr_D.js";import"./Text-Cb1qObZS.js";import"./x-viUQDrjv.js";import"./createLucideIcon-jn3NctNW.js";import"./useLocalizedStringFormatter-Cc9pC_do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BzGvPTBW.js";import"./Hidden-B-K0lNZo.js";import"./useLabel-qHqMeu2r.js";import"./useLabels-BIKxEJiN.js";import"./useButton-BuyQblWp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DvfbpkLp.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
