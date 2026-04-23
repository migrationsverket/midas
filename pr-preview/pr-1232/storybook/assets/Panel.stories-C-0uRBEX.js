import{r as p,j as r}from"./iframe-BNflmq3A.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-fOKvGNnv.js";import{B as c}from"./Button-Cyp4EM5w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DuXs14gL.js";import"./useFocusRing-C6RlaKsx.js";import"./utils-B7V63oD4.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./animation-C1dnsmar.js";import"./PanelTitle-BGn0y47p.js";import"./clsx-Ciqy0D92.js";import"./Text-BlWLVQLi.js";import"./Text-Bnz2t9Ql.js";import"./x-DbG6WDA3.js";import"./createLucideIcon-BQvoQkeP.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DJfxBrz6.js";import"./Hidden-fjlvP_hk.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ITIWhviF.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
