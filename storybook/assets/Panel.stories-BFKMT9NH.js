import{r as p,j as r}from"./iframe-Wguf_Vhy.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CjOqpByP.js";import{B as c}from"./Button-CZM9PIob.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BlF8Bv-9.js";import"./useFocusRing-BMPGM_9a.js";import"./utils-Cayzu3dl.js";import"./index-Bm1qHM15.js";import"./index-CtVtkHSB.js";import"./animation-DRum0qO9.js";import"./PanelTitle-B3tnkPvo.js";import"./clsx-Ciqy0D92.js";import"./Text-D697qKcG.js";import"./Text-BApMudW2.js";import"./x-C-si90AP.js";import"./createLucideIcon-2JkbB8ZB.js";import"./useLocalizedStringFormatter-CNmg9gE-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BzF2ZkA0.js";import"./Hidden-YVq9ta1r.js";import"./useLabel-tYdicVQf.js";import"./useLabels-vxl1SBYw.js";import"./useButton-CeOXStth.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-kcCEeVgO.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
