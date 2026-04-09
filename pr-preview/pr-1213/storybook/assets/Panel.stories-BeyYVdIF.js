import{r as p,j as o}from"./iframe-ClXeNp7Y.js";import{P as s}from"./Panel-DprULXSh.js";import{B as i}from"./Button-Ck36yxFc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ByDkBY5z.js";import"./useFocusRing-POYc96FQ.js";import"./utils-Om4eb18p.js";import"./index-B5A_pknU.js";import"./index-DKpewxE4.js";import"./animation-B4YZBIYY.js";import"./clsx-Ciqy0D92.js";import"./Text-Cmueb6gv.js";import"./Text-Cbz9Nooi.js";import"./x-CsrInTiu.js";import"./createLucideIcon-BfIBNwb-.js";import"./useLocalizedStringFormatter-B6IkZiLP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CgOPhMO-.js";import"./Hidden-CTszc8DE.js";import"./useLabel-LLB3lTIC.js";import"./useLabels-0ROcCaA0.js";import"./useButton-CU4eTwNH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Zm76wuSE.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
