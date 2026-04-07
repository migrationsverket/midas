import{r as p,j as o}from"./iframe-QwZUgaLO.js";import{P as s}from"./Panel-Xd8f1x5m.js";import{B as i}from"./Button-CEqP3wI_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGCNkOh1.js";import"./useFocusRing-DCV7Bvm3.js";import"./utils-C5PAaS6l.js";import"./index-CU2b6dbl.js";import"./index-DwVC30Wi.js";import"./animation-C89c8p4C.js";import"./clsx-Ciqy0D92.js";import"./Text-XaIsUgQ9.js";import"./Text-CjsrR6_S.js";import"./x-CLIz2YWd.js";import"./createLucideIcon-BN5DVyg5.js";import"./useLocalizedStringFormatter-C0ixRk9u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D9S27FhL.js";import"./Hidden-qsgafZIY.js";import"./useLabel-JXRtA5SB.js";import"./useLabels-BoIdpiTR.js";import"./useButton-CvKomkMU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7afogpp.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
