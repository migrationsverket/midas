import{r as p,j as r}from"./iframe-1_iu-uVv.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-COFn3754.js";import{B as c}from"./Button-3xGdYp6o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DeicQIqX.js";import"./useFocusRing-CLMMEccq.js";import"./utils-D8XDfVqo.js";import"./index-DaFkej-O.js";import"./index-8FVPoEJc.js";import"./animation-Df6nzKP2.js";import"./PanelTitle-J2vD6v3B.js";import"./clsx-Ciqy0D92.js";import"./Text-Cvi52zQo.js";import"./Text-Cs17jUaF.js";import"./x-BuusROzJ.js";import"./createLucideIcon-BbCelBYg.js";import"./useLocalizedStringFormatter-ByENZTtA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C-cqr9pq.js";import"./Hidden-7JO0YZlM.js";import"./useLabel-DW7Clw8B.js";import"./useLabels-CD6qsxzR.js";import"./useButton-QeuVXvqT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CLNANI2G.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
