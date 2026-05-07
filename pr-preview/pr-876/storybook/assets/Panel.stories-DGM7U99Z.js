import{r as p,j as r}from"./iframe-DFebKffn.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-ByeyWAXv.js";import{B as c}from"./Button-CAFfH1xQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBnpHgMO.js";import"./useFocusRing-C3NPJWuR.js";import"./utils-J_OqfxpN.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./animation-CODwxVTq.js";import"./PanelTitle-BhotE6QK.js";import"./clsx-Ciqy0D92.js";import"./Text-B-BzwR12.js";import"./Text-jpnaKsAZ.js";import"./x-udLSc6dJ.js";import"./createLucideIcon-eIhYDTFQ.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BZDCT8jS.js";import"./Hidden-BATde4xQ.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-J2xwiqaN.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
