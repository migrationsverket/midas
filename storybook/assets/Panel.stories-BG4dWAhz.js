import{r as p,j as o}from"./iframe-C_2Po1qD.js";import{P as s}from"./Panel-Cg5e1WKZ.js";import{B as i}from"./Button-BV8yLb9D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DD8Y7tdb.js";import"./useFocusRing-BUXHOBJT.js";import"./utils-BoKSmqfj.js";import"./index-D4Zi599j.js";import"./index-CUY9Xica.js";import"./animation-C6xlW7eQ.js";import"./clsx-Ciqy0D92.js";import"./Text-DCF_RRxK.js";import"./Text-CSVa2wh5.js";import"./x-BojtU4Mi.js";import"./createLucideIcon-Cz_UZZWy.js";import"./useLocalizedStringFormatter-DvhmujFD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B4BJcFaK.js";import"./Hidden-JqaEh-jr.js";import"./useLabel-ZZAqWazw.js";import"./useLabels-DTlsntHT.js";import"./useButton-C9tFcCTE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BezuJMNy.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
