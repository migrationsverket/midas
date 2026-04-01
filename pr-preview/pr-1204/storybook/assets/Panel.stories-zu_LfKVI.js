import{r as p,j as o}from"./iframe-TDsHiw9c.js";import{P as s}from"./Panel-CqvdXhj3.js";import{B as i}from"./Button-BFdMqc_h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BONMuXu4.js";import"./useFocusRing-D-BQBv-v.js";import"./utils-DFK3ftG0.js";import"./index-CWZOiNf1.js";import"./index-Cblya1pl.js";import"./animation-DaCaqu8C.js";import"./clsx-Ciqy0D92.js";import"./Text-BTMF7VME.js";import"./Text-BDcQTCXw.js";import"./x-DlwJGxMz.js";import"./createLucideIcon-Diz4XGXj.js";import"./useLocalizedStringFormatter-DxUswB7b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BZ0QUIXr.js";import"./Hidden-aVRRAvvd.js";import"./useLabel-De4TtVrY.js";import"./useLabels-z_MUf0yQ.js";import"./useButton-Be-gBZL5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CpvkWfyr.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
