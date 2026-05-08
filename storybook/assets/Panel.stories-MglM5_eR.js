import{r as p,j as r}from"./iframe-DG7j_jog.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DuOPQIPa.js";import{B as c}from"./Button-KUvfLJ-A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0o-1ht4.js";import"./useFocusRing-CVU8iu1p.js";import"./utils-DlqTy2YG.js";import"./index-D_RAWMYY.js";import"./index-6UXGLZBQ.js";import"./animation-BGtZYYLT.js";import"./PanelTitle-CPeu8B6C.js";import"./clsx-Ciqy0D92.js";import"./Text-BYthEMg3.js";import"./Text-qxRWFYP_.js";import"./x-XMY5sYEL.js";import"./createLucideIcon-DciogvgI.js";import"./useLocalizedStringFormatter-C5OlVKSb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BXZJnhMA.js";import"./Hidden-C_hvN9In.js";import"./useLabel-C_5Blhsu.js";import"./useLabels-DqxGA6IW.js";import"./useButton-CBCUfkJC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DFIbjjfa.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
