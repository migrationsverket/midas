import{r as p,j as r}from"./iframe-th_azU5_.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-B8p-Bthh.js";import{B as c}from"./Button-CauCyY5i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-kFNWgpP8.js";import"./useFocusRing-BDcpBQzO.js";import"./utils-C4VuU2um.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./animation-BkV0DXQ5.js";import"./PanelTitle-Cvwx05tv.js";import"./clsx-Ciqy0D92.js";import"./Text-DELoTx3Q.js";import"./Text-hdNvr6U4.js";import"./x-D7gAiSiz.js";import"./createLucideIcon-Bv08NMl0.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-wk7uPRGE.js";import"./Hidden-BFds7gf1.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CkdA4sJp.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
