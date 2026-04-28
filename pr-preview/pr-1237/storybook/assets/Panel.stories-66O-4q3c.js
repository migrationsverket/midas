import{r as p,j as r}from"./iframe-4jp4gloH.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BVFnW_5V.js";import{B as c}from"./Button-CeMvvwss.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C8OaseGF.js";import"./useFocusRing-CHjnTN6p.js";import"./utils-VVEWI3IK.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./animation-CZi5NauF.js";import"./PanelTitle-BuMLNUHH.js";import"./clsx-Ciqy0D92.js";import"./Text-CaWuTb4e.js";import"./Text-DKG8In0g.js";import"./x-C0TcUHvQ.js";import"./createLucideIcon-BGZ9Sagt.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BmPmOVkQ.js";import"./Hidden-uxp9aDmP.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwExooWt.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
