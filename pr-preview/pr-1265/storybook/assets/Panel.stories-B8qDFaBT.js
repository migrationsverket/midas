import{r as p,j as r}from"./iframe-B-lTFvoy.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CD93Lthc.js";import{B as c}from"./Button-aUjqyot5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CblkDfUl.js";import"./useFocusRing-1mXKXGvg.js";import"./utils-BvE7c9kg.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./animation-VgwKKx1S.js";import"./PanelTitle-CB8Dmn24.js";import"./clsx-Ciqy0D92.js";import"./Text-C1H4pvzD.js";import"./Text-BcmCG7pr.js";import"./x-CB9WHZye.js";import"./createLucideIcon-DTdT2pbF.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DxSNXM4z.js";import"./Hidden-DgGj9s0X.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BBaBjIdQ.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
