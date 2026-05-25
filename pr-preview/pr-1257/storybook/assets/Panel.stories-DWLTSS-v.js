import{r as p,j as r}from"./iframe-CDA_ildW.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Zh5AhCNY.js";import{B as c}from"./Button-ByHOpWo0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-K9GQEKN-.js";import"./useFocusRing-3NNdwvus.js";import"./utils-DYwc33gT.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./animation-CrDB_43n.js";import"./PanelTitle-Cq7ihkDW.js";import"./clsx-Ciqy0D92.js";import"./Text-ThZYXmAV.js";import"./Text-K4BkD2rQ.js";import"./x-BUsqX4F1.js";import"./createLucideIcon-HvfaTVWX.js";import"./useLocalizedStringFormatter-D0XL9qnD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Djyjt8oy.js";import"./Hidden-DPevkO8m.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D1KRANLi.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
