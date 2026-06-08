import{r as p,j as r}from"./iframe-_-I-4bmX.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CbuXH_Cx.js";import{B as c}from"./Button-Cur5alMr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CitIWhQv.js";import"./useFocusRing-CMcqGwdV.js";import"./utils-DzcaSYTj.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./animation-Db4Op6I0.js";import"./PanelTitle-NnllO1Gb.js";import"./clsx-Ciqy0D92.js";import"./Text-CY5kPrUO.js";import"./Text-Cm78CGL1.js";import"./x-D2ojVt-R.js";import"./createLucideIcon-0TA1baeh.js";import"./useLocalizedStringFormatter-Cf6u5T_L.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-tRjJFBuJ.js";import"./Hidden-BeH_JIKl.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CK8kGowV.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
