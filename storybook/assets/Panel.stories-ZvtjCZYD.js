import{r as p,j as o}from"./iframe-DDkxC9AE.js";import{P as s}from"./Panel-4IaDOr2F.js";import{B as i}from"./Button-nixYBadL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDBKKIZJ.js";import"./useFocusRing-C43-8fCQ.js";import"./utils-Bv-3ie4X.js";import"./index-BLH1qvEF.js";import"./index-C98fnEDe.js";import"./animation-BcDCZZOC.js";import"./clsx-Ciqy0D92.js";import"./Text-1G0eP0RO.js";import"./Text-BtXc1lRV.js";import"./x-zjzglfs-.js";import"./createLucideIcon-tquE4JOn.js";import"./useLocalizedStringFormatter-DdWGKtAM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CUTFiFAp.js";import"./Hidden-BdbLRp3U.js";import"./useLabel-LlSNGQxT.js";import"./useLabels-ClPbn0aQ.js";import"./useButton-B95KM6rf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ZtpMBoq6.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
