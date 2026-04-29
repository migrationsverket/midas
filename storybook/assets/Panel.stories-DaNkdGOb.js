import{r as p,j as r}from"./iframe-HOh296WD.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-ELXdnD78.js";import{B as c}from"./Button-BYcFvZWu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bg0Nqr_y.js";import"./useFocusRing-DYVJSnUE.js";import"./utils-DZ8gsIC2.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./animation-B8NkdEJU.js";import"./PanelTitle-D2VNV5tz.js";import"./clsx-Ciqy0D92.js";import"./Text-Bv9eh8EN.js";import"./Text-B6416v9E.js";import"./x-DOfhN6f-.js";import"./createLucideIcon-NVlRk-Ze.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-WtWoZgXq.js";import"./Hidden-Cnam6lCF.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9pq-kak.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
