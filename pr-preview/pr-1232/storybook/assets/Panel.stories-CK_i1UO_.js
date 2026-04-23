import{r as p,j as r}from"./iframe-9FvbyuW0.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CcfCRPZa.js";import{B as c}from"./Button-2CN5Xnme.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DTpS52De.js";import"./useFocusRing-Vad-IAyW.js";import"./utils-DbV0Y6c3.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./animation-CPdj6FLI.js";import"./PanelTitle-CrUiqBL8.js";import"./clsx-Ciqy0D92.js";import"./Text-rctLJTJW.js";import"./Text-DiUsHtEy.js";import"./x-DkE65F2h.js";import"./createLucideIcon-BM_MsqvO.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C6F5UViI.js";import"./Hidden-DVuO0yGr.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2w5ZOiK.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
