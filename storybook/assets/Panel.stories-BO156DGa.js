import{r as p,j as o}from"./iframe-BQlcbrgq.js";import{P as s}from"./Panel-t2QTfQWs.js";import{B as i}from"./Button-CWx5j6of.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-8FQUmPf4.js";import"./useFocusRing-vaJTuI4B.js";import"./utils-zlU0QFfw.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./animation-Dja5saqP.js";import"./clsx-Ciqy0D92.js";import"./Text-VFn9yNax.js";import"./Text-9noXsIlr.js";import"./x-CQzcLprN.js";import"./createLucideIcon-Dkmw8KOt.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CDoUC3iq.js";import"./Hidden-BCstp6u_.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKBFwX4P.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
