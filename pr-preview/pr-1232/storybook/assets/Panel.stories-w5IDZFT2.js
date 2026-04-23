import{r as p,j as r}from"./iframe-CM9gzC_-.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bj1GCFF8.js";import{B as c}from"./Button-DVDe5XTB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D7RofSAB.js";import"./useFocusRing-Bz17EpSW.js";import"./utils-CXcBw8mX.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./animation-chQcOBj7.js";import"./PanelTitle-C17D4IYs.js";import"./clsx-Ciqy0D92.js";import"./Text-DvQTbzsU.js";import"./Text-Bft1iTTC.js";import"./x-CRr9CCYv.js";import"./createLucideIcon-gLaeDi4P.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-4PfHMxFE.js";import"./Hidden-D0XxjEDh.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CyPA52id.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
