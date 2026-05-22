import{r as p,j as r}from"./iframe-DdBf1SRL.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BtGRapVH.js";import{B as c}from"./Button-BcNKuXh9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-aSEVnCiN.js";import"./useFocusRing-B7kbWjnk.js";import"./utils-DMchxVzX.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./animation-C5_-IwUt.js";import"./PanelTitle-BPY4Sdcd.js";import"./clsx-Ciqy0D92.js";import"./Text-Crsqw0eJ.js";import"./Text-BubyCo8k.js";import"./x-DQUfmUsq.js";import"./createLucideIcon-DMjdayIV.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DfVfuE86.js";import"./Hidden-DnCBwxQo.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-TAipgByj.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
