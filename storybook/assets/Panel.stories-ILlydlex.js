import{r as p,j as o}from"./iframe-C0gItKGI.js";import{P as s}from"./Panel-CfKvC3wi.js";import{B as i}from"./Button-ByBsZf-O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBjdJp7n.js";import"./useFocusRing-D6zHA-j4.js";import"./utils-C4BmiKeT.js";import"./index-JTUL9Zza.js";import"./index-DYJlb7vK.js";import"./animation-BDhOf0yB.js";import"./clsx-Ciqy0D92.js";import"./Text-COsMTm1B.js";import"./Text-CP3oPRRG.js";import"./x-BC7OWJ1B.js";import"./createLucideIcon-jAmYwIsU.js";import"./useLocalizedStringFormatter-CX1JQrfE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-o0QsNuSA.js";import"./Hidden-CxiPA8K1.js";import"./useLabel-DSorbXz4.js";import"./useLabels-B6zfi_e6.js";import"./useButton-Dx1KDGRQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B6iVGiF3.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
