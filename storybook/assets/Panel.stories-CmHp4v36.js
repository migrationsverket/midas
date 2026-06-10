import{r as p,j as r}from"./iframe-D-sLCnpD.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CWVXNZSS.js";import{B as c}from"./Button-DXPPcOjH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjvLL9Qd.js";import"./useFocusRing-BddZYFRw.js";import"./utils-D3U7E8TR.js";import"./index-CLCyT0Oh.js";import"./index-D5x8KNVK.js";import"./animation-CS2NY984.js";import"./PanelTitle-cTHoDm6S.js";import"./clsx-Ciqy0D92.js";import"./Text-CHAFZQ5b.js";import"./Text-BKNBB32x.js";import"./x-2-riXgs7.js";import"./createLucideIcon-DYN3agFs.js";import"./useLocalizedStringFormatter-CdR-Kcyq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DnF54DF8.js";import"./Hidden-y_sC-lpt.js";import"./useLabel-Cu8kCPJx.js";import"./useLabels-r9V9wZ09.js";import"./useButton-QMunS1hB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-qGd6TSu6.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
