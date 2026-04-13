import{r as p,j as r}from"./iframe-DHxMEyk6.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bpok93Dh.js";import{B as c}from"./Button-DTaKScGa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DToB7jqX.js";import"./useFocusRing-BkOUJVy3.js";import"./utils-C_yGkqEQ.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./animation-CVkPTCT8.js";import"./PanelTitle-DACicCv8.js";import"./clsx-Ciqy0D92.js";import"./Text-CSs2JSPr.js";import"./Text-C0s7dJ5a.js";import"./x-BasF0MYi.js";import"./createLucideIcon-uDhXojJY.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BpC7kCwC.js";import"./Hidden-CkZgcLGH.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-oG0E9KZu.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
