import{r as p,j as r}from"./iframe-DD86HrH2.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-ANqINvMJ.js";import{B as c}from"./Button-BFvCKzsz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-k07B6mZK.js";import"./useFocusRing-BexPlixw.js";import"./utils-COpPBJUa.js";import"./index-BRqGpYZa.js";import"./index-c37RaAEE.js";import"./animation-CWGeksXq.js";import"./PanelTitle-q9BL0UDM.js";import"./clsx-Ciqy0D92.js";import"./Text-CmsABE1n.js";import"./Text-DuibH3v7.js";import"./x-BX_qSKOQ.js";import"./createLucideIcon-DzgrZqcN.js";import"./useLocalizedStringFormatter-rPCKOnn1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dlxsdkdy.js";import"./Hidden-DxNA2jAI.js";import"./useLabel-Bo2GeM8m.js";import"./useLabels-C7ZzmUeQ.js";import"./useButton-D2fUs3pD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DI8ejz9M.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
