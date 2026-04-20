import{r as p,j as r}from"./iframe-Cwy6RqRk.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DGYMMPka.js";import{B as c}from"./Button-DQvr5Ms4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DxWn3JGW.js";import"./useFocusRing-D2oXtlEb.js";import"./utils-Dig7OQRF.js";import"./index-B9B4w_Jv.js";import"./index-9xU_DKCC.js";import"./animation-CI6pm0GJ.js";import"./PanelTitle-C3025Jb-.js";import"./clsx-Ciqy0D92.js";import"./Text-D4_zOmYN.js";import"./Text-DKQA35ph.js";import"./x-BFQfEM6r.js";import"./createLucideIcon-D-5pXknp.js";import"./useLocalizedStringFormatter-BIN4Z2mf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-iq1xipAk.js";import"./Hidden-DypQ3tfS.js";import"./useLabel-DrD6Az6p.js";import"./useLabels-Bed1240S.js";import"./useButton-CywKmqyz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-4XVU0CqX.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
