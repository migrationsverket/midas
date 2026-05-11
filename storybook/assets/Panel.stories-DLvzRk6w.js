import{r as p,j as r}from"./iframe-BFuflVuT.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Tivejepi.js";import{B as c}from"./Button-B_e2-Iv-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D_V-QnC2.js";import"./useFocusRing-BGj7TLCb.js";import"./utils-CVETsxUB.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./animation-DDwZiepJ.js";import"./PanelTitle-BNvB5NRX.js";import"./clsx-Ciqy0D92.js";import"./Text-Cd7qZGor.js";import"./Text-50232H9V.js";import"./x-Dlq0AP5X.js";import"./createLucideIcon-CY2uueIZ.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Bvi4kTfB.js";import"./Hidden-CWAGeXUM.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ChouFcZQ.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
