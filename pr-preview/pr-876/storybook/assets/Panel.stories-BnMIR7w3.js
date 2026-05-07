import{r as p,j as r}from"./iframe-CARYWlMr.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-D0nYIYnl.js";import{B as c}from"./Button-CJO8gD-9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-PiJ1bWKV.js";import"./useFocusRing-eR43gCGN.js";import"./utils-CpzDmsYi.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./animation-Ca9PT5uM.js";import"./PanelTitle-CQ7dRzvm.js";import"./clsx-Ciqy0D92.js";import"./Text-C6YZuIwj.js";import"./Text-CYKeiFr8.js";import"./x-D6m6mvyo.js";import"./createLucideIcon-DMrxxS3N.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Czff7WUO.js";import"./Hidden-eR-QFzh5.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BdHdXLzS.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
