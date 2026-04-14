import{r as p,j as r}from"./iframe-DgC-Ldrx.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-uDwkIpqL.js";import{B as c}from"./Button-C6c-eprm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-9EeHrS1X.js";import"./useFocusRing-dqGFuQw5.js";import"./utils-BUpv-0tc.js";import"./index-N9gKTxLp.js";import"./index-Dh-_B1o5.js";import"./animation-Ck2eMurq.js";import"./PanelTitle-Dg0K5_RS.js";import"./clsx-Ciqy0D92.js";import"./Text-FIGzZLpV.js";import"./Text-DBf5U8p7.js";import"./x-6ABgZAjN.js";import"./createLucideIcon-Dct_wYt8.js";import"./useLocalizedStringFormatter-CU_Lgw4A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-eOYMOt-9.js";import"./Hidden-B6xJ_9IQ.js";import"./useLabel-BjQqLo5U.js";import"./useLabels-DdUViYlU.js";import"./useButton-D1S_DcDn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CY4Z8bfN.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
