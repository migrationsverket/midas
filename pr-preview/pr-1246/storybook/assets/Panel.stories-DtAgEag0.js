import{r as p,j as r}from"./iframe-D7aktJQV.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BwYo_Skc.js";import{B as c}from"./Button-D5CfzWf4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-1uGcLhZ_.js";import"./useFocusRing-BIeXmF9F.js";import"./utils-DNmLi0Ns.js";import"./index-D1nxkkFw.js";import"./index-BhjnNFRZ.js";import"./animation-De76PqFR.js";import"./PanelTitle-C9qamEae.js";import"./clsx-Ciqy0D92.js";import"./Text-DVQHaLD4.js";import"./Text-DYj0Y-WB.js";import"./x-z9l8IXo0.js";import"./createLucideIcon-Bis6T-wM.js";import"./useLocalizedStringFormatter-V3f1g4sa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-2JoqP8wJ.js";import"./Hidden-B0OViUit.js";import"./useLabel-yzdCyS6F.js";import"./useLabels-DjGMth6f.js";import"./useButton-D9uxvQZx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ClpBCcmK.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
