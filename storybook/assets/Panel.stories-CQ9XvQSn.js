import{r as p,j as o}from"./iframe-CRmifMxk.js";import{P as s}from"./Panel-Di-A1m5d.js";import{B as i}from"./Button-C1SdrETN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DeYyUgKl.js";import"./useFocusRing-C63zC52P.js";import"./utils-Dhemezbc.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./animation-CJnMoTai.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw5AWujN.js";import"./Text-7kJBKZyv.js";import"./x-COiF7Ld4.js";import"./createLucideIcon-DkATSQ6x.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Xq9T9zNn.js";import"./Hidden-D_jN673M.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9jbNlKJ.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
