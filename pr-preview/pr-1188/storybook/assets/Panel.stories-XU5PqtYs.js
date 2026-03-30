import{r as p,j as o}from"./iframe-Dr8Tkvah.js";import{P as s}from"./Panel-BniEQaV2.js";import{B as i}from"./Button-B4jxTFim.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DzvWO88h.js";import"./useFocusRing-poi8r4OJ.js";import"./utils-DOuA3kXF.js";import"./index-DM6sY-46.js";import"./index-CtVp1upA.js";import"./animation-D61uNW08.js";import"./clsx-Ciqy0D92.js";import"./Text-CQjzvGyg.js";import"./Text-Dbwxk-C7.js";import"./x-UdkypbZC.js";import"./createLucideIcon-Boz8MrIZ.js";import"./useLocalizedStringFormatter-Cn25UGjx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C610-Rnq.js";import"./Hidden-BjSG53-T.js";import"./useLabel-C7_L8_CN.js";import"./useLabels-DxkPONzl.js";import"./useButton-BViocPn_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqOJHiwP.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
