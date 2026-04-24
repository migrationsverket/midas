import{r as p,j as r}from"./iframe-u611P0T1.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-cPwIhWc1.js";import{B as c}from"./Button-D0hAEojt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C8WxcwQm.js";import"./useFocusRing-x1014Y4C.js";import"./utils-BdhmhbmB.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./animation-tAspbt5B.js";import"./PanelTitle-DnuZzlBE.js";import"./clsx-Ciqy0D92.js";import"./Text-BiFS0ps1.js";import"./Text-C1ITd__M.js";import"./x-BKnl8vZI.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DHuMXkEV.js";import"./Hidden-BwAa9Aqn.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CPF-h8vx.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
