import{r as p,j as r}from"./iframe-ByTr7nlQ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Cv01DUME.js";import{B as c}from"./Button-CH4Ce674.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B7X5e3Qm.js";import"./useFocusRing-BjdQLYQY.js";import"./utils-BtbeVzab.js";import"./index-tkq_ZtSc.js";import"./index-BqV0DkUs.js";import"./animation-BXN9_r3c.js";import"./PanelTitle-jYCCTTnt.js";import"./clsx-Ciqy0D92.js";import"./Text-dWwsRFEm.js";import"./Text-B83XfqSN.js";import"./x-CTnfdq1Z.js";import"./createLucideIcon-hQqGcF6U.js";import"./useLocalizedStringFormatter-B9QStVrX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BSq_-Fzo.js";import"./Hidden-BuUimY0Q.js";import"./useLabel-Dw4tdRRI.js";import"./useLabels-BssvX8bv.js";import"./useButton-CMclMGMy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-jMWhN52g.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
