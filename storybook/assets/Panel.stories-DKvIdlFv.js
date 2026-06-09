import{r as p,j as r}from"./iframe-BKRZxWBZ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-eyi1ExGl.js";import{B as c}from"./Button-D0aetTqs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C2ay6qCb.js";import"./useFocusRing-CbgDMaVp.js";import"./utils-Y4JGSljl.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./animation-sv7RN9Kz.js";import"./PanelTitle-CYG15Szk.js";import"./clsx-Ciqy0D92.js";import"./Text-8xjuYN6y.js";import"./Text-DGzS_SrA.js";import"./x-BTizcETx.js";import"./createLucideIcon-B2GxFjYG.js";import"./useLocalizedStringFormatter-gzrdZE98.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bag6HyT1.js";import"./Hidden-D261fXZx.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbkQs6Cg.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
