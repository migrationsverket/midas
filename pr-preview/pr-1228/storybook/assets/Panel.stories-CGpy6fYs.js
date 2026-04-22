import{r as p,j as r}from"./iframe-D0FqK1lb.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-120x1RPJ.js";import{B as c}from"./Button-BmBlwCLs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C8lWssw-.js";import"./useFocusRing-BD1a5Y2G.js";import"./utils-BMbNOyUc.js";import"./index-5HzkHfPe.js";import"./index-SIDrXvAb.js";import"./animation-B6V37QhV.js";import"./PanelTitle-DYSUANHW.js";import"./clsx-Ciqy0D92.js";import"./Text-DNU35Fvp.js";import"./Text-Du7gyEcw.js";import"./x-CjuTORk7.js";import"./createLucideIcon-B3FFrp2k.js";import"./useLocalizedStringFormatter-CgfN0QE1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-ASP2neQz.js";import"./Hidden-Dhm_4TsG.js";import"./useLabel-ky8NeYeA.js";import"./useLabels-Dak2com7.js";import"./useButton-pK_0UtxK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CFNdR6Qu.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
