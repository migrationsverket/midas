import{r as p,j as r}from"./iframe-BWYHj7v3.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-B9m9JMk1.js";import{B as c}from"./Button-DEdirHEy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DsTneGsr.js";import"./useFocusRing-Dyg95bXZ.js";import"./utils-D2pxdcvN.js";import"./index-7oEDLDPj.js";import"./index-9pfm-tft.js";import"./animation-D-_TVsaW.js";import"./PanelTitle-DrD-9ISV.js";import"./clsx-Ciqy0D92.js";import"./Text-7TDSW4-z.js";import"./Text-C4Gl7LUF.js";import"./x-BuNpvuba.js";import"./createLucideIcon-Dbzq6jGp.js";import"./useLocalizedStringFormatter-BfKsi0NO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-wGSaEaEO.js";import"./Hidden-B4Hoeqhu.js";import"./useLabel-CMMx43mY.js";import"./useLabels-DZpMO0Qr.js";import"./useButton-xg-vHwOd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CBrM5tre.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
