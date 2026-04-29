import{r as p,j as r}from"./iframe-DWjCTUGS.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DDK5Yw8J.js";import{B as c}from"./Button-ClirsJfj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CkptqhP6.js";import"./useFocusRing-By5vzM2y.js";import"./utils-jft35r8I.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./animation-BT6WLBFH.js";import"./PanelTitle-BA5lmMCc.js";import"./clsx-Ciqy0D92.js";import"./Text-eFe150r9.js";import"./Text-Dg63mXaz.js";import"./x-BkZO3SMW.js";import"./createLucideIcon-B9xTeaix.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C9b-TJtb.js";import"./Hidden-Crg89ChB.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DBHrI_B7.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
