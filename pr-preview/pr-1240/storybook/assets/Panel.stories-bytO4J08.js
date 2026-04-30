import{r as p,j as r}from"./iframe-DpTmCcsu.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CfgqeCGe.js";import{B as c}from"./Button-BML3brTK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Du11SrDH.js";import"./useFocusRing-p-K2lh1y.js";import"./utils-BkAa9oCc.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./animation-DUfhnEHD.js";import"./PanelTitle-u_Fnv6Mi.js";import"./clsx-Ciqy0D92.js";import"./Text-DZjjFYeH.js";import"./Text-C2ABOPKT.js";import"./x-Ch6sGbPf.js";import"./createLucideIcon-BVEhdOTx.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BsQKBFvZ.js";import"./Hidden-pLTvcnD_.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dp3u6Svq.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
