import{r as p,j as r}from"./iframe-DHMeiSea.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D4bGtqI_.js";import{B as c}from"./Button-DRj-uv9d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CMV_FSB4.js";import"./useFocusRing-BZqNlBLL.js";import"./utils-C4sbwA05.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./animation-BShm4XID.js";import"./PanelTitle-BScK7SxN.js";import"./clsx-Ciqy0D92.js";import"./Text-OJU2i65y.js";import"./Text-BM4AoGMt.js";import"./x-C9bWyskH.js";import"./createLucideIcon-DHfZe-cT.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-X7Yqj24b.js";import"./Hidden-BDTDIVWX.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-V6Y_A8T3.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
