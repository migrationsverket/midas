import{r as p,j as r}from"./iframe-DOHhMkQY.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DV7NvsvP.js";import{B as c}from"./Button-oYxwaeFk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DiXqzo5g.js";import"./useFocusRing-wtRS1Mc0.js";import"./utils-NiE-K3B6.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./animation-DRyBXNLF.js";import"./PanelTitle-BW-HNn1K.js";import"./clsx-Ciqy0D92.js";import"./Text-C8g4NeVM.js";import"./Text-DSHHPLHE.js";import"./x-CkxwwECO.js";import"./createLucideIcon-B4Q-AngK.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BgxX3mlh.js";import"./Hidden-CBYtsSM7.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DQY1cYBw.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
