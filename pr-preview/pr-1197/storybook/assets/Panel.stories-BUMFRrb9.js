import{r as p,j as o}from"./iframe-BwW6Fqvd.js";import{P as s}from"./Panel-B4tVRI7l.js";import{B as i}from"./Button-D29dOr6P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGQCfKNy.js";import"./useFocusRing-B8ItjY_Y.js";import"./utils-Bghr1fcB.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./animation-BQkHoCqk.js";import"./clsx-Ciqy0D92.js";import"./Text-D0nO-HBI.js";import"./Text-CYDu8Dn_.js";import"./x-BceaA5bl.js";import"./createLucideIcon-baXbygoM.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-zWxdU5Zd.js";import"./Hidden-DOVwj0BP.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6rJm-kLH.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
