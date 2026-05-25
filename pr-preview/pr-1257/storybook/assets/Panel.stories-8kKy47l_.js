import{r as p,j as r}from"./iframe-DHSFkIsy.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-at9ahSt2.js";import{B as c}from"./Button-BCxQv38d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BC5iZhUu.js";import"./useFocusRing-CNpZwhdZ.js";import"./utils-CZbTr4bL.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./animation-BfJYb7vS.js";import"./PanelTitle-CRWPP1uU.js";import"./clsx-Ciqy0D92.js";import"./Text-CE2-J5ib.js";import"./Text-Dlktz5kY.js";import"./x-Ca2lmhP_.js";import"./createLucideIcon-Bhv8-C3S.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DwFLZ-vl.js";import"./Hidden-N-s-Oc-P.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CdVi298y.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
