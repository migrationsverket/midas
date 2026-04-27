import{r as p,j as r}from"./iframe-C1MoIoFQ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DNqQlmK5.js";import{B as c}from"./Button-Bh1vA6XB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BDHCwT0f.js";import"./useFocusRing-BDQMY-6N.js";import"./utils-Dd9KjGc9.js";import"./index-C81WqCTC.js";import"./index-CwePtk0Z.js";import"./animation-DDX6-0zQ.js";import"./PanelTitle-BzQePwE1.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ5m3zwb.js";import"./Text-BxVOdM76.js";import"./x-CreL89JY.js";import"./createLucideIcon-CpvMiuWS.js";import"./useLocalizedStringFormatter-DN-WkxQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bt2VcdxR.js";import"./Hidden-CQA8_prX.js";import"./useLabel-BXOmRBqN.js";import"./useLabels-ONT18L0d.js";import"./useButton-kMH8ZZTp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CrG6ZMtm.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
