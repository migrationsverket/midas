import{r as p,j as o}from"./iframe-Bau-Vb-U.js";import{P as s}from"./Panel-DDaKJMm-.js";import{B as i}from"./Button-BCWlvYFn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B-7lzpTq.js";import"./useFocusRing-DBI5s8iT.js";import"./utils-DzohMAvG.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./animation-CaN3JYX9.js";import"./clsx-Ciqy0D92.js";import"./Text-CnUTPFtZ.js";import"./Text-CCFXQNDk.js";import"./x-Bn5zNUwZ.js";import"./createLucideIcon-Di4Tit0m.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-nyoR5AiN.js";import"./Hidden-ygOXplTE.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HpJjECW7.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
