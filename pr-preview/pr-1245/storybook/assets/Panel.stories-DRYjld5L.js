import{r as p,j as r}from"./iframe-B3CWHhIN.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D6kx-Baj.js";import{B as c}from"./Button-CFIqCifj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DO7MzpyM.js";import"./useFocusRing-Dqy31Yu8.js";import"./utils-Jns7c9tB.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./animation-Buslp-fm.js";import"./PanelTitle-hvkdOSvv.js";import"./clsx-Ciqy0D92.js";import"./Text-BEt0Rg_V.js";import"./Text-CjXkmRxL.js";import"./x-BAAJthI0.js";import"./createLucideIcon-B55uVL59.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BI1n4R5H.js";import"./Hidden-CgV_CbEL.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DPG3Zp-i.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
