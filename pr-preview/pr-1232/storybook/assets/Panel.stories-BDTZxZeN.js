import{r as p,j as r}from"./iframe-EPbYJ3aH.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Db1N5w3K.js";import{B as c}from"./Button-CF00LYtn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B7DCF9AW.js";import"./useFocusRing-vFk-w4SV.js";import"./utils-BFyuPOg-.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./animation-C2RjG4Qj.js";import"./PanelTitle-D2WCJ45M.js";import"./clsx-Ciqy0D92.js";import"./Text-DaRCpEpM.js";import"./Text-DXPQUnae.js";import"./x-DpzpagIl.js";import"./createLucideIcon-CDlkFEI-.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D1GYvhMH.js";import"./Hidden-CHhsJSI8.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CRUsIDEu.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
