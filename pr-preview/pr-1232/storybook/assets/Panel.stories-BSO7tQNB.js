import{r as p,j as r}from"./iframe-Bsq2Gecy.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-C-olYK8_.js";import{B as c}from"./Button-2sJltsSG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BhYy7T42.js";import"./useFocusRing-Duh6XNKg.js";import"./utils-BEAPqOk0.js";import"./index-Dx8tMrH0.js";import"./index-BRYV9rT7.js";import"./animation-BsUEYEjn.js";import"./PanelTitle-C3LjNPMG.js";import"./clsx-Ciqy0D92.js";import"./Text-CN4UKteu.js";import"./Text-BbliZ5q4.js";import"./x-BiXsmrYJ.js";import"./createLucideIcon-CYPfeOBH.js";import"./useLocalizedStringFormatter-mauUPS39.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dgb6FvaO.js";import"./Hidden-BUmnbfmf.js";import"./useLabel-DPyv_VKO.js";import"./useLabels-DBANshh8.js";import"./useButton-B8W9dyb3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dj8T0Unv.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
