import{r as p,j as r}from"./iframe-aJfE6oy0.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Dp1UWJyS.js";import{B as c}from"./Button-DTBmOwE-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-y9DEv0LS.js";import"./useFocusRing-ClTA_ULX.js";import"./utils-COacjnfx.js";import"./index-B_9hsNIp.js";import"./index-Nx_fUc0r.js";import"./animation-B1lZ6cxA.js";import"./PanelTitle-CQnOQpAX.js";import"./clsx-Ciqy0D92.js";import"./Text-CjkYZ3Fr.js";import"./Text-CBxYHQaa.js";import"./x-a-leTFOM.js";import"./createLucideIcon-CHcVE9D4.js";import"./useLocalizedStringFormatter-CUSht9QP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-gsjvyy6J.js";import"./Hidden-ijM5UvIg.js";import"./useLabel-BO6GqdSt.js";import"./useLabels-Jql3WVtl.js";import"./useButton-Bp12HEqD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5b4EtUm.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
