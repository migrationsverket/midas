import{r as p,j as r}from"./iframe-DE3udc98.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CCqdQSKS.js";import{B as c}from"./Button-D9EvRssF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CKJ2TdtV.js";import"./useFocusRing-Zfbb9wtm.js";import"./utils-BZFqyVfK.js";import"./index-DsLsEgIC.js";import"./index-TlyN-2Ns.js";import"./animation-otoYotsg.js";import"./PanelTitle-BuRKMUi8.js";import"./clsx-Ciqy0D92.js";import"./Text-6UvYXfTp.js";import"./Text-B_7CE5hn.js";import"./x-Did9_kjk.js";import"./createLucideIcon-DBgVndRE.js";import"./useLocalizedStringFormatter-D9xfpa_H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-WyeeTejZ.js";import"./Hidden-B3N7s3Fy.js";import"./useLabel-BaazdV9R.js";import"./useLabels-CkuL1gsk.js";import"./useButton-iHShjyV-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-JI0zcCIW.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
