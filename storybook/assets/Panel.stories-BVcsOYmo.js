import{r as p,j as o}from"./iframe-DbRIiPJf.js";import{P as s}from"./Panel-C4vsgWv6.js";import{B as i}from"./Button-ClLfQI_I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CkgwQtqz.js";import"./useFocusRing-CzsT9eqz.js";import"./utils-CylrHtqj.js";import"./index-CWx_6wJr.js";import"./index-CYF8mrWB.js";import"./animation-BgBqCX5B.js";import"./clsx-Ciqy0D92.js";import"./Text-BWzS2USX.js";import"./Text-Bl7omTF2.js";import"./x-gq1nGzx6.js";import"./createLucideIcon-DWTxx8ko.js";import"./useLocalizedStringFormatter-Bz5dx8x0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bu-vq5J8.js";import"./Hidden-CLmG6Qjv.js";import"./useLabel-D5V8M1AU.js";import"./useLabels-CWkCWE-a.js";import"./useButton-ydqzzVJH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-OjEI7nCv.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
