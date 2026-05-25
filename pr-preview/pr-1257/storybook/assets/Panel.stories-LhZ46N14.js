import{r as p,j as r}from"./iframe-D_tI-LG6.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Codh8FBC.js";import{B as c}from"./Button-GXHEwtjb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0L1s8oX.js";import"./useFocusRing-DXI1PCCK.js";import"./utils-BmuT-4CL.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./animation-DMgKQrZS.js";import"./PanelTitle-BFUWdItI.js";import"./clsx-Ciqy0D92.js";import"./Text-C08wpa18.js";import"./Text-CULJXyXM.js";import"./x-QsPpT9iF.js";import"./createLucideIcon-Cjn_t3BL.js";import"./useLocalizedStringFormatter-CV-perCM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-hSHq5h1Q.js";import"./Hidden-D7jFD7Zq.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DzLaLv62.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
