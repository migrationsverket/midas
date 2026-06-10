import{r as p,j as r}from"./iframe-DKbnbcYA.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CG53Xg8f.js";import{B as c}from"./Button-CxkBGpkE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-EM6fJcGZ.js";import"./useFocusRing-BgkQ1tOe.js";import"./utils-2X7WrewA.js";import"./index-lY0kbfn5.js";import"./index-B5M4WY2m.js";import"./animation-DfD0IPvH.js";import"./PanelTitle-Cmx_NuK1.js";import"./clsx-Ciqy0D92.js";import"./Text-8emuzLV6.js";import"./Text-2zkyeVit.js";import"./x-BxlX_nCp.js";import"./createLucideIcon-CRlO1Apy.js";import"./useLocalizedStringFormatter-CoGMLhd_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B9rMpOVw.js";import"./Hidden-DVrzkHs4.js";import"./useLabel-BTu-VYKR.js";import"./useLabels-4lND4b_p.js";import"./useButton-Zx4CPHJq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BcPnQgXd.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
