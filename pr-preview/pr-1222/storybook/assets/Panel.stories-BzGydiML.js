import{r as p,j as r}from"./iframe-DyVZO6Jd.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CdhiXePd.js";import{B as c}from"./Button-DFXCpOJf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DG-0bHR_.js";import"./useFocusRing-D32E8y-A.js";import"./utils-B4PADexm.js";import"./index-CPCUhuiH.js";import"./index-Co6SSMDt.js";import"./animation-BkovJave.js";import"./PanelTitle-D6-BwLsV.js";import"./clsx-Ciqy0D92.js";import"./Text-BNccgVJc.js";import"./Text-CipKPPoF.js";import"./x-bmse7woB.js";import"./createLucideIcon-CjUPJyft.js";import"./useLocalizedStringFormatter-Dt4-iLHW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B6InbNDy.js";import"./Hidden-DIN7ehBk.js";import"./useLabel-BjmSwcyg.js";import"./useLabels-C-NvnRdm.js";import"./useButton-B-EgkQxS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CBSXawwP.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
