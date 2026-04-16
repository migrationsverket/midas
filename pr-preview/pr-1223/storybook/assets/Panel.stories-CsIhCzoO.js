import{r as p,j as r}from"./iframe-JYgA1KQi.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bz4clcND.js";import{B as c}from"./Button-MMPxX2Zb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CXI3Yibh.js";import"./useFocusRing-C06MErgQ.js";import"./utils-ChLKnNJg.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./animation-DS0nLW82.js";import"./PanelTitle-DMjArKbC.js";import"./clsx-Ciqy0D92.js";import"./Text-D50EAg-o.js";import"./Text-D9TOgsmN.js";import"./x-C1kwUoON.js";import"./createLucideIcon-UApEV6S6.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-w7gIenY9.js";import"./Hidden-0YDp5zxo.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cov8ReYV.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
