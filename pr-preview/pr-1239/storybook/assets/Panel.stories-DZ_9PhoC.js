import{r as p,j as r}from"./iframe-CYdOIShe.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BhMpvHtM.js";import{B as c}from"./Button-CBUriOkd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DtqbYXAa.js";import"./useFocusRing-luUELUDI.js";import"./utils-HKmh4Wcn.js";import"./index-nBFb2I9s.js";import"./index-BdtOk31Q.js";import"./animation-BydA_BhY.js";import"./PanelTitle-D7JUioIo.js";import"./clsx-Ciqy0D92.js";import"./Text-BPz397x3.js";import"./Text-JajiEAQE.js";import"./x-o-bpfQug.js";import"./createLucideIcon-cX0zgN2L.js";import"./useLocalizedStringFormatter-NjtY28c2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CFIgUPn3.js";import"./Hidden-CT5s6T9J.js";import"./useLabel-CI9g1Lfo.js";import"./useLabels-CSj9lZg7.js";import"./useButton-CXRipkk8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DnXqJuQy.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
