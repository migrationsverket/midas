import{r as p,j as r}from"./iframe-D49zqrLc.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BIRlMsk7.js";import{B as c}from"./Button-CsehA-0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DfjmYRRj.js";import"./useFocusRing--JbYat2w.js";import"./utils-DdKwVxXO.js";import"./index-CIcuBPP4.js";import"./index-Gblu_uca.js";import"./animation-BSR9xidZ.js";import"./PanelTitle-lFpa7b1w.js";import"./clsx-Ciqy0D92.js";import"./Text-BHKGtyr7.js";import"./Text-gxnzhlQB.js";import"./x-DZqz0o0J.js";import"./createLucideIcon-DrHl8fY3.js";import"./useLocalizedStringFormatter-D9dAP4k5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-J3Iz-Is0.js";import"./Hidden-BxWMNY2q.js";import"./useLabel-DknYPbVU.js";import"./useLabels-CkRRpiK4.js";import"./useButton-CxrKCV_E.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BCA1C0LI.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
