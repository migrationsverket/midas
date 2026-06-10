import{r as p,j as r}from"./iframe-y1u__L-8.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BtcRgoCH.js";import{B as c}from"./Button-DsGM-uqm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-SL3CCMLy.js";import"./useFocusRing-DrPDMwIf.js";import"./utils-Da8nMI6o.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./animation-C4rEa8ur.js";import"./PanelTitle-CYmR898Q.js";import"./clsx-Ciqy0D92.js";import"./Text-DI19gscT.js";import"./Text-LCGDIWeJ.js";import"./x-WeprrzHp.js";import"./createLucideIcon-C_M4Trqf.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bmc3JOkJ.js";import"./Hidden-DTarpjft.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-vMJRuQeL.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
