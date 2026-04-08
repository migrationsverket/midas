import{r as p,j as o}from"./iframe-Br4UFWDA.js";import{P as s}from"./Panel-D2jkSfgp.js";import{B as i}from"./Button-B62uNfEE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-t0OgLn8n.js";import"./useFocusRing-DmF-1uRF.js";import"./utils-Bfs2iwu7.js";import"./index-B5OjJHm8.js";import"./index-BLvyQ4Zy.js";import"./animation-UMCMv2aH.js";import"./clsx-Ciqy0D92.js";import"./Text-C3N7Tmxi.js";import"./Text-DBKCtpuc.js";import"./x-BCbyNW7r.js";import"./createLucideIcon-CSxAjQ3c.js";import"./useLocalizedStringFormatter-B9cG3ozx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DiwUVhQg.js";import"./Hidden-B2UqZyG9.js";import"./useLabel-PuL03Jmv.js";import"./useLabels-CD31_qda.js";import"./useButton-BuJxASXi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BnWQuQpu.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
