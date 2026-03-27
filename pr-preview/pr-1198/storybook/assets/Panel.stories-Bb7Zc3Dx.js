import{r as p,j as o}from"./iframe-4YO2ARDc.js";import{P as s}from"./Panel-K8lON1u3.js";import{B as i}from"./Button-Bn5ZQsd6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DMcdq1J4.js";import"./useFocusRing-CIkko9vI.js";import"./utils-Bfs2eoJd.js";import"./index-D4eJv5Ic.js";import"./index-BTuiHaBk.js";import"./animation-BDbqzvYr.js";import"./clsx-Ciqy0D92.js";import"./Text-BPQIT5o1.js";import"./Text-CzwdOm33.js";import"./x-cOxoPhDE.js";import"./createLucideIcon-DgKHzC9k.js";import"./useLocalizedStringFormatter-DI81rz-a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B4lRjwhF.js";import"./Hidden-CaP86mrU.js";import"./useLabel-p6x45DKH.js";import"./useLabels-CWRsfwtI.js";import"./useButton-BKsQrDS8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DJTNtHiX.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
