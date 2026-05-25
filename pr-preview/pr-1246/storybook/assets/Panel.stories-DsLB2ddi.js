import{r as p,j as r}from"./iframe-D9EwWE8M.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-OkPAjug-.js";import{B as c}from"./Button-EDaj_92B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D4c56bPB.js";import"./useFocusRing-BivnDFw5.js";import"./utils-VDmJlITu.js";import"./index-DAH1O1Iu.js";import"./index-BR2as-GY.js";import"./animation-tnsGfgn2.js";import"./PanelTitle-CBRT-yLg.js";import"./clsx-Ciqy0D92.js";import"./Text-D4q9EFLH.js";import"./Text-DTRaBlNQ.js";import"./x-Cx3dk2Wl.js";import"./createLucideIcon-DiPE6Ful.js";import"./useLocalizedStringFormatter-C2YbnlKW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-T_q17eYt.js";import"./Hidden-BsKNJICf.js";import"./useLabel-Bss4QgXi.js";import"./useLabels-C5o1EFbo.js";import"./useButton-BXxscPHn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D48zSaf7.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
