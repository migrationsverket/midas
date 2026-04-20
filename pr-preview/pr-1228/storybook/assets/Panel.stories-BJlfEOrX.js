import{r as p,j as r}from"./iframe-DChMXCrL.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Qz2XLhrj.js";import{B as c}from"./Button-5OLTPx-2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ovwSt6hg.js";import"./useFocusRing-BpLKk3JS.js";import"./utils-BplLbAcs.js";import"./index-BtCGvG5N.js";import"./index-Q46JL2nn.js";import"./animation-9d_KvjGm.js";import"./PanelTitle-CyJrLFQ-.js";import"./clsx-Ciqy0D92.js";import"./Text-CYuY9x3r.js";import"./Text-TXgPlLZT.js";import"./x-DKchXy5q.js";import"./createLucideIcon-DiQgCGzM.js";import"./useLocalizedStringFormatter-t-oeGUHJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-MapMtsGv.js";import"./Hidden-H9l0LVv0.js";import"./useLabel-CG1tGj69.js";import"./useLabels-4tTwJsFS.js";import"./useButton-yAWY8-j7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-O06opA_U.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
