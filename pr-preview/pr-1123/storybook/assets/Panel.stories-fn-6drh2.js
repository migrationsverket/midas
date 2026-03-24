import{r as p,j as o}from"./iframe-BkVzc2jf.js";import{P as s}from"./Panel-D0UtGr-V.js";import{B as i}from"./Button-ZTyLTH5E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-LZdmvusm.js";import"./useFocusRing-Aiyx2UXL.js";import"./utils-BygJjxp_.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./animation-BuKlwr_J.js";import"./clsx-Ciqy0D92.js";import"./Text-B79zESTX.js";import"./Text-Cl9gTfqF.js";import"./x-BsyZ_dlH.js";import"./createLucideIcon-BjNI9TSY.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DC3ZjroM.js";import"./Hidden-R6jv-Zbn.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BWjyWmb6.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
