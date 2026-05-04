import{r as p,j as r}from"./iframe-y_ZEGYiJ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bo5p7JV1.js";import{B as c}from"./Button-DfIwZ4Yr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DHT9vmuC.js";import"./useFocusRing-CZ7WfYYW.js";import"./utils-8dWn79IV.js";import"./index-DK6J5I5t.js";import"./index-C3AD5J6I.js";import"./animation-B1--TJfl.js";import"./PanelTitle-pM3UmMBh.js";import"./clsx-Ciqy0D92.js";import"./Text-B7AL5jZC.js";import"./Text-D9z2hAIA.js";import"./x-DyC_Bfvk.js";import"./createLucideIcon-BSy6nR5q.js";import"./useLocalizedStringFormatter-DZmDvz9-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Ch-G3kN7.js";import"./Hidden-Cu8enaQS.js";import"./useLabel-CNEaWGvD.js";import"./useLabels-JqoH3_Oa.js";import"./useButton-gC0Ivgyp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CIMmvdq0.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
