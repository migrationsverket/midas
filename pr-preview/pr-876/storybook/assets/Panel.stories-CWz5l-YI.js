import{r as p,j as r}from"./iframe-XCmPjT_D.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-_Lgqctkm.js";import{B as c}from"./Button-BoCs2oV6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJRuvBEJ.js";import"./useFocusRing-Ow3seqvj.js";import"./utils-UE4RAygH.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./animation-BYd3A0RE.js";import"./PanelTitle-iReLYvU4.js";import"./clsx-Ciqy0D92.js";import"./Text-RTx-QT4L.js";import"./Text-BuJILbtP.js";import"./x-DXC51em7.js";import"./createLucideIcon-dj1Mp7UM.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CNsl3901.js";import"./Hidden-YeCUxupi.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DTL2Sb6w.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
