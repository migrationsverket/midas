import{r as p,j as r}from"./iframe-_pn10Gh5.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bs2QnMlz.js";import{B as c}from"./Button-D11fELwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B3g2_X4G.js";import"./useFocusRing-Du-3sSFw.js";import"./utils-Dxs9pDcB.js";import"./index-Cw5lWwtj.js";import"./index-8X9ryZUF.js";import"./animation-CXMfGWlf.js";import"./PanelTitle-DJBhVzm9.js";import"./clsx-Ciqy0D92.js";import"./Text-B6_JfJRz.js";import"./Text-CTGKw8zC.js";import"./x-LrHo8mCt.js";import"./createLucideIcon-B0iC-DBv.js";import"./useLocalizedStringFormatter-CE2BIbZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BbTH0gim.js";import"./Hidden-B59_1jQa.js";import"./useLabel-G0kMe1Tv.js";import"./useLabels-D2T-Rr0V.js";import"./useButton-C6hhINuJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrcSE3si.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
