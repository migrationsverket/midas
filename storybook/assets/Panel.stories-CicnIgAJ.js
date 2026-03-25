import{r as p,j as o}from"./iframe-BGuMGxmc.js";import{P as s}from"./Panel-BDTEwT0D.js";import{B as i}from"./Button-ClNKt42i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7HU2cwdp.js";import"./useFocusRing-DJApir6W.js";import"./utils-Ca8G7ZGu.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./animation-DjTqUlHX.js";import"./clsx-Ciqy0D92.js";import"./Text-X11QTVVP.js";import"./Text-D1Wivcto.js";import"./x-DjU_SE9r.js";import"./createLucideIcon-YpCIaABn.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C3vJklaf.js";import"./Hidden-Blt3qGK-.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D0q9pbf-.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
