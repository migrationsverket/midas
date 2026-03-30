import{r as p,j as o}from"./iframe-BCVsy88N.js";import{P as s}from"./Panel-C7EWIoT0.js";import{B as i}from"./Button-VV8KlKzK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-jD-tqQdO.js";import"./useFocusRing-eWhXbche.js";import"./utils-C-OmHNLm.js";import"./index-BwfJQ9F8.js";import"./index-cJVZ5RXC.js";import"./animation-DzNdqX9T.js";import"./clsx-Ciqy0D92.js";import"./Text-C7Bb6ebF.js";import"./Text-CJD2elUx.js";import"./x-CDS6gFVI.js";import"./createLucideIcon-D1oE0F07.js";import"./useLocalizedStringFormatter-mDxu21Fd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Kvyi1RRX.js";import"./Hidden-CN3dXu03.js";import"./useLabel-BbZWMYwa.js";import"./useLabels-COZKzSvp.js";import"./useButton-DfNnGNTV.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-D6HKc_n0.js";const q={component:s,title:"Components/Layout/Panel",tags:["autodocs"],args:{isOpen:!1,title:"App name"}},t={args:{isOpen:!0,title:"Plats"},render:n=>{const[r,e]=p.useState(!0);return r?o.jsx(s,{...n,isOpen:r,onOpenChange:e}):o.jsx(i,{onPress:()=>e(!0),children:"Re open"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Plats'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} /> : <Button onPress={() => setIsOpen(true)}>Re open</Button>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,q as default};
