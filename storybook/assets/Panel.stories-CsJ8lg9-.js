import{r as p,j as r}from"./iframe-Dmk7YWbP.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DmH7-lq1.js";import{B as c}from"./Button-BkclXew1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7rqhk2c.js";import"./useFocusRing-DQsZ5BW0.js";import"./utils-CZU1a0io.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./animation-DdapsBG5.js";import"./PanelTitle-sAKjb1pG.js";import"./clsx-Ciqy0D92.js";import"./Text--asL3Zcb.js";import"./Text-C-958akl.js";import"./x-CR8vb-29.js";import"./createLucideIcon-Dl46zayF.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-F5fRRQra.js";import"./Hidden-j21WNwyS.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CW18ePiJ.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
