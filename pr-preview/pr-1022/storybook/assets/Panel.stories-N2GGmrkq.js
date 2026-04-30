import{r as p,j as r}from"./iframe-C2VOWNy0.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-4jYs0C4X.js";import{B as c}from"./Button-BlyWqisU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnakpviL.js";import"./useFocusRing-tC1N5ZLd.js";import"./utils-DL-QRm3L.js";import"./index-BznYJ3G3.js";import"./index-HiVmXaez.js";import"./animation-qIg_zGPs.js";import"./PanelTitle-C2F9O7jL.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp8Xagmv.js";import"./Text-Cxs3PxNa.js";import"./x-DCx4jyMP.js";import"./createLucideIcon-DQ7ZZ5Wg.js";import"./useLocalizedStringFormatter-BAlXpd6A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-MPfMNKtf.js";import"./Hidden-BpHByyx6.js";import"./useLabel-CxUvvvjx.js";import"./useLabels-Szx34EwE.js";import"./useButton-BqHFL3UV.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-B4dPT57A.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
