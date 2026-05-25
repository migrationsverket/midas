import{r as p,j as r}from"./iframe-RhDbrXC3.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BjC_KeyD.js";import{B as c}from"./Button-ByeM9eCK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DqxoR-5f.js";import"./useFocusRing-gsVXsph9.js";import"./utils-DW8RLnA8.js";import"./index-Bq-QYhEQ.js";import"./index-D8RpSJOW.js";import"./animation-eyTzZ1lY.js";import"./PanelTitle-N454OEWl.js";import"./clsx-Ciqy0D92.js";import"./Text-CcqjDRD2.js";import"./Text-BjSdk3hx.js";import"./x-BCkyh0wS.js";import"./createLucideIcon-CO3bJS-y.js";import"./useLocalizedStringFormatter-C2RlB95E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B7Qh-IV7.js";import"./Hidden-UG-LGAyj.js";import"./useLabel-CGSCFlTW.js";import"./useLabels-BNdBxkb6.js";import"./useButton-CVLOUy-6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BacDaEj4.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
