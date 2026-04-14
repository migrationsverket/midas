import{r as p,j as r}from"./iframe-CO-rhcep.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DirtgN9d.js";import{B as c}from"./Button-ChDRE6gD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ByGhFCbY.js";import"./useFocusRing-DON0ybQn.js";import"./utils-xXHSLQwD.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./animation-CPoia-Ui.js";import"./PanelTitle-B2iJhiGQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BNQMcymU.js";import"./Text-DdPGOhQT.js";import"./x-BAtRtlFw.js";import"./createLucideIcon-oXqbvAOH.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BEB_3r-L.js";import"./Hidden-CWNbbLzJ.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C7JdZ-qs.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
