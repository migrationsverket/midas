import{r as p,j as o}from"./iframe-BbWt9Hzs.js";import{P as s}from"./Panel-DkQqoJw8.js";import{B as i}from"./Button-C0W8ghEp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DkbXJDJp.js";import"./useFocusRing-B9bvRRmX.js";import"./utils-KZAH4xlx.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./animation-DmyT2C_U.js";import"./clsx-Ciqy0D92.js";import"./Text-DLXHrpA7.js";import"./Text-DSe1JSn0.js";import"./x-B6r1o7zQ.js";import"./createLucideIcon-BJCyfpuO.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-EJIqjvoq.js";import"./Hidden-BJHG9IZy.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-zJEwCiu7.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
