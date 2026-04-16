import{r as p,j as r}from"./iframe-Cwp_nH2i.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CbOBPnp9.js";import{B as c}from"./Button-D-SHIeik.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DjKqHFBe.js";import"./useFocusRing-DNNGYKVr.js";import"./utils-D58tzseF.js";import"./index-DyCqZMYr.js";import"./index-kB1ochzG.js";import"./animation-I0f_CXeG.js";import"./PanelTitle-DXWaqB1f.js";import"./clsx-Ciqy0D92.js";import"./Text-ooZ4PKli.js";import"./Text-h4_45G40.js";import"./x-DV3Rl8a5.js";import"./createLucideIcon-CL7AaBb9.js";import"./useLocalizedStringFormatter-C82ZJvLt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BYfq0wpH.js";import"./Hidden-BUSQ_LLM.js";import"./useLabel-D7lULVXa.js";import"./useLabels-cVarSgwU.js";import"./useButton-BNvE6ltl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-c7FiOqp6.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
