import{r as p,j as r}from"./iframe-BE6opBBQ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BRA0bz0O.js";import{B as c}from"./Button-C8N-CVIU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKq-QKGp.js";import"./useFocusRing-B2vnni9l.js";import"./utils-C8ofSvVg.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./animation-GI6DuVjb.js";import"./PanelTitle-CZ9C8S8_.js";import"./clsx-Ciqy0D92.js";import"./Text-DXKcxlic.js";import"./Text-DssX7oue.js";import"./x-D6OAu6QL.js";import"./createLucideIcon-BCuYuRMM.js";import"./useLocalizedStringFormatter-CwdjWiaw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-33q5ghqc.js";import"./Hidden-ZOBOpRNs.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-TQ9t5iSG.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
