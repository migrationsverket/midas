import{r as p,j as r}from"./iframe-BXzs3x0C.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D0oOvfaL.js";import{B as c}from"./Button-Bvp28ihJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DXnq9ftx.js";import"./useFocusRing-DAr84UVu.js";import"./utils-B7YpdZz-.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./animation-s3i8KAlX.js";import"./PanelTitle-DH90wZ0U.js";import"./clsx-Ciqy0D92.js";import"./Text-DYh5wK03.js";import"./Text-a0ukmHPT.js";import"./x-BmIXIepj.js";import"./createLucideIcon-DAXq1X88.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-_6aq1n6B.js";import"./Hidden-HpZioBNJ.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C6-1r25j.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
