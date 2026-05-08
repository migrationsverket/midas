import{r as p,j as r}from"./iframe-C5ngTzwY.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-WSYL-vWa.js";import{B as c}from"./Button-paZ2bXFh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-xqz1UZWj.js";import"./useFocusRing-widihIkF.js";import"./utils-Dg8dAIMb.js";import"./index-q0KT5jnp.js";import"./index-Ccze4rZ3.js";import"./animation-AsKLtz-d.js";import"./PanelTitle-CZ8l9Frm.js";import"./clsx-Ciqy0D92.js";import"./Text-BREpfkEt.js";import"./Text-Dao-YHjx.js";import"./x-CYTkygL5.js";import"./createLucideIcon-Ctpe4pW9.js";import"./useLocalizedStringFormatter-DgMvPFf5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CG1C0RCC.js";import"./Hidden-D_4pS1pD.js";import"./useLabel-Dvu8tBif.js";import"./useLabels-DAN8PIoI.js";import"./useButton-BWnFtbTH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1SQTSBU.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
