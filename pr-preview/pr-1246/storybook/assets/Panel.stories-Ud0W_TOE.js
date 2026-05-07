import{r as p,j as r}from"./iframe-CkvNFrYQ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-80VTWVIL.js";import{B as c}from"./Button-D17vaezS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dmid9ay2.js";import"./useFocusRing-DW5q3Sep.js";import"./utils-BgwUMJBy.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./animation-By-NOSqI.js";import"./PanelTitle-DxpzcU6L.js";import"./clsx-Ciqy0D92.js";import"./Text-DsB1bVac.js";import"./Text-DIpvUzoX.js";import"./x-DsRbZUfb.js";import"./createLucideIcon-CeEwKqzx.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-vUvfAWls.js";import"./Hidden-Bsx77DlA.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DC7QTvoq.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
