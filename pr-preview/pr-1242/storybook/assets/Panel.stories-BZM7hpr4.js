import{r as p,j as r}from"./iframe-CcoWXO6B.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DgI_g_ju.js";import{B as c}from"./Button-tDMUeh37.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-6QHQ6cmR.js";import"./useFocusRing-G8rwOJ76.js";import"./utils-CvmzGVmn.js";import"./index-C0yg_Dj0.js";import"./index-CfJimmGR.js";import"./animation-gGfbTkXn.js";import"./PanelTitle-BqFeporR.js";import"./clsx-Ciqy0D92.js";import"./Text-_y8SHX-J.js";import"./Text-C1aI8N19.js";import"./x-CN2QjC-O.js";import"./createLucideIcon-CUodyQE8.js";import"./useLocalizedStringFormatter-DhaaJ_kE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CqtDw1Oq.js";import"./Hidden-CvcA5WHf.js";import"./useLabel-CGCEMESv.js";import"./useLabels-soLHUhGS.js";import"./useButton-Tnb7auBt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D34CPKZD.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
