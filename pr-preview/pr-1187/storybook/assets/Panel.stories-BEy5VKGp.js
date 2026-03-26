import{r as p,j as o}from"./iframe-DRLQwCNB.js";import{P as s}from"./Panel-BVo2Vybu.js";import{B as i}from"./Button-BfaOHdzG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-dveh82K_.js";import"./useFocusRing-lDwfAEVQ.js";import"./utils-DwlK8lYm.js";import"./index-DH8oBJLm.js";import"./index-BHtNZ3Yk.js";import"./animation-B4F5zzmy.js";import"./clsx-Ciqy0D92.js";import"./Text-ynU63HEc.js";import"./Text-DnHWSscL.js";import"./x-DIunwg3h.js";import"./createLucideIcon-BcFDGO1n.js";import"./useLocalizedStringFormatter-DUEXk9yR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B3A8qvAG.js";import"./Hidden-DAi6qXjx.js";import"./useLabel-I8iavOjU.js";import"./useLabels-Bv060iu2.js";import"./useButton-BsM8VkEl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D-pnepPQ.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
