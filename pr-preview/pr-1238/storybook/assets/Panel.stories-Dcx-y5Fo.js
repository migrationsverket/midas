import{r as p,j as r}from"./iframe-Ex-KEKbR.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CCV5-XMf.js";import{B as c}from"./Button-BAZVnFvD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-OUr4VazD.js";import"./useFocusRing-H-1VYNNS.js";import"./utils-Dq_8TIe4.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./animation-BtJRc29T.js";import"./PanelTitle-CYykDnSr.js";import"./clsx-Ciqy0D92.js";import"./Text-DJaiOuNK.js";import"./Text-CeEAoIdH.js";import"./x-D_4t1M2T.js";import"./createLucideIcon-CnalT5R6.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C8JSYTF8.js";import"./Hidden-CyDaCMoS.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1UrQI4k.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <>
        <Main>
          <Button onPress={() => setIsOpen(true)}>Open panel</Button>
        </Main>
        <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const D=["Primary","Controlled"];export{t as Controlled,e as Primary,D as __namedExportsOrder,z as default};
