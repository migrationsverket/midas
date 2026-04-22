import{r as p,j as r}from"./iframe-xMXigoWy.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Ck1zBGYR.js";import{B as c}from"./Button-taOyTeEm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CfBsYb3v.js";import"./useFocusRing-DfQ0yX8G.js";import"./utils-YGWrB3Vf.js";import"./index-BSZ5eAzw.js";import"./index-DHIIVQ80.js";import"./animation-B3N1gk5B.js";import"./PanelTitle-D4QrCWeC.js";import"./clsx-Ciqy0D92.js";import"./Text-CdJ1E4Uo.js";import"./Text-D19M6ZHM.js";import"./x-B6O-7LlT.js";import"./createLucideIcon-DEQfBkzv.js";import"./useLocalizedStringFormatter-DsDwc5ZW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BdNSmPg8.js";import"./Hidden-DphnPAPv.js";import"./useLabel-CBmnmGxA.js";import"./useLabels-BLdk5JBQ.js";import"./useButton-Bw607H0U.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DvauRNh_.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
