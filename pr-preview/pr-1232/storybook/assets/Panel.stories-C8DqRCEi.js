import{r as p,j as r}from"./iframe-yW9ZA3bb.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DbQ1lFXY.js";import{B as c}from"./Button-CVdu7ubL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-YFMNQnxY.js";import"./useFocusRing-Bwgr8eO9.js";import"./utils-BUJhr-Te.js";import"./index-BH1NNJD9.js";import"./index-XMJgY8GA.js";import"./animation-C84mhlBd.js";import"./PanelTitle-DUnJ629i.js";import"./clsx-Ciqy0D92.js";import"./Text-DMsq_JIv.js";import"./Text-Cihq6LYV.js";import"./x-DnrjJHU3.js";import"./createLucideIcon-Dzjc7ziG.js";import"./useLocalizedStringFormatter-bv3drFF0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dz51wr3r.js";import"./Hidden-zw4kT8e2.js";import"./useLabel-BCJoncEW.js";import"./useLabels-CW7YtnuA.js";import"./useButton-Cr-TXgCI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BLpKIy7O.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
