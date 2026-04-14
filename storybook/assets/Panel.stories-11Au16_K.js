import{r as p,j as r}from"./iframe-CUSvXe23.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-QsvxSpsm.js";import{B as c}from"./Button-ricz7KuE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BDwJH1MB.js";import"./useFocusRing-BuJn1tRD.js";import"./utils-CkRXDuX-.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./animation-9OdcW6fl.js";import"./PanelTitle-Dos_HujN.js";import"./clsx-Ciqy0D92.js";import"./Text-NxTN73uc.js";import"./Text-DLWDclOW.js";import"./x-W7_jPxcF.js";import"./createLucideIcon-Ce9oZthD.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C1-Re332.js";import"./Hidden-Dhsax2Cn.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-YrO2RMP0.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
