import{r as p,j as r}from"./iframe-CXw6yEtL.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CRDEAdmi.js";import{B as c}from"./Button-DEhxKNaB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uGX0UHSY.js";import"./useFocusRing-BUJw-zNR.js";import"./utils-TMTFLosf.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./animation-DmiDGQ5a.js";import"./PanelTitle-DrZjvfb6.js";import"./clsx-Ciqy0D92.js";import"./Text-DfSBpgc9.js";import"./Text-B-ez7dVi.js";import"./x-Cy8UX61V.js";import"./createLucideIcon-DWQv9Ysr.js";import"./useLocalizedStringFormatter-sjnuzL-M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C2Moqf7z.js";import"./Hidden-D7hcqzmB.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DZf8hqs4.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
