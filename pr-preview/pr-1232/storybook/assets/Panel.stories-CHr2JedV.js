import{r as p,j as r}from"./iframe-BzE31zAh.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DHMOQi3F.js";import{B as c}from"./Button-D6ialrwI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-PVT6AeJ2.js";import"./useFocusRing-CqeBj5xm.js";import"./utils-DEtUikZw.js";import"./index-DdObABro.js";import"./index-DiZkuWFN.js";import"./animation-1YFdzJi3.js";import"./PanelTitle-DjKgEv2O.js";import"./clsx-Ciqy0D92.js";import"./Text-DWgTuz7g.js";import"./Text-BM4F5w0Y.js";import"./x-23zMaYXZ.js";import"./createLucideIcon-Lrfi9yqC.js";import"./useLocalizedStringFormatter-BIklF50D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DG_UrG-_.js";import"./Hidden-7JIM7zeN.js";import"./useLabel-BsvNbn_r.js";import"./useLabels-BAeRD83W.js";import"./useButton-zcjb-0dd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C6-4w0VX.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
