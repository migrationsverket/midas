import{r as p,j as r}from"./iframe-BBl_wx91.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DBC0_1NR.js";import{B as c}from"./Button-PgTnRDDW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0NTyUH5.js";import"./useFocusRing-BjKrvikX.js";import"./utils-D68juJtw.js";import"./index-CTqkaM45.js";import"./index-CMA0QeJ6.js";import"./animation-BRnqSuLj.js";import"./PanelTitle-B41fXEiD.js";import"./clsx-Ciqy0D92.js";import"./Text-B468MR_I.js";import"./Text-D6DSOlat.js";import"./x-BiTKY_Ox.js";import"./createLucideIcon-ie2vk2qe.js";import"./useLocalizedStringFormatter-2_5hwCHH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-FXCxhgQI.js";import"./Hidden-D6G0FIbn.js";import"./useLabel-BOj_yASA.js";import"./useLabels-D9SZevKG.js";import"./useButton-EvSX0Y-8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DEPyp4m6.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
