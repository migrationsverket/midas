import{r as p,j as r}from"./iframe-Dnz7kUlg.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-PwGtZXDk.js";import{B as c}from"./Button-DP2JC875.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Iqz0lmAp.js";import"./useFocusRing-Dzszu2Vy.js";import"./utils-CAf_-pht.js";import"./index-PhUC-dOo.js";import"./index-7KV9d02y.js";import"./animation-BpdwLEAR.js";import"./PanelTitle-YxJAo3cI.js";import"./clsx-Ciqy0D92.js";import"./Text-CtOjX911.js";import"./Text-B5WBJ4QI.js";import"./x-68yJIKBo.js";import"./createLucideIcon-C7dFuUAn.js";import"./useLocalizedStringFormatter-1LNK4MxE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C6iHgC9P.js";import"./Hidden-kcU4Hzb8.js";import"./useLabel-BUdrG9lA.js";import"./useLabels-YSILxijJ.js";import"./useButton-C3WMTaS3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dm7meOkg.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
