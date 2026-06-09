import{r as p,j as r}from"./iframe-ChiJKfMX.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DfvuLXnv.js";import{B as c}from"./Button-CL16j7Sc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BXkqcj0T.js";import"./useFocusRing-C3m7c-xg.js";import"./utils-Dm4E4mwc.js";import"./index-CKWxshzR.js";import"./index-C6BXlkmx.js";import"./animation-BTKUMYUw.js";import"./PanelTitle-CSsFxKZs.js";import"./clsx-Ciqy0D92.js";import"./Text-FMeRFHDx.js";import"./Text-D-VvP9KN.js";import"./x-Ca-xMBZU.js";import"./createLucideIcon-CGmKAaMX.js";import"./useLocalizedStringFormatter-Dpd2BHxH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DW_Sqb80.js";import"./Hidden-BaIjPHil.js";import"./useLabel-DFY6Hgn5.js";import"./useLabels-DqUEOu1i.js";import"./useButton-B2C85R1d.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D09TEuo-.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
