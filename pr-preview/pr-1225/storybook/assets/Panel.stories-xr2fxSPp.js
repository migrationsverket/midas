import{r as p,j as r}from"./iframe-BsjwZNBI.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-ccSPwBwR.js";import{B as c}from"./Button--2JTIhzL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DSo337QI.js";import"./useFocusRing-C6pIr3Cw.js";import"./utils-DYyBIiF3.js";import"./index-3FCY3Hw8.js";import"./index-mMukGJMX.js";import"./animation-xaEmAiB_.js";import"./PanelTitle-BXQsjiEF.js";import"./clsx-Ciqy0D92.js";import"./Text-lI4j22eJ.js";import"./Text-CAl4ECWA.js";import"./x-DNQ7ZgzB.js";import"./createLucideIcon-wuciem56.js";import"./useLocalizedStringFormatter-DjpujwKI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-RMvP7Zi7.js";import"./Hidden-B7nyiEix.js";import"./useLabel-zdvU6Gzq.js";import"./useLabels-BUVWty__.js";import"./useButton-IYi6gdVO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BLVEBQnn.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
