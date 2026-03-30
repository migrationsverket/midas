import{r as p,j as o}from"./iframe-DI52Qlo4.js";import{P as s}from"./Panel-D7WY_HLH.js";import{B as i}from"./Button-3POgXEp-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLoU2XYC.js";import"./useFocusRing-2JaqZA15.js";import"./utils-urtsDcnm.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./animation-BCqfTzdf.js";import"./clsx-Ciqy0D92.js";import"./Text-D2edba9r.js";import"./Text-C_RzDhoB.js";import"./x-B7Z7gY9k.js";import"./createLucideIcon-Bf3dyCX1.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-eSR4bLK4.js";import"./Hidden-CscT1sly.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ct-vZpQ3.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
