import{r as p,j as r}from"./iframe-6VRTlOeH.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DWNUDuKe.js";import{B as c}from"./Button-CQiZspsF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-pI_U9-IG.js";import"./useFocusRing-DGxSfNEF.js";import"./utils-0kxM0y8Y.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./animation-8ekBFdXr.js";import"./PanelTitle-B7o5soI4.js";import"./clsx-Ciqy0D92.js";import"./Text-BxBOqGEA.js";import"./Text-CpKvHOvq.js";import"./x-CG_c6zFF.js";import"./createLucideIcon-LiZfCQUd.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DLPX01E3.js";import"./Hidden-DlTpFa-B.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BKsZ0nD0.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
