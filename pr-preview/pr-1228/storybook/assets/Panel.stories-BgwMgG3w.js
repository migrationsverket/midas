import{r as p,j as r}from"./iframe-Bv6YAP-H.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Dy5RBi5K.js";import{B as c}from"./Button-BH5A087H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CcT1w6-I.js";import"./useFocusRing-vLQdNIKu.js";import"./utils-aKxnkjqL.js";import"./index-wSw7Ttva.js";import"./index-B4SFKLec.js";import"./animation-CGnHuomg.js";import"./PanelTitle-CMcC1LaY.js";import"./clsx-Ciqy0D92.js";import"./Text-DPW0E3tR.js";import"./Text-CrHwImJG.js";import"./x-BdrId5d4.js";import"./createLucideIcon-DlyUrHS2.js";import"./useLocalizedStringFormatter-Bn39dXyI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-1f9Yc7Mz.js";import"./Hidden-DhnPUChE.js";import"./useLabel-D6pTBZvb.js";import"./useLabels-DAH0at8A.js";import"./useButton-B6E3_51_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DEiD2GQe.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
