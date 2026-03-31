import{r as p,j as o}from"./iframe-CKynqbsT.js";import{P as s}from"./Panel-C7r65x6w.js";import{B as i}from"./Button-DQDk8v-k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CkRmHnNo.js";import"./useFocusRing-DW03qt76.js";import"./utils-Cz4s-P07.js";import"./index-MKc-RSGl.js";import"./index-DbmjAuuR.js";import"./animation-BRCICGFF.js";import"./clsx-Ciqy0D92.js";import"./Text-CV3rC3lw.js";import"./Text-CFqReYPn.js";import"./x-CO1sdvqd.js";import"./createLucideIcon-B7xcXnKD.js";import"./useLocalizedStringFormatter-BJaowkmQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-odKdBChn.js";import"./Hidden-CxwF48Ci.js";import"./useLabel-BScGGoXy.js";import"./useLabels-CasMb-p3.js";import"./useButton-K4roNkpf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BxWxnvxB.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
