import{r as p,j as r}from"./iframe-QXqfLk9Z.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CUuIu3we.js";import{B as c}from"./Button-D4lkIHuh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bn462BK_.js";import"./useFocusRing-BiM2zrLV.js";import"./utils-Dggx2A6b.js";import"./index-C07zKFPd.js";import"./index-C1BcpjW_.js";import"./animation-DC4VXQPy.js";import"./PanelTitle-BR4UUxIM.js";import"./clsx-Ciqy0D92.js";import"./Text-CFRxdyIy.js";import"./Text-By_cFIOS.js";import"./x-Bafa4ygD.js";import"./createLucideIcon-DWZDC5UL.js";import"./useLocalizedStringFormatter-CnCt5dkn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-66KmAdCV.js";import"./Hidden-BI9BX3f7.js";import"./useLabel-BM1McJfg.js";import"./useLabels-Chfv84nV.js";import"./useButton-CGi5uJBG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CPFiO8Sa.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
