import{r as p,j as r}from"./iframe-CCfLQD4z.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BkUeHCzs.js";import{B as c}from"./Button-DJVlOFkK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dk8QnFuU.js";import"./useFocusRing-EcVjUqlw.js";import"./utils-6cPY1nOj.js";import"./index-NgQ47qPP.js";import"./index-Cfi_h6H9.js";import"./animation-BUDg1ogU.js";import"./PanelTitle-DdFJo4_6.js";import"./clsx-Ciqy0D92.js";import"./Text-DZ79u1iH.js";import"./Text-GlhP0ZNt.js";import"./x-Bib5fKG4.js";import"./createLucideIcon-DWEKCqmg.js";import"./useLocalizedStringFormatter-BZhLyzTy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CmCCWuSi.js";import"./Hidden-DWjl7TwO.js";import"./useLabel-BG1zRKxN.js";import"./useLabels-CRZ-4cnr.js";import"./useButton-BiGsVslD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BkMvzT9s.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
