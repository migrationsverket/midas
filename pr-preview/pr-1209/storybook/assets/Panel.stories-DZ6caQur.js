import{r as p,j as o}from"./iframe-CEYCzj7u.js";import{P as s}from"./Panel-BM18VYB1.js";import{B as i}from"./Button-DjNzlNeH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BgNKedVs.js";import"./useFocusRing-Dp-W9h8R.js";import"./utils-AQIE0kDv.js";import"./index-BT04Vy5P.js";import"./index-BaKsLBWM.js";import"./animation-rud58Vjt.js";import"./clsx-Ciqy0D92.js";import"./Text-BKjU8N6L.js";import"./Text-BtotI6hp.js";import"./x-ubboyZZG.js";import"./createLucideIcon-Djfjk74V.js";import"./useLocalizedStringFormatter-B6vMXcu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C7JuJvDF.js";import"./Hidden-BwxAj0d8.js";import"./useLabel-BMWHmK7D.js";import"./useLabels-BdGOjTVQ.js";import"./useButton-15OKOO7P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B3AOW4Om.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
