import{r as p,j as r}from"./iframe-DsyUTAcE.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Do8KiljO.js";import{B as c}from"./Button-D3VEHZPU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUD0SDj1.js";import"./useFocusRing-Cx6ToNCy.js";import"./utils-BnWDXxML.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./animation-CB6ugAJk.js";import"./PanelTitle-D4gJKJrw.js";import"./clsx-Ciqy0D92.js";import"./Text-BbelKnYK.js";import"./Text-BcSWoPTn.js";import"./x-zGwK5Qc9.js";import"./createLucideIcon-BXEX14cZ.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CyvfdMVt.js";import"./Hidden-C6TlAeVz.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-hue3FDJw.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
