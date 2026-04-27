import{r as p,j as r}from"./iframe-Cen0ae1x.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-245tHy5e.js";import{B as c}from"./Button-CA3EkwoT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-JSkmdR3M.js";import"./useFocusRing-DL4UMbrb.js";import"./utils-IBVWRADw.js";import"./index--9VSKs4e.js";import"./index-CAAqL2lM.js";import"./animation-BX_o3H3w.js";import"./PanelTitle-Bs_3Cu4Z.js";import"./clsx-Ciqy0D92.js";import"./Text-CTsFsWIz.js";import"./Text-DIYKRKOx.js";import"./x-DckwiAmz.js";import"./createLucideIcon-obLWYbEm.js";import"./useLocalizedStringFormatter-4r_hlzhF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CH2bisSo.js";import"./Hidden-DeFJbGnS.js";import"./useLabel-DSnRldp0.js";import"./useLabels-D8TiPXss.js";import"./useButton-SUZhILTb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-AN2tdixc.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
