import{r as p,j as r}from"./iframe-Db_qDyjb.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CczB0tn8.js";import{B as c}from"./Button-B6sBamwP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CW90Ui0G.js";import"./useFocusRing-CvFtjn9f.js";import"./utils-B1ump1uN.js";import"./index-BrCAN2R3.js";import"./index-rXvRCXG4.js";import"./animation-Dmt42pOw.js";import"./PanelTitle-C7INcoLy.js";import"./clsx-Ciqy0D92.js";import"./Text-CV2l2NwE.js";import"./Text-DysxiSoS.js";import"./x-DpepR7rv.js";import"./createLucideIcon-Dj8isrVr.js";import"./useLocalizedStringFormatter-TCo9J1WR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DmcShG5W.js";import"./Hidden-Ck1I1Pl6.js";import"./useLabel-79lcnvNd.js";import"./useLabels-DU_Qs8Z-.js";import"./useButton-DzefyB67.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DI0T0a8c.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
