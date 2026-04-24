import{r as p,j as r}from"./iframe-C2ifzLFW.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DE7DGdTN.js";import{B as c}from"./Button-DtzYCx6b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DIVk5_t_.js";import"./useFocusRing-D5sowTP0.js";import"./utils-73qIUJkS.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./animation-BXuqJHQy.js";import"./PanelTitle-D1PGQi2D.js";import"./clsx-Ciqy0D92.js";import"./Text-BHGhTSao.js";import"./Text-CD2yXDFK.js";import"./x-Dn6Rxjbp.js";import"./createLucideIcon-BoPfjMKr.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DrEkBHNm.js";import"./Hidden-arruSKBU.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1aqafDE.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
