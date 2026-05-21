import{r as p,j as r}from"./iframe-DWEKRq51.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Dfn-zowf.js";import{B as c}from"./Button-CpAjWvzP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BpWescyC.js";import"./useFocusRing-oyMjxI0a.js";import"./utils-CvB-FF5L.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./animation-DWKhMLsb.js";import"./PanelTitle-BPra7kEu.js";import"./clsx-Ciqy0D92.js";import"./Text-BNtmLJ5Q.js";import"./Text-DNCNcmFD.js";import"./x-DF20yF-2.js";import"./createLucideIcon-BuZoCqNM.js";import"./useLocalizedStringFormatter-BRwZafvm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bw7IRosA.js";import"./Hidden-6-qbYCow.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7nX5YNu.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
