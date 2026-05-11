import{r as p,j as r}from"./iframe-9chkR4gz.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Fm-w90Uj.js";import{B as c}from"./Button-Ci--O4pG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLfBe7O7.js";import"./useFocusRing-WYiiq_Gm.js";import"./utils-BlWKHGoz.js";import"./index-CHvMuKX3.js";import"./index-N421M2ll.js";import"./animation-qvrRIcrq.js";import"./PanelTitle-L5CK5lhY.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp0Bwi6j.js";import"./Text-MA5MIJQJ.js";import"./x-2BQcGtH9.js";import"./createLucideIcon-BKKhyqi3.js";import"./useLocalizedStringFormatter-BvTLyPxY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D4nJHmzm.js";import"./Hidden-Bdzqqxyq.js";import"./useLabel-CMZqh7QI.js";import"./useLabels-Caurk_qr.js";import"./useButton-Bq4HZXfA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-V1FUVsZ9.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
