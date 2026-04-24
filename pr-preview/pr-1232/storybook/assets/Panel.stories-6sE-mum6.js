import{r as p,j as r}from"./iframe-IJuqoOmk.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BzkP8h9F.js";import{B as c}from"./Button-DQFlWi2u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DL7f2Wr3.js";import"./useFocusRing-CkLNsvno.js";import"./utils-B1FkGHW3.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./animation-DFB-t0y7.js";import"./PanelTitle-BQkfEaMk.js";import"./clsx-Ciqy0D92.js";import"./Text-Dbv6zmdw.js";import"./Text-B8nSOSOw.js";import"./x-BhOMJrhI.js";import"./createLucideIcon-9OQLRRNP.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-E9T7cgY3.js";import"./Hidden-DzRh-64e.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bdyvpnxr.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
