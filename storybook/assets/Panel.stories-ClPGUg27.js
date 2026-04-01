import{r as p,j as o}from"./iframe-BBdvX6q7.js";import{P as s}from"./Panel-Rk4WW7C5.js";import{B as i}from"./Button-DCS9i38V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DuJYRQSo.js";import"./useFocusRing-CiIiFeie.js";import"./utils-BhM9cLZz.js";import"./index-C0SO2SJv.js";import"./index-Dr2k3dKm.js";import"./animation-C0vu237c.js";import"./clsx-Ciqy0D92.js";import"./Text-DZB5jszh.js";import"./Text-DFmdAipG.js";import"./x-KAA9DnbB.js";import"./createLucideIcon-Bf-KaMYu.js";import"./useLocalizedStringFormatter-J63fVK0g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dzf67HgD.js";import"./Hidden-BOrCZM9C.js";import"./useLabel-yXobHl3x.js";import"./useLabels-CYBypbHC.js";import"./useButton-CExlMDMj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUp-onp8.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
