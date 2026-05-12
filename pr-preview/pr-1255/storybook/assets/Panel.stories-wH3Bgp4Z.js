import{r as p,j as r}from"./iframe-Bc-UjTRz.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-B9ltfhX6.js";import{B as c}from"./Button-Ddjv6hkf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dz98cjw-.js";import"./useFocusRing-DmMd8vo8.js";import"./utils-CIlBOTwB.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./animation-D7sGwqcv.js";import"./PanelTitle-CU7EsIzi.js";import"./clsx-Ciqy0D92.js";import"./Text-EmoXsUsF.js";import"./Text-FaStHPve.js";import"./x-BlqzX1Dg.js";import"./createLucideIcon-Cvy5MTlk.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BBbybcMx.js";import"./Hidden-Bobixe9k.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-De98nctX.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
