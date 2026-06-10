import{r as p,j as r}from"./iframe-BEEFzEsx.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-B2z2jygc.js";import{B as c}from"./Button-BTzHjp2C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DWXRJogA.js";import"./useFocusRing-DayYpa6h.js";import"./utils-BVGeTo1z.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./animation-CcmLfJBi.js";import"./PanelTitle-BmIXNLkz.js";import"./clsx-Ciqy0D92.js";import"./Text-UbV7blhr.js";import"./Text-C3TPO5Ck.js";import"./x-BRbO8G8P.js";import"./createLucideIcon-DyvpJvxd.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DEUQgxtQ.js";import"./Hidden-C5MrPpGY.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CkEbrnwS.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
