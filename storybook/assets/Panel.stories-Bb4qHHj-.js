import{r as p,j as r}from"./iframe-6UVP4gzF.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BbqVBFKZ.js";import{B as c}from"./Button-Dank0oAc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CSt56eyg.js";import"./useFocusRing-C5gCUZ-8.js";import"./utils-DOxsvNuE.js";import"./index-BBGJ7VjO.js";import"./index-BcvrcLrL.js";import"./animation-BICxc7P5.js";import"./PanelTitle-CHPiQWjf.js";import"./clsx-Ciqy0D92.js";import"./Text-C9xgYxgE.js";import"./Text-BTPWticG.js";import"./x-DRrtJvVE.js";import"./createLucideIcon-CZM_qkx4.js";import"./useLocalizedStringFormatter-BHlCXMz2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Cexa-7Qi.js";import"./Hidden-CM-w2pmZ.js";import"./useLabel-CWCmiQI5.js";import"./useLabels-DW_gz9ei.js";import"./useButton-BvM28DdE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Coo2bS_I.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
