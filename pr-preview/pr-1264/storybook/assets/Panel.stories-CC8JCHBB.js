import{r as p,j as r}from"./iframe-Bd9H7Vfx.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DOHyZ6ny.js";import{B as c}from"./Button-6v77JWTX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-075FDtLg.js";import"./useFocusRing-CnLPB_6u.js";import"./utils-DsmRkWxC.js";import"./index-BtBPjCGs.js";import"./index-CaWaKKHJ.js";import"./animation-C-EkjH-D.js";import"./PanelTitle-eZul9e1I.js";import"./clsx-Ciqy0D92.js";import"./Text-6cOQ6dAC.js";import"./Text-B_j7rweg.js";import"./x-CYsXEKRm.js";import"./createLucideIcon-DpMYq6qz.js";import"./useLocalizedStringFormatter-DCais5ZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BiRWLd5m.js";import"./Hidden-BsqjLjJT.js";import"./useLabel-lBHMCnWn.js";import"./useLabels-D4u2oU-D.js";import"./useButton-BfgVUf0f.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ytL0956d.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
