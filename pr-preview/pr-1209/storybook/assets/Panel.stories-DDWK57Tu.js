import{r as p,j as o}from"./iframe-DWnL6zvQ.js";import{P as s}from"./Panel-Cf7pwwkc.js";import{B as i}from"./Button-DLalHH7Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFA4HXY0.js";import"./useFocusRing-T-08Y7EQ.js";import"./utils-ZOmRnVQp.js";import"./index-BKrgJF-5.js";import"./index-BdkXzYOX.js";import"./animation-DKOknMal.js";import"./clsx-Ciqy0D92.js";import"./Text-BYUx4Ue_.js";import"./Text-BFKc_gYr.js";import"./x-uyk-3eD_.js";import"./createLucideIcon--0_c509q.js";import"./useLocalizedStringFormatter-BGNOMAGR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-aAs4bXFc.js";import"./Hidden-D-JZUsjj.js";import"./useLabel-0R8_MAd9.js";import"./useLabels-D-eiwoeG.js";import"./useButton-Da9Ah83K.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbmKXf8Z.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
