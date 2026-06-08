import{r as p,j as r}from"./iframe-C8RsNfgP.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-lwefMPFx.js";import{B as c}from"./Button-Cfe9iLIu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-LFxBnaBs.js";import"./useFocusRing-Cez6wS5f.js";import"./utils-CoNQ4mwz.js";import"./index-D8K4fX28.js";import"./index-Di6EYout.js";import"./animation-YvurAC38.js";import"./PanelTitle-S6TejPhk.js";import"./clsx-Ciqy0D92.js";import"./Text-C2A-yzmp.js";import"./Text-COO1Tk0x.js";import"./x-D8ZbVwK0.js";import"./createLucideIcon-BIQyFJ8n.js";import"./useLocalizedStringFormatter-CdlaUYB9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-A6crx_HM.js";import"./Hidden-BIvUufzC.js";import"./useLabel-DX_Dt9l7.js";import"./useLabels-IRIn0Uy0.js";import"./useButton-CHMv5Y4_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7WZRGTo.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
