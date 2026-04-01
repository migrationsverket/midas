import{r as p,j as o}from"./iframe-BS-EqM9B.js";import{P as s}from"./Panel-DK066e7P.js";import{B as i}from"./Button-C36Rbpm6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B-FXHrTP.js";import"./useFocusRing-f4Gv2bLP.js";import"./utils-B0k4XHwf.js";import"./index-Ba_eFeFP.js";import"./index-CSZYNzON.js";import"./animation-BzIvLcs4.js";import"./clsx-Ciqy0D92.js";import"./Text-BmYuY3ql.js";import"./Text-WfzPelJM.js";import"./x-9X9TwUAj.js";import"./createLucideIcon-tz6Ei2qt.js";import"./useLocalizedStringFormatter-NiRgEpkW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Fd5Hg-6t.js";import"./Hidden-pMKT4yIR.js";import"./useLabel-CFg80amx.js";import"./useLabels-CtbB0U7H.js";import"./useButton-nlJA0m2t.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BPzz7Fut.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
