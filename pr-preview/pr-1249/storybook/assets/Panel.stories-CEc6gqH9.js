import{r as p,j as r}from"./iframe-DwYJYgGb.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BZRubueh.js";import{B as c}from"./Button-DpQdXJp1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CxwoTKvB.js";import"./useFocusRing-CXC08Tq5.js";import"./utils-fIJ7LVq8.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./animation-DJwCaNaH.js";import"./PanelTitle-D2Ai3BoS.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhOo0fu.js";import"./Text-B4syvpmZ.js";import"./x-CX4TJhGN.js";import"./createLucideIcon-CCgdfoT7.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Ddo8eX0a.js";import"./Hidden-CwjkXMFO.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0sEyNoY.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
