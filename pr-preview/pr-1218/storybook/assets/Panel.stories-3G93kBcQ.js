import{r as p,j as r}from"./iframe-CNCYpet-.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-o0r0ih7A.js";import{B as c}from"./Button-FEtIFAuh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CeXWXac4.js";import"./useFocusRing-CRxTmkRw.js";import"./utils-DbCir_Jt.js";import"./index-BUDe2ZxC.js";import"./index-DWOJOWmI.js";import"./animation-g4fSyKjs.js";import"./PanelTitle-kH4OcxNh.js";import"./clsx-Ciqy0D92.js";import"./Text-ORzvfqKL.js";import"./Text-BSDJ27Oc.js";import"./x-BNWluiEV.js";import"./createLucideIcon-Clh8USVg.js";import"./useLocalizedStringFormatter-BnKVjVFL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DJ63q7tI.js";import"./Hidden-hGcy4cT5.js";import"./useLabel-CzS_jyTD.js";import"./useLabels-vAecHqWn.js";import"./useButton-DXHtHs2n.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BD8822Hp.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
