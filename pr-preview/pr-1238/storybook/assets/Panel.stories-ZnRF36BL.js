import{r as p,j as r}from"./iframe-Dr7ArToC.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CttJXxnn.js";import{B as c}from"./Button-eaMP_jYx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CnU7ybFm.js";import"./useFocusRing-Be1E2wiN.js";import"./utils-B9wkB9jr.js";import"./index-D4IeCl1O.js";import"./index-CeL9iIrJ.js";import"./animation-C-YppVTw.js";import"./PanelTitle-DHTsaMrd.js";import"./clsx-Ciqy0D92.js";import"./Text-DCnBb7WN.js";import"./Text-z1_3LhQE.js";import"./x-CL4LyG_m.js";import"./createLucideIcon-bstwz77u.js";import"./useLocalizedStringFormatter-xGiRnejW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-3lqUDVlM.js";import"./Hidden-DypslUjc.js";import"./useLabel-138CLUtK.js";import"./useLabels-DXcJ5KZ7.js";import"./useButton-BWyNL83U.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CpUpJPrc.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
