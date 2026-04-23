import{r as p,j as r}from"./iframe-CUW_txz6.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CeM8BMfy.js";import{B as c}from"./Button-yberURbp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BuDrosJG.js";import"./useFocusRing-Ow8z5BMJ.js";import"./utils-BrfeFFy9.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./animation-BGNa_fMh.js";import"./PanelTitle-Cdi8X0GG.js";import"./clsx-Ciqy0D92.js";import"./Text-DvPi9pFM.js";import"./Text-Bi2kB5GC.js";import"./x-pwSsQ8xV.js";import"./createLucideIcon-Cc0DwuLE.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DJT34vsz.js";import"./Hidden-C6dZGZNF.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2eTcyAK.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
