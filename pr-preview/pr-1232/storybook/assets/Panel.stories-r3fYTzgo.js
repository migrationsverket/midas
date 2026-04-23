import{r as p,j as r}from"./iframe-CcS9-zHY.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BXIgPAiI.js";import{B as c}from"./Button-D2itB7Px.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BouQOm1H.js";import"./useFocusRing-DtQX9EVQ.js";import"./utils-BpPVMEC-.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./animation-BhvHnTYH.js";import"./PanelTitle-ZChMJ_QN.js";import"./clsx-Ciqy0D92.js";import"./Text-BzFZDvz7.js";import"./Text-Bk3CxDKX.js";import"./x-I-qa-SpT.js";import"./createLucideIcon-C0GJ5EwW.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CP1lY-X_.js";import"./Hidden-C5RVHIuY.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-hYYm2jyD.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
