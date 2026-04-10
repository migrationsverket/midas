import{r as p,j as r}from"./iframe-ntYsoI3q.js";import{P as n,M as i,L as m,a as u}from"./LayoutContent-C6hpv4mJ.js";import{B as c}from"./Button-Cjgmk6w1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DrHB4IJb.js";import"./useFocusRing-D9nk-FO4.js";import"./utils-BJHfATlu.js";import"./index-PknmiIVy.js";import"./index-FJM3BeIO.js";import"./animation-DcS6Wy41.js";import"./PanelTitle-CN2rKOvt.js";import"./clsx-Ciqy0D92.js";import"./Text-DcoyKAFk.js";import"./Text-DeKUVabC.js";import"./x-DVmtkFru.js";import"./createLucideIcon-DVRKw96B.js";import"./useLocalizedStringFormatter-CkAS-7e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Czul53LM.js";import"./Hidden-BJHd_AQT.js";import"./useLabel-Dq9C3dm5.js";import"./useLabels-xSNV-NpM.js";import"./useButton-BE2eqaFK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Tbx6jsXW.js";const D={component:n,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,s]=p.useState(!0);return r.jsxs(i,{children:[r.jsx(c,{onPress:()=>s(!0),children:"Open panel"}),r.jsx(n,{...o,isOpen:a,onOpenChange:s})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <Main>
        <Button onPress={() => setIsOpen(true)}>Open panel</Button>
        <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </Main>;
  }
}`,...t.parameters?.docs?.source}}};const F=["Primary","Controlled"];export{t as Controlled,e as Primary,F as __namedExportsOrder,D as default};
