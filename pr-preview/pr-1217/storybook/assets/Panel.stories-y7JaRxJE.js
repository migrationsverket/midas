import{r as p,j as r}from"./iframe-DG8sLAOy.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D_8p2959.js";import{B as c}from"./Button-D1u3zQ32.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-RiscT5mJ.js";import"./useFocusRing-mNkvIRfY.js";import"./utils-DLAFhier.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./animation-X3MQfTqk.js";import"./PanelTitle-D_JsJGRF.js";import"./clsx-Ciqy0D92.js";import"./Text-BnRQmBDY.js";import"./Text-BL7Sfi9Q.js";import"./x-BslDqAEV.js";import"./createLucideIcon-CiRaq98A.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-e9hh4zze.js";import"./Hidden-BYn-neub.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CYqYwLo_.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
