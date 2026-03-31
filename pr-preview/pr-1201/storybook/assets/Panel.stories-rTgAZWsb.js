import{r as p,j as o}from"./iframe-BBhwDnFO.js";import{P as s}from"./Panel-BJuEpnHB.js";import{B as i}from"./Button-xHV73jzN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Kegn83S3.js";import"./useFocusRing-B_sqHjIH.js";import"./utils-Bd87UzLz.js";import"./index-BlvuKTGl.js";import"./index-_W7tIlCY.js";import"./animation-D5xmnnHd.js";import"./clsx-Ciqy0D92.js";import"./Text-DjN1krRx.js";import"./Text-CuEErEoe.js";import"./x-CHXjKLnv.js";import"./createLucideIcon-DfX1ZOng.js";import"./useLocalizedStringFormatter-xYmRvro2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CckDCqMW.js";import"./Hidden-QElrSbG6.js";import"./useLabel-cKvXwArV.js";import"./useLabels-Brd-Ii1p.js";import"./useButton-BBvNlSl7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CeBruMUu.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
