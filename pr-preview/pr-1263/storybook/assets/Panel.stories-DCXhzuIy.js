import{r as p,j as r}from"./iframe-gbJBpoDx.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-C7BoJOoU.js";import{B as c}from"./Button-Dpg56qc6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CVd5Xqz2.js";import"./useFocusRing-CdGrrviA.js";import"./utils-DUgHs6FT.js";import"./index-DGfeUZWJ.js";import"./index-h8QHE_zG.js";import"./animation-BadfckAr.js";import"./PanelTitle-LBBndXC7.js";import"./clsx-Ciqy0D92.js";import"./Text-zmsiiY3G.js";import"./Text-CE4EKtCP.js";import"./x-B_GjQ7rz.js";import"./createLucideIcon-C3IEX8hu.js";import"./useLocalizedStringFormatter-BrXpMl3k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C3tdjGV6.js";import"./Hidden-CvjG_1RQ.js";import"./useLabel-DBWjU4Cx.js";import"./useLabels-CGcCPDWZ.js";import"./useButton-BmNiDIvC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ck3fIWPQ.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
