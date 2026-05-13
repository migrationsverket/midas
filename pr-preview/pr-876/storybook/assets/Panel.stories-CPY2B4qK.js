import{r as p,j as r}from"./iframe-DK3mrAyo.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Cva-DR-j.js";import{B as c}from"./Button-BKk1KYPK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-c72KLHwF.js";import"./useFocusRing-GGCG3XqX.js";import"./utils-KWB3V7Ew.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./animation-DuQmEC3G.js";import"./PanelTitle-CH2VAQ3w.js";import"./clsx-Ciqy0D92.js";import"./Text-BG4EGVIm.js";import"./Text-ChQBgCn7.js";import"./x-Cj5OGhdg.js";import"./createLucideIcon-ZHubZ-OE.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Yd8CTw2L.js";import"./Hidden-B9O9f11_.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CuCKnYKC.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
