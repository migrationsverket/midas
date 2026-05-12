import{r as p,j as r}from"./iframe-DXV5yNVg.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BZsprr6A.js";import{B as c}from"./Button-BlXLhIpL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-gqmUfamI.js";import"./useFocusRing-D5WWltRW.js";import"./utils-D2X0V_ch.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./animation-Cln5OJdR.js";import"./PanelTitle-CA9l3tJN.js";import"./clsx-Ciqy0D92.js";import"./Text-CBeHelAL.js";import"./Text-CKvHTakV.js";import"./x-C8jYBObA.js";import"./createLucideIcon-BzcStSQs.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BFHR6RXp.js";import"./Hidden-D1mzcqIQ.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BEiLaXoC.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
