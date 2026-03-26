import{r as p,j as o}from"./iframe-O6mcP7w5.js";import{P as s}from"./Panel-D4Wjaf90.js";import{B as i}from"./Button-I2L11CLA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRRn0qym.js";import"./useFocusRing-DFc_QmgH.js";import"./utils-msXr86i8.js";import"./index-5zPEcam6.js";import"./index-DhMeVXuk.js";import"./animation-DnUad7nt.js";import"./clsx-Ciqy0D92.js";import"./Text-CWuBzebG.js";import"./Text-D-DusRzY.js";import"./x-76M_aj2E.js";import"./createLucideIcon-rh706yg9.js";import"./useLocalizedStringFormatter-Bp0OJ5-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BzVOX2eA.js";import"./Hidden-BulmN4hD.js";import"./useLabel-mg3lGotN.js";import"./useLabels-CbW6k4sf.js";import"./useButton-B_n0RrdL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVj_UoLV.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
