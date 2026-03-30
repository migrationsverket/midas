import{r as p,j as o}from"./iframe-DZnWAGNq.js";import{P as s}from"./Panel-BbDLYbZi.js";import{B as i}from"./Button-DcP_UxfK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-6kQgBtxG.js";import"./useFocusRing-BZzOLfX3.js";import"./utils-Btsh_mej.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./animation-CcV7oYXW.js";import"./clsx-Ciqy0D92.js";import"./Text-Db4n8kvt.js";import"./Text-8pdzY51Q.js";import"./x-B3FTSjlW.js";import"./createLucideIcon-DnUFLHhp.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BTPuoZ6n.js";import"./Hidden-Dc0Ha1vW.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-BIds43GM.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
