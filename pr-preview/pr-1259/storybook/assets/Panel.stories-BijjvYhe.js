import{r as p,j as r}from"./iframe-BtoRqfbN.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-B44DpoNA.js";import{B as c}from"./Button-Dz0YcLF0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-acke6wY8.js";import"./useFocusRing-CPJmXdz2.js";import"./utils-D3T2l2Oh.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./animation-CuqN4n3N.js";import"./PanelTitle-DvtjUdZI.js";import"./clsx-Ciqy0D92.js";import"./Text-UZHsyA5K.js";import"./Text-x1siHFmD.js";import"./x-DBRu_Ryo.js";import"./createLucideIcon-BGwZIy7f.js";import"./useLocalizedStringFormatter-BRT64aav.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-D0NLyYor.js";import"./Hidden-DmNqBwSB.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DH8wexDg.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
