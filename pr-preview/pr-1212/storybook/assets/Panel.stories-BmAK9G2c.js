import{r as p,j as o}from"./iframe-CFC4xcGk.js";import{P as s}from"./Panel-C-y6AV2h.js";import{B as i}from"./Button-DmKKfG5W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CPr8PZqM.js";import"./useFocusRing-jXz3NGbj.js";import"./utils-YAjyJ6o5.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./animation-noZqyxMd.js";import"./clsx-Ciqy0D92.js";import"./Text-ZUooKx_2.js";import"./Text-AmqWzkOV.js";import"./x-BlcNnfbx.js";import"./createLucideIcon-BfFQGVhS.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dlhy25YO.js";import"./Hidden-BvfitbEd.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BPhSZleF.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
