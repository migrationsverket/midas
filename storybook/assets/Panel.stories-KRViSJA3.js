import{r as p,j as r}from"./iframe-DOBgJI-y.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DkU2r_4c.js";import{B as c}from"./Button-u1ZblIyK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DuJeSPKv.js";import"./useFocusRing-BQr5-3Np.js";import"./utils-DiaRguFq.js";import"./index-X29No980.js";import"./index-mBWPsfNs.js";import"./animation-CeVmZFjW.js";import"./PanelTitle-CHHgU_1_.js";import"./clsx-Ciqy0D92.js";import"./Text-DFLO7oRJ.js";import"./Text-CGuvF1HY.js";import"./x-BRuwBP3I.js";import"./createLucideIcon-DcZtHlnh.js";import"./useLocalizedStringFormatter-B7OxMwVs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-iOZwwJt-.js";import"./Hidden-DRJRklAH.js";import"./useLabel-CwHTcLwx.js";import"./useLabels-DQJyw6TD.js";import"./useButton-q5vZ9ZE2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-mcCQW-OH.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
