import{r as p,j as r}from"./iframe-DNIclJcr.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DOIdeB-j.js";import{B as c}from"./Button-CmNHemBb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DkjzWyRs.js";import"./useFocusRing-DzLjolkJ.js";import"./utils-D_0gjjvk.js";import"./index-CUHvxg5U.js";import"./index-DNZxg9il.js";import"./animation-D4X84dz2.js";import"./PanelTitle-bgK7Kojb.js";import"./clsx-Ciqy0D92.js";import"./Text-CeEH6Nc6.js";import"./Text-Ctfv3ntz.js";import"./x-D-ccyFox.js";import"./createLucideIcon-DHdJRlte.js";import"./useLocalizedStringFormatter-D1mfHEq_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BbtXrV7T.js";import"./Hidden-BEQ2WZ2g.js";import"./useLabel-D60xKodB.js";import"./useLabels-BYBeQKfq.js";import"./useButton-rBFOLHck.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BM29Dd_X.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
