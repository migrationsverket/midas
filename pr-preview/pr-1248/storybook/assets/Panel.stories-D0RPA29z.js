import{r as p,j as r}from"./iframe-W4nJ5fCl.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DIITpE2B.js";import{B as c}from"./Button-Ic5TYFB0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1a0SOin.js";import"./useFocusRing-CHaZCxXN.js";import"./utils-BMpeEmxJ.js";import"./index-DEBoppYt.js";import"./index-rtxYMlVc.js";import"./animation-C46x7hVc.js";import"./PanelTitle-C_jUiXB9.js";import"./clsx-Ciqy0D92.js";import"./Text-AfrZysmO.js";import"./Text-7uFUvoRD.js";import"./x-DAORPWxu.js";import"./createLucideIcon-DlNL3tyz.js";import"./useLocalizedStringFormatter-B3mguR4f.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C7OXJw6w.js";import"./Hidden-DgKJ7wvz.js";import"./useLabel-BQqoQBPd.js";import"./useLabels-PCa51qdN.js";import"./useButton-CuGrHjI5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6HiRHb8s.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
