import{r as p,j as o}from"./iframe-DagPb3DG.js";import{P as s}from"./Panel-CRgn4Tg6.js";import{B as i}from"./Button-DeUqMdFb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CD6VDT_E.js";import"./useFocusRing-DV81koGP.js";import"./utils-DEIIZrT8.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./animation-DjzPeBlF.js";import"./clsx-Ciqy0D92.js";import"./Text-DqORZFkZ.js";import"./Text-DrUxMYO_.js";import"./x-DDrUqxbS.js";import"./createLucideIcon-KVoeMAdo.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Ckt0c6HW.js";import"./Hidden-BaZDL4oi.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BiE9yBGm.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
