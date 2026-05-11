import{r as p,j as r}from"./iframe-CWKpWNkk.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DITTiJXv.js";import{B as c}from"./Button-WdsjujPh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DvoS3sKo.js";import"./useFocusRing-CpL5jV2W.js";import"./utils-DZaHz_Vy.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./animation-CuvQWEod.js";import"./PanelTitle-PBnp8QVE.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds_oVnWP.js";import"./Text-C7LaV_aB.js";import"./x-BvIy6Ou7.js";import"./createLucideIcon-DmuvpfBU.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-apqjWUoz.js";import"./Hidden-bt019v0w.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CUqCo7Kt.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
