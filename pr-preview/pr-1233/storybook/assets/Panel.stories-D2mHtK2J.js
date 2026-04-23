import{r as p,j as r}from"./iframe-CuHS7f-D.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-OFQKxnGu.js";import{B as c}from"./Button-CT4-7PnM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Kxt6bXWr.js";import"./useFocusRing-c3yj8psb.js";import"./utils-BFq6s5qx.js";import"./index-CUpZ4Q1o.js";import"./index-DHblwsjT.js";import"./animation-B7sxD1d7.js";import"./PanelTitle-yovl15KT.js";import"./clsx-Ciqy0D92.js";import"./Text-Suqt0mTK.js";import"./Text-wtPwzvaL.js";import"./x-9kI0zPFb.js";import"./createLucideIcon-WRij3kcs.js";import"./useLocalizedStringFormatter-D8LlPcXB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BHwczPOP.js";import"./Hidden-DQfRALgS.js";import"./useLabel-CUA0N587.js";import"./useLabels-D2MJHSWT.js";import"./useButton-DWFuO5be.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-sy5lx_M_.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
