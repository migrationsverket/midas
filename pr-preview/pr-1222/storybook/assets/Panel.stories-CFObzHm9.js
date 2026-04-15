import{r as p,j as r}from"./iframe-BTaDbuxu.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BIFKMbDI.js";import{B as c}from"./Button-Cy0fOhbL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CpRYTvJt.js";import"./useFocusRing-BHhR7R8K.js";import"./utils-1uCA-_jS.js";import"./index-Bb20tbAa.js";import"./index-D6fO5xxY.js";import"./animation-gv079wbl.js";import"./PanelTitle-CpUJWT3h.js";import"./clsx-Ciqy0D92.js";import"./Text-BgkGdlQT.js";import"./Text-DMH4kU1u.js";import"./x--XPZcdcH.js";import"./createLucideIcon-B7TgxeN_.js";import"./useLocalizedStringFormatter-Bl_scK9Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-V9h2N0md.js";import"./Hidden-DHaMiUFe.js";import"./useLabel-J_84CvRn.js";import"./useLabels-DegCLMnY.js";import"./useButton-S82UpuFO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqahcWwX.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
