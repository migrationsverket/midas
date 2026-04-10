import{r as p,j as r}from"./iframe-O2McX3yB.js";import{P as n,M as i,L as m,a as u}from"./Main-CrUFB42b.js";import{B as c}from"./Button-D2h_fsiV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useControlledState-CDscPa5k.js";import"./useFocusRing-C_4jX8C9.js";import"./utils-DO-wSHzc.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./animation-t_x6ksxO.js";import"./PanelTitle-DKKmG_VN.js";import"./clsx-Ciqy0D92.js";import"./Text-YZ7QSVuR.js";import"./Text-7Ipy1BR9.js";import"./x-Bexz8DwZ.js";import"./createLucideIcon-C4xn0wXs.js";import"./Button-2hnImx6E.js";import"./Hidden-kbzwSHo-.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVECtPk8.js";const D={component:n,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,s]=p.useState(!0);return r.jsxs(i,{children:[r.jsx(c,{onPress:()=>s(!0),children:"Open panel"}),r.jsx(n,{...o,isOpen:a,onOpenChange:s})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
