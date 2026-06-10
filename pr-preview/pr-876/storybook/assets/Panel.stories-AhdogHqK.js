import{r as p,j as r}from"./iframe-CmeF7aiR.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DvDfRNDv.js";import{B as c}from"./Button-xoJ9JlM1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-hzD7JFD-.js";import"./useFocusRing-2QXJrqIt.js";import"./utils-Z3-XoPsz.js";import"./index-XXiSS7gB.js";import"./index-Cy7R6ehB.js";import"./animation-Bg2Y09vr.js";import"./PanelTitle-Bi4DqBRE.js";import"./clsx-Ciqy0D92.js";import"./Text-BssmR8ms.js";import"./Text-C9HAfj-8.js";import"./x-B7wEz93I.js";import"./createLucideIcon-DCW1PR-F.js";import"./useLocalizedStringFormatter-ACOccWph.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-ClEeAqn6.js";import"./Hidden-BUn3MpC7.js";import"./useLabel-ZOG9CKkE.js";import"./useLabels-kUwjKE83.js";import"./useButton-B02vL_2_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0_5kTh6.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
