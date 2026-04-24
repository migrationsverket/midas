import{r as p,j as r}from"./iframe-CSArLD6f.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BOhejcFm.js";import{B as c}from"./Button-CWyJ-riM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DaW5OxR1.js";import"./useFocusRing-IWQ1hWag.js";import"./utils-CCBKoGgU.js";import"./index-DIECvqes.js";import"./index-ywIekiaj.js";import"./animation-B7Vb3PF9.js";import"./PanelTitle-B-dnfQvv.js";import"./clsx-Ciqy0D92.js";import"./Text-DYmfOSM7.js";import"./Text-BU71TyQs.js";import"./x-C6uKjybT.js";import"./createLucideIcon-DROqj45j.js";import"./useLocalizedStringFormatter-BBjTg30D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CVc2L7QK.js";import"./Hidden-C3bxkDXx.js";import"./useLabel-6yPvvDeu.js";import"./useLabels-y6WFRAzY.js";import"./useButton-Ivv3_IdO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-46ezc1h_.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
