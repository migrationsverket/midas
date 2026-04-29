import{r as p,j as r}from"./iframe-D2jWlRbY.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Do44lUIA.js";import{B as c}from"./Button-Cx6hm3Pz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-TsNhVwVg.js";import"./useFocusRing-DCfgz9z-.js";import"./utils-BgILje6T.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./animation-Dbg56SLM.js";import"./PanelTitle-C3nHIv94.js";import"./clsx-Ciqy0D92.js";import"./Text-dwHB4N6Q.js";import"./Text-BlnXWmBt.js";import"./x-CXavF2G1.js";import"./createLucideIcon-3nESSKIe.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C20mW5cN.js";import"./Hidden-BQ9eCogI.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DcHq__qP.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
