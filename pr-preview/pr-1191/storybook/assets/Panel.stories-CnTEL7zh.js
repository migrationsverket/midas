import{r as p,j as o}from"./iframe-eNlvCIQC.js";import{P as s}from"./Panel-pS5mikAl.js";import{B as i}from"./Button-CcMDkuHu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CSVjjcGV.js";import"./useFocusRing-BmmlkTDk.js";import"./utils-DazIc8Hv.js";import"./index-BZeDSjH7.js";import"./index-DngAPwAT.js";import"./animation-lxBfVS8z.js";import"./clsx-Ciqy0D92.js";import"./Text-DpGTS3fY.js";import"./Text-CCBMvhvi.js";import"./x-DfVN5ZiU.js";import"./createLucideIcon-CwcksuKO.js";import"./useLocalizedStringFormatter-CfUiywgS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CefyB9za.js";import"./Hidden-BdbKhiKI.js";import"./useLabel-B0k3Io0S.js";import"./useLabels-Dlb0vDOj.js";import"./useButton-DwspZCKK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C4bD4gli.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
