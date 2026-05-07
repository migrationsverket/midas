import{r as p,j as r}from"./iframe-BNcGdhPn.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-C5OSEIUP.js";import{B as c}from"./Button-BgPh4XDv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BMDHyIEM.js";import"./useFocusRing-Cu9nwss3.js";import"./utils-BPT-EsfX.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./animation-aHSinPf_.js";import"./PanelTitle-BFAT2Tbi.js";import"./clsx-Ciqy0D92.js";import"./Text-CjSndq1s.js";import"./Text-Dc9-vgHL.js";import"./x-Cn8Z5y6x.js";import"./createLucideIcon-CIzIYBm5.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CSPLOvS6.js";import"./Hidden-D26ysej5.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BrOw3xQL.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
