import{r as p,j as r}from"./iframe-CYBQlmyh.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D-BhEOOR.js";import{B as c}from"./Button-V8iqrR4o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-bAyCG7NY.js";import"./useFocusRing-Cpo9J0gL.js";import"./utils-CjHCv0XO.js";import"./index-K5PVphWA.js";import"./index-DiuA4cA3.js";import"./animation-DyEnl83n.js";import"./PanelTitle-BCh7BqfG.js";import"./clsx-Ciqy0D92.js";import"./Text-B63Qy0n5.js";import"./Text-CXwGYn4Y.js";import"./x-J2AEua27.js";import"./createLucideIcon-CC51vNZq.js";import"./useLocalizedStringFormatter-BE4MzKLw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BOrWC_ny.js";import"./Hidden-CqWz7xzF.js";import"./useLabel-CFOjik7v.js";import"./useLabels-L-SzfrFb.js";import"./useButton-BfOUikWI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DCVaQ010.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
