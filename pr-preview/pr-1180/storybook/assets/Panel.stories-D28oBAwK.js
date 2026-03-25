import{r as p,j as o}from"./iframe-CH21sBFo.js";import{P as s}from"./Panel-C7gryZKd.js";import{B as i}from"./Button-DAqWGZgG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BSIuYOQP.js";import"./useFocusRing-DLE_Hwk5.js";import"./utils-BTsYysht.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./animation-DMXONQ0x.js";import"./clsx-Ciqy0D92.js";import"./Text-irla2VTm.js";import"./Text-BvEBpsjb.js";import"./x-BvM5og85.js";import"./createLucideIcon-BCbaEzrv.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Cyld21y_.js";import"./Hidden-BZUBqXYz.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbJs2R-u.js";const k={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const q=["Primary"];export{t as Primary,q as __namedExportsOrder,k as default};
