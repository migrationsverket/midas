import{r as p,j as r}from"./iframe-CLvF6Z40.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DmnvJWwd.js";import{B as c}from"./Button-CVKy4fAF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-aZqY8xT5.js";import"./useFocusRing-DA8pMfhu.js";import"./utils-CJoHmjoo.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./animation-q93KrM-a.js";import"./PanelTitle-B4THHqVt.js";import"./clsx-Ciqy0D92.js";import"./Text-DSAnxviu.js";import"./Text-D9kACuMI.js";import"./x-DROlonvj.js";import"./createLucideIcon-BkSuVCZc.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-IXlIqRd7.js";import"./Hidden-DDGoYcTF.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ckm5OILG.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
