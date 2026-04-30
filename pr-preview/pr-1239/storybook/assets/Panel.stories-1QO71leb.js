import{r as p,j as r}from"./iframe-CZvMPihu.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DO7-CzFZ.js";import{B as c}from"./Button-DHBiSvIz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-FTjsg_U3.js";import"./useFocusRing-B8JnrIcb.js";import"./utils-Cqj1DeIe.js";import"./index-GihrdCeH.js";import"./index-BkbhKg_o.js";import"./animation-C0DkVVOH.js";import"./PanelTitle-BcaaR_3I.js";import"./clsx-Ciqy0D92.js";import"./Text-DgbEXfJ4.js";import"./Text-Dw0gnghQ.js";import"./x-COwp3eV_.js";import"./createLucideIcon-w0hL8zu1.js";import"./useLocalizedStringFormatter-CQr6tlIE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-cyaqw3RD.js";import"./Hidden-DWCJo24h.js";import"./useLabel-CaU9RgyQ.js";import"./useLabels-DwUdsAUl.js";import"./useButton-DBJlOvpF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CgB8hx88.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
