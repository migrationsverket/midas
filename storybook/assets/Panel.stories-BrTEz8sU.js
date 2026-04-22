import{r as p,j as r}from"./iframe-DIPCj7z0.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D-33h8c2.js";import{B as c}from"./Button-Dd5S0QsR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BD_nezFk.js";import"./useFocusRing-CGC0Rs2i.js";import"./utils-1Jw3myEp.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./animation-DYTiBTJq.js";import"./PanelTitle-CgW6d8N4.js";import"./clsx-Ciqy0D92.js";import"./Text-CutZY7em.js";import"./Text-DfA3YTZF.js";import"./x-i9MPadT4.js";import"./createLucideIcon-BXzguI7t.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-XWLhDASZ.js";import"./Hidden-DixPPjgd.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7PA1Ynv.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
