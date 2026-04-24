import{r as p,j as r}from"./iframe-DoRPDZ-n.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BHy38EVS.js";import{B as c}from"./Button-qJNZwD8g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ddc7Cp2E.js";import"./useFocusRing-Cpj_6FFs.js";import"./utils-BzVzQHtN.js";import"./index-BpvQun69.js";import"./index-dxvpTbK-.js";import"./animation-C_aNgu1E.js";import"./PanelTitle-qM90E7-Q.js";import"./clsx-Ciqy0D92.js";import"./Text-BM5KdGqj.js";import"./Text-CSSrkUG7.js";import"./x-BHilmKwO.js";import"./createLucideIcon-CiSuNVkc.js";import"./useLocalizedStringFormatter-Ckjeog25.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B0xwVoX4.js";import"./Hidden-Kgphbk6f.js";import"./useLabel-D--L_qeT.js";import"./useLabels-6Au6pJO1.js";import"./useButton-C_Cxj7yi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bcu1ZANu.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
