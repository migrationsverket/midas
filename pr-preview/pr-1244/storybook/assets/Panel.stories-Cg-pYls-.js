import{r as p,j as r}from"./iframe-UnOrZDCo.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-2CoJbi6a.js";import{B as c}from"./Button-DZKUgycP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DgxohqQv.js";import"./useFocusRing-Bp9IxzZX.js";import"./utils-DKy0aGzr.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./animation-CyhtBLH4.js";import"./PanelTitle-Cx2KrbIe.js";import"./clsx-Ciqy0D92.js";import"./Text-BkvdwtUJ.js";import"./Text-C6YEGwEA.js";import"./x-DWogN0h0.js";import"./createLucideIcon-A1bnhQ0L.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bxrzo9c5.js";import"./Hidden-BgWTJ4vd.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ulNGrwFD.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
