import{r as p,j as o}from"./iframe-B_PHmpba.js";import{P as s}from"./Panel-D9moQ6cl.js";import{B as i}from"./Button-Bu0PoYIz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dbw9fj5d.js";import"./useFocusRing-pLoaDniN.js";import"./utils-BLTu9tyH.js";import"./index-BnBRJ5Vs.js";import"./index-CohS7fjA.js";import"./animation-CfhZQOiv.js";import"./clsx-Ciqy0D92.js";import"./Text-CtWvGN0y.js";import"./Text-De6EL-yD.js";import"./x-Cqzwa68L.js";import"./createLucideIcon-Dp1bKuvD.js";import"./useLocalizedStringFormatter-B5yN6xVU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BH_CQ35-.js";import"./Hidden-Dyk48KDQ.js";import"./useLabel-um5sn7L2.js";import"./useLabels-CuRAxugE.js";import"./useButton-Bt5iDQO5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-_6q0RJ_b.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
