import{r as p,j as r}from"./iframe-CxnkivWk.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-W1W3hZoJ.js";import{B as c}from"./Button-gL8l0gpP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DslVItvC.js";import"./useFocusRing-DuH0mTQw.js";import"./utils-D9spTQed.js";import"./index-D6J4-gBr.js";import"./index-BAOnkMzS.js";import"./animation-Cek9N8W3.js";import"./PanelTitle-CMmeyhnX.js";import"./clsx-Ciqy0D92.js";import"./Text-DEFKyO3K.js";import"./Text-C1PtMghN.js";import"./x-CesJmbak.js";import"./createLucideIcon-DTCD7Iny.js";import"./useLocalizedStringFormatter-Byuqcgqc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-bNvppfaR.js";import"./Hidden-DV_3dmeB.js";import"./useLabel-DAx5WPkE.js";import"./useLabels-Dvg-ZEsL.js";import"./useButton-C_SSCC3h.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CHjZ0tZh.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
