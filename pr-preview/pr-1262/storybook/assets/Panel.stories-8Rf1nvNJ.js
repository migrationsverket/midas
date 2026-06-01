import{r as p,j as r}from"./iframe-CwW8sN4S.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CXlFIO44.js";import{B as c}from"./Button-BNJwH1Cm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CC34MHAe.js";import"./useFocusRing-cgdKMhcs.js";import"./utils-B_M889tP.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./animation-BsnOxs_W.js";import"./PanelTitle-DKcm_oPx.js";import"./clsx-Ciqy0D92.js";import"./Text-C5uja355.js";import"./Text-BE9Sihnv.js";import"./x-DNLXf0Tv.js";import"./createLucideIcon-DzXM4i8f.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C3AuE87p.js";import"./Hidden-CVoubVAI.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BudlR0yM.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
