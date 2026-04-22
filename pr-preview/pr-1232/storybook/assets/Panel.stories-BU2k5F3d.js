import{r as p,j as r}from"./iframe-CFSsLpc3.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BNeiqUQY.js";import{B as c}from"./Button-BpZ-gEJa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbBMw6Jg.js";import"./useFocusRing-BscyqCba.js";import"./utils-CgvAx7Eh.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./animation-DG4f8YqV.js";import"./PanelTitle-D4Fc3n1E.js";import"./clsx-Ciqy0D92.js";import"./Text-DJekINTm.js";import"./Text-CxyFIK0P.js";import"./x-BqPwmm8B.js";import"./createLucideIcon-DwZpSpKK.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BA4ocZWH.js";import"./Hidden-CLuFLk7t.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CJUN9Oa8.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
