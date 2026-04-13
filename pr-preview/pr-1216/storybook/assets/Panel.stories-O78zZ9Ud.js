import{r as p,j as r}from"./iframe-CYSKzr0I.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BKDbptZv.js";import{B as c}from"./Button-BBfM7fHR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-YbLesBTN.js";import"./useFocusRing-BOmMevWO.js";import"./utils-ByZ0CNGg.js";import"./index-DJnpB-SU.js";import"./index-BKF9VLNz.js";import"./animation-B5VRkCog.js";import"./PanelTitle-Ba6fbDy-.js";import"./clsx-Ciqy0D92.js";import"./Text-BV0i2D1f.js";import"./Text-D-FhadIY.js";import"./x-BEC-7ATt.js";import"./createLucideIcon-DLSGmePH.js";import"./useLocalizedStringFormatter-D5bMO4Zi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DDpb5IsZ.js";import"./Hidden-nUwUlPG8.js";import"./useLabel-BSP_KiPN.js";import"./useLabels-CU1dbJnt.js";import"./useButton-DFwA3R9x.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5I2qOtz.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
