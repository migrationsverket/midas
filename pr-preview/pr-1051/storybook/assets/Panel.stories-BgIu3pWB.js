import{r as p,j as o}from"./iframe-B8dODSM7.js";import{P as s}from"./Panel-DidYJdHN.js";import{B as i}from"./Button-BGOYT3gN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DhH3lMF6.js";import"./useFocusRing-DKQkST-P.js";import"./utils-DKhPm4Nt.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./animation-Ci6NBJrq.js";import"./clsx-Ciqy0D92.js";import"./Text-DyDE_nMf.js";import"./Text-CIOHcKum.js";import"./x-DX19Ur0q.js";import"./createLucideIcon-7ECh1RW_.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CEvb2_wi.js";import"./Hidden-DILkQdFQ.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Csntf2Wj.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
