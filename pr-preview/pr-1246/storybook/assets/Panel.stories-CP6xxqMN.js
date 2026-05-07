import{r as p,j as r}from"./iframe-Dy3Rw66z.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DnHVuvPo.js";import{B as c}from"./Button-Cl_Vf5i1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CujSUpWY.js";import"./useFocusRing-OfUNuA-J.js";import"./utils-DtZwbp1W.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./animation-D6VEx1B6.js";import"./PanelTitle-ChFOmq7O.js";import"./clsx-Ciqy0D92.js";import"./Text-BOYOdsAw.js";import"./Text-CjiLEpJA.js";import"./x-BY2wOibv.js";import"./createLucideIcon-CGcaihwO.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DWNrJ0qN.js";import"./Hidden-BiAiu52X.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ke2bwlqF.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
