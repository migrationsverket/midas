import{r as p,j as r}from"./iframe-XBMlEgFB.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-AjXJxDZ1.js";import{B as c}from"./Button-CkmlK4go.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DEjZXUVu.js";import"./useFocusRing-DuQiYGUN.js";import"./utils-Cc5G8ViG.js";import"./index-fc9UsKt1.js";import"./index-DcS3vXtE.js";import"./animation-CuVT7vSv.js";import"./PanelTitle-Ckz1_rbd.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ6aPD5a.js";import"./Text-86sbONsT.js";import"./x-BNnKlOhJ.js";import"./createLucideIcon-CPar-zam.js";import"./useLocalizedStringFormatter-B3T1U-R5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BzKQzIb5.js";import"./Hidden-DmPMVnI9.js";import"./useLabel-CDvp7ZEq.js";import"./useLabels-BRX5yLgs.js";import"./useButton-Cl00IDBI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C4noZ6lE.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
