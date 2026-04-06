import{r as p,j as o}from"./iframe-iqG9Nh4p.js";import{P as s}from"./Panel-5XhBsFm9.js";import{B as i}from"./Button-DtcyQC3H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-_AGiuRBn.js";import"./useFocusRing-DlPMedN0.js";import"./utils-CoA-xVnF.js";import"./index-CRxXIn2u.js";import"./index-B42Zj5NC.js";import"./animation-DMO9jmw5.js";import"./clsx-Ciqy0D92.js";import"./Text-CSjoqRHi.js";import"./Text-CGCkUK8m.js";import"./x-ItA_xlKi.js";import"./createLucideIcon-Boi8XEVW.js";import"./useLocalizedStringFormatter-QZ0YYeXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DY22xJQl.js";import"./Hidden-CGqHEiYj.js";import"./useLabel-CaKtnxKo.js";import"./useLabels-UUcXsAwx.js";import"./useButton-Brn-yYNf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DzRCdULp.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
