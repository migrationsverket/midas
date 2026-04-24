import{r as p,j as r}from"./iframe-Csum_Dn_.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Njxm1mqi.js";import{B as c}from"./Button-dhowh8Zu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CRJrM8G1.js";import"./useFocusRing-ClEYMHRu.js";import"./utils-Ge-V0544.js";import"./index-BVxqAi5_.js";import"./index-k_0Ayxip.js";import"./animation-B4mINI-w.js";import"./PanelTitle-DKlEjpyy.js";import"./clsx-Ciqy0D92.js";import"./Text-tsq8PiKH.js";import"./Text-D-PYeQb1.js";import"./x-ClDHgqDO.js";import"./createLucideIcon-Bn5Z2gKp.js";import"./useLocalizedStringFormatter-CfCv-5fd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BUrmgwKE.js";import"./Hidden-CxHKwZ6C.js";import"./useLabel-Ca_R4Gv6.js";import"./useLabels-DlHehStK.js";import"./useButton-Cjc9nZaQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDF8meml.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
