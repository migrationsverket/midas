import{r as p,j as r}from"./iframe-C-mFL-y5.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BUDdUTZn.js";import{B as c}from"./Button-DbyCtJuo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CYklShRN.js";import"./useFocusRing-BcE_QfPF.js";import"./utils-D1nXJARU.js";import"./index-BdrHlOMt.js";import"./index-D51JQnab.js";import"./animation-DcLd249e.js";import"./PanelTitle-68Gv10bm.js";import"./clsx-Ciqy0D92.js";import"./Text-CCSjYwix.js";import"./Text-BMqghmwo.js";import"./x-CfBPXENx.js";import"./createLucideIcon-B54AhZJE.js";import"./useLocalizedStringFormatter-BY-aq0y_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-muDgoa96.js";import"./Hidden-9ao8Y1ps.js";import"./useLabel-CZgom9Hr.js";import"./useLabels-Ch3SsTuY.js";import"./useButton-DAL_GXyF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CO1695QU.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
