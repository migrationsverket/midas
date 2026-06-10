import{r as p,j as r}from"./iframe-Bsevwbh7.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Ckw0SSwl.js";import{B as c}from"./Button-Dtn1R1va.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-J6z6hn1D.js";import"./useFocusRing-DBBFiexc.js";import"./utils-BjUYJUY7.js";import"./index-0Uf6_8UJ.js";import"./index-CpU-YPFf.js";import"./animation-_5bvZM2k.js";import"./PanelTitle-CJ7IuVVV.js";import"./clsx-Ciqy0D92.js";import"./Text-DtHsSzf4.js";import"./Text-C73-jwg3.js";import"./x-CPgoGNLm.js";import"./createLucideIcon-DFszj1HS.js";import"./useLocalizedStringFormatter-DXTgKJtU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BBqJQ0vW.js";import"./Hidden-BzElwnOz.js";import"./useLabel-DSPZXDj4.js";import"./useLabels-CDo4fr32.js";import"./useButton-CLSd70bQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrA1NcJU.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
