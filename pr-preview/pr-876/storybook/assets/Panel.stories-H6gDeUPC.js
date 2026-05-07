import{r as p,j as r}from"./iframe-OzXVe_TX.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DYqrmetJ.js";import{B as c}from"./Button-BPALFDJW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLatC1WA.js";import"./useFocusRing-DizgMThA.js";import"./utils-tCr9uINw.js";import"./index-BxX1Tua9.js";import"./index-D0VI0fBs.js";import"./animation-ByUkEsGI.js";import"./PanelTitle-DERL4tAl.js";import"./clsx-Ciqy0D92.js";import"./Text-C8tynj-R.js";import"./Text-DQmoUTPX.js";import"./x-BQ6XFr0a.js";import"./createLucideIcon-COmw-XaN.js";import"./useLocalizedStringFormatter-MRi_Bu-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CQhvXyK9.js";import"./Hidden-B1yqLm5L.js";import"./useLabel-T42JMCw1.js";import"./useLabels-DsiX80-5.js";import"./useButton-BhVS9jHL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bi7DvSRw.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
