import{r as p,j as r}from"./iframe-Dl4LNfFt.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CDOh4sX6.js";import{B as c}from"./Button-CE6ptzle.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CyH9azIX.js";import"./useFocusRing-DBInQ3ih.js";import"./utils-zoe11Nhs.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./animation-InBdBZ0D.js";import"./PanelTitle-CcQKMyny.js";import"./clsx-Ciqy0D92.js";import"./Text-htVbAu9h.js";import"./Text-P-m_usmt.js";import"./x-BosK2Sg6.js";import"./createLucideIcon-1sQySh6M.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-1ORHN5ed.js";import"./Hidden-qMhe2ll1.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CI441pyr.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
