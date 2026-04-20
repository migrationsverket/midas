import{r as p,j as r}from"./iframe-SiFgIgtO.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Cbov6SBm.js";import{B as c}from"./Button-DBG0-mK7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BeznzCuJ.js";import"./useFocusRing-CvkTALop.js";import"./utils-o2Exi7SE.js";import"./index-DSbiV_Yq.js";import"./index-C4sSyqsa.js";import"./animation-CQnJNJ3d.js";import"./PanelTitle-cuwsKCy2.js";import"./clsx-Ciqy0D92.js";import"./Text-JI0YDy3v.js";import"./Text-iLvdh7Qr.js";import"./x-ijd7sG5_.js";import"./createLucideIcon-jPk5qvos.js";import"./useLocalizedStringFormatter-CsnzAfll.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CIm-1svz.js";import"./Hidden-BczPpR5h.js";import"./useLabel-z_-c7Nf0.js";import"./useLabels-KeWp1COh.js";import"./useButton-B0oseYFB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrRKsR6_.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
