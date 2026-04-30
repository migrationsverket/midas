import{r as p,j as r}from"./iframe-CbAzJO9N.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-eLWLct9K.js";import{B as c}from"./Button-Cly75nHE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DjmxdyV_.js";import"./useFocusRing-Cvfx5XiJ.js";import"./utils-B0jB1E5G.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./animation-Bskg7DBL.js";import"./PanelTitle-ObTiEKEB.js";import"./clsx-Ciqy0D92.js";import"./Text-B0GIqCDR.js";import"./Text-Cb6mQNAQ.js";import"./x-CrcasNM6.js";import"./createLucideIcon-lx1Wi4QI.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-_5CpY_LG.js";import"./Hidden-j-F0-7Lz.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dhjqn-q1.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
