import{r as p,j as r}from"./iframe-u1Lp3cWH.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-COfGK1Oq.js";import{B as c}from"./Button-CeEdTiGh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dq3PeISU.js";import"./useFocusRing-Bt9lRSbz.js";import"./utils-Gcf78cCr.js";import"./index-vqf3vopk.js";import"./index-CV03FtcW.js";import"./animation-DEDnfxzU.js";import"./PanelTitle-DCgGIdJ-.js";import"./clsx-Ciqy0D92.js";import"./Text-slIPEHAS.js";import"./Text-DNrFEZpf.js";import"./x-BwlYKxxl.js";import"./createLucideIcon-DswZ9rJ-.js";import"./useLocalizedStringFormatter-9sVAI35M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-YBWgb3jY.js";import"./Hidden-C90fOqUW.js";import"./useLabel-CfQyR9Ip.js";import"./useLabels-XR_-vmuV.js";import"./useButton-CJlrbFFl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7l7xynE.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
