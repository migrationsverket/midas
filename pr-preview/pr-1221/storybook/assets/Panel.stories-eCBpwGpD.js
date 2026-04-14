import{r as p,j as r}from"./iframe-D1Yo_ASl.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bf1otub2.js";import{B as c}from"./Button-DcFviok1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DI2wiQtX.js";import"./useFocusRing-B1B12oVM.js";import"./utils-CtPCKdFP.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./animation-BLsBHLpF.js";import"./PanelTitle-BVcMbndJ.js";import"./clsx-Ciqy0D92.js";import"./Text-Cm1JxqTj.js";import"./Text-CC_-JfUc.js";import"./x-Dx4ggZKu.js";import"./createLucideIcon-B2W31-43.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-M2F6_Qz4.js";import"./Hidden-BeKvJ1wg.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BaAY3BDc.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
