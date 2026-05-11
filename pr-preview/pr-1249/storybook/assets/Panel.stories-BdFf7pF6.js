import{r as p,j as r}from"./iframe-BaDPacjd.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BIrOFO-r.js";import{B as c}from"./Button-BbMcm-s_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7Qyb7bs.js";import"./useFocusRing-CU-3-Yvs.js";import"./utils-DIlgsg9w.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./animation-CoR0ZV4_.js";import"./PanelTitle-Dd55kX4z.js";import"./clsx-Ciqy0D92.js";import"./Text-maDwTHxG.js";import"./Text-D9IIAziF.js";import"./x-CIJW-8OQ.js";import"./createLucideIcon-Cn3KNUPN.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-xqG4BSxe.js";import"./Hidden-wYkIMllK.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cc7_mEU0.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
