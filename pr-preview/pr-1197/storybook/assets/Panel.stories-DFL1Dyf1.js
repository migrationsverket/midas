import{r as p,j as o}from"./iframe-CxkETeDd.js";import{P as s}from"./Panel-HufRfMn4.js";import{B as i}from"./Button-CKmKD5ej.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cqnjl-Rp.js";import"./useFocusRing-Do0yfzWS.js";import"./utils-GlStkLEJ.js";import"./index-BSb6ZrfR.js";import"./index-nMmCh7nR.js";import"./animation-B3q1RVnp.js";import"./clsx-Ciqy0D92.js";import"./Text-BAZIzjwA.js";import"./Text-CjYtEiaz.js";import"./x-B204znOg.js";import"./createLucideIcon-C0eB9KvK.js";import"./useLocalizedStringFormatter-53dmxcXe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-M5zQwREp.js";import"./Hidden-CKsesGiK.js";import"./useLabel-BO_xYu1i.js";import"./useLabels-DaC1eol5.js";import"./useButton-DENm16UC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BFccnY_O.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
