import{r as p,j as r}from"./iframe-DjTiQbk5.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DSKTgDKb.js";import{B as c}from"./Button-DB82qK_z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DLtB8m1U.js";import"./useFocusRing-DMf_tcM8.js";import"./utils-ionmxpx_.js";import"./index-zhJsHxyL.js";import"./index-D7ZGMXkv.js";import"./animation-whHVtgH7.js";import"./PanelTitle-DFbV0YL_.js";import"./clsx-Ciqy0D92.js";import"./Text-Cem6pM3f.js";import"./Text-C_ch0y44.js";import"./x-B1F8kTQk.js";import"./createLucideIcon-CJ41k5Dv.js";import"./useLocalizedStringFormatter-Bs_4plvK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DA9JAHIV.js";import"./Hidden-CDamOlST.js";import"./useLabel-CLuSEdHo.js";import"./useLabels-BB0a4MRb.js";import"./useButton-CB170Mhz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQ7IztLz.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
