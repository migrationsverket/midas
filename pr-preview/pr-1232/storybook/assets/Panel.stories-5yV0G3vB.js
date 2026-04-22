import{r as p,j as r}from"./iframe-9MdBivRm.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DobKQuUa.js";import{B as c}from"./Button-oaXlsJtI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DASGxOGH.js";import"./useFocusRing-r9TCofSe.js";import"./utils-Bn94QCjx.js";import"./index-Cx-gCRg0.js";import"./index-CYPjKd3_.js";import"./animation-DAWiQObg.js";import"./PanelTitle-D45uUpmh.js";import"./clsx-Ciqy0D92.js";import"./Text-B_WlxrH5.js";import"./Text-DqogYLWC.js";import"./x-m6itTsWf.js";import"./createLucideIcon-w3wG1Pu8.js";import"./useLocalizedStringFormatter-BF9QVzFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CB5roEUk.js";import"./Hidden-mlaG9dyz.js";import"./useLabel-DJ2FRaty.js";import"./useLabels-BVQx-2qb.js";import"./useButton-9AsuX9J0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B5GjKkS-.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
