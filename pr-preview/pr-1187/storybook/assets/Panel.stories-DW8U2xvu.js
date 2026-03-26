import{r as p,j as o}from"./iframe-CM25YVMI.js";import{P as s}from"./Panel-Ba7fMBcm.js";import{B as i}from"./Button-CImuJsqD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-FG_bUeqE.js";import"./useFocusRing-leQD3u2F.js";import"./utils-B96ufrPs.js";import"./index-DYgoHuTv.js";import"./index-Dkdrw9MX.js";import"./animation-DnwPZMvr.js";import"./clsx-Ciqy0D92.js";import"./Text-D4mHh6eT.js";import"./Text-DDiDpkRq.js";import"./x-B7ImzBTw.js";import"./createLucideIcon-Br4oCZrR.js";import"./useLocalizedStringFormatter-DdE69EWU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-vkdXqgie.js";import"./Hidden-Bkjvz6Ri.js";import"./useLabel-Bns7seSC.js";import"./useLabels-61TYLMjS.js";import"./useButton-B_beWRfB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwsE6PRe.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
