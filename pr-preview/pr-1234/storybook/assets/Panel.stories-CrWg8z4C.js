import{r as p,j as r}from"./iframe-Cpv3N_Z7.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BzSd0DN3.js";import{B as c}from"./Button-DMMScCvt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BJT8QsD-.js";import"./useFocusRing-ypjCw1vR.js";import"./utils-Ds8IarQh.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./animation-DhQs2maB.js";import"./PanelTitle-DmU038Ge.js";import"./clsx-Ciqy0D92.js";import"./Text-CywvhZI_.js";import"./Text-CBaNxGOV.js";import"./x-F7c5yWaB.js";import"./createLucideIcon-CPN07aPY.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-yYifVGdg.js";import"./Hidden-CRjjTzwz.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-UFh7Pb-i.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
