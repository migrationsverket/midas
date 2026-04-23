import{r as p,j as r}from"./iframe-BYwHSihz.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D69AGvYc.js";import{B as c}from"./Button-crEn75HL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJUIxKhT.js";import"./useFocusRing-DxmY0qcu.js";import"./utils-Dh-IoFbm.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./animation-Dz0orPwe.js";import"./PanelTitle-DDh3dZaG.js";import"./clsx-Ciqy0D92.js";import"./Text-BHNKCnwU.js";import"./Text-DJX_2QXd.js";import"./x-CQCbnBEa.js";import"./createLucideIcon-COPS1n-B.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DOnb1gUF.js";import"./Hidden-DpptCkiu.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-2UqtjUFf.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
