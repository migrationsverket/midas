import{r as p,j as o}from"./iframe-CmYiK-n6.js";import{P as s}from"./Panel-DuiOSFlu.js";import{B as i}from"./Button-CF9FU3kY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CmhxWbu6.js";import"./useFocusRing-fb67MZCG.js";import"./utils-DuGECbYJ.js";import"./index-uTF0zBZg.js";import"./index-3su9nmIU.js";import"./animation-adBdCafr.js";import"./clsx-Ciqy0D92.js";import"./Text-Do0OahUX.js";import"./Text-BjHkHRHl.js";import"./x-BVGBl3EY.js";import"./createLucideIcon-tBOZLxvE.js";import"./useLocalizedStringFormatter-Bg3jxnyj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-qoG5XtEP.js";import"./Hidden-DYp0pP8Z.js";import"./useLabel-DORwbiEm.js";import"./useLabels-CWIg4FvW.js";import"./useButton-DI4TpKGO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-3nqwjOvK.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
