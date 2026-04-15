import{r as p,j as r}from"./iframe-Co8ouiR0.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DHwPwtRN.js";import{B as c}from"./Button-BOgReN_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CaplsX9m.js";import"./useFocusRing-Dxdgl-gF.js";import"./utils-CaTFkK5X.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./animation-CnViS2qk.js";import"./PanelTitle-BCZlEpvv.js";import"./clsx-Ciqy0D92.js";import"./Text-B5_C6N3n.js";import"./Text-DtfYRBf1.js";import"./x-BzzbKOkA.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BP9TK4Xh.js";import"./Hidden-TJ2PhhZw.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DHiWfcqJ.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
