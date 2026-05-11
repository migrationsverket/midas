import{r as p,j as r}from"./iframe-ZWFuO3rS.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CGlrD6ZA.js";import{B as c}from"./Button-DoVlW0aQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CaSPfHyR.js";import"./useFocusRing-CF4sVLCG.js";import"./utils-CXJrMo2L.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./animation-C8wgjS_2.js";import"./PanelTitle-DcFj4FWZ.js";import"./clsx-Ciqy0D92.js";import"./Text-uwKeqPz3.js";import"./Text-CW08t5T_.js";import"./x-C7_Ecf5k.js";import"./createLucideIcon-BJpb_u0I.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CuvBXfLT.js";import"./Hidden-DlAqJEIp.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-5iCcQboa.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
