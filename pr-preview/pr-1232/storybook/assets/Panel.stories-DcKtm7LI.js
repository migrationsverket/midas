import{r as p,j as r}from"./iframe-Cu_fcUaC.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BpQG9HL0.js";import{B as c}from"./Button-DbgphF2R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cc2dWwpP.js";import"./useFocusRing-Dsj_Rw-j.js";import"./utils-mLyOZ5qk.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./animation-YFYmKfCX.js";import"./PanelTitle-DI3n253b.js";import"./clsx-Ciqy0D92.js";import"./Text-CJt2oElV.js";import"./Text-BcWcM5HD.js";import"./x-_aLctjLl.js";import"./createLucideIcon-B_FH30vd.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BJB-9Zcd.js";import"./Hidden-D1QpNxPu.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bo9ouMME.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
