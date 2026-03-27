import{r as p,j as o}from"./iframe-BUTiSP7z.js";import{P as s}from"./Panel-CY42eKcg.js";import{B as i}from"./Button-Ktwig2Cy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BxwH6ylP.js";import"./useFocusRing-Ba-KD3wP.js";import"./utils-BgvO5RRu.js";import"./index-xHN4e2Es.js";import"./index-DtSReIsm.js";import"./animation-D4tSn6Fc.js";import"./clsx-Ciqy0D92.js";import"./Text-LYM_b1_z.js";import"./Text-D5N8Dzak.js";import"./x-BTgbWRg1.js";import"./createLucideIcon-hh9ZE-Di.js";import"./useLocalizedStringFormatter-D6S3a2W6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bo24jbF_.js";import"./Hidden-ByRZ-jrH.js";import"./useLabel-DayWlGa1.js";import"./useLabels-BFR96MD7.js";import"./useButton-DroPnLuM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-xIEwbCvt.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
