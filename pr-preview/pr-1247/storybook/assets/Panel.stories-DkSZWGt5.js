import{r as p,j as r}from"./iframe-Cq1efVtu.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-TcddxnsA.js";import{B as c}from"./Button-CTOoH2N3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C2EcW_bk.js";import"./useFocusRing-TSe7POO2.js";import"./utils-CDUIlyKR.js";import"./index-ByIJ9DK_.js";import"./index-CycVNjP9.js";import"./animation-CX8Z1SzW.js";import"./PanelTitle-dCDYDG5y.js";import"./clsx-Ciqy0D92.js";import"./Text-RuRZ3ncY.js";import"./Text-DK-NnzUH.js";import"./x--VzijxeQ.js";import"./createLucideIcon-CUu-1dyR.js";import"./useLocalizedStringFormatter-CJpwWgd_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DksBmTbZ.js";import"./Hidden-DNnAB0GJ.js";import"./useLabel-ls64yvEj.js";import"./useLabels-DUkn1Zma.js";import"./useButton-CT6xb_5T.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbkwGiLN.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
