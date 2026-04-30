import{r as p,j as r}from"./iframe-D83U9Jbw.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DW-fNaCq.js";import{B as c}from"./Button-ayYEduOo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDqmXAM3.js";import"./useFocusRing-Dv4ce94Y.js";import"./utils-C_gFKVIz.js";import"./index-WtMp4oUJ.js";import"./index-B1HH0YAv.js";import"./animation-D-EtJKnU.js";import"./PanelTitle-CGbsOW5O.js";import"./clsx-Ciqy0D92.js";import"./Text-CHHIfo1k.js";import"./Text-BuTxUZYo.js";import"./x-BzoY_Db8.js";import"./createLucideIcon-c1bwsPcC.js";import"./useLocalizedStringFormatter-CPm18cyu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-u3kjlioi.js";import"./Hidden-C0_hFnsL.js";import"./useLabel-Bzi_sPr8.js";import"./useLabels-DObCV9cv.js";import"./useButton-CLqFKr2I.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DuKcmmSu.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
