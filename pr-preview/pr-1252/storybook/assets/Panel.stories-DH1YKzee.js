import{r as p,j as r}from"./iframe-DmMjYjLV.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CKNb8jB4.js";import{B as c}from"./Button-Pdwae4O6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-jKmX6mW8.js";import"./useFocusRing-DNsXJifB.js";import"./utils-C7Za6cav.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./animation-D2C9iwtv.js";import"./PanelTitle-D0SJP8U9.js";import"./clsx-Ciqy0D92.js";import"./Text-D1BlasEz.js";import"./Text-TBh7QsjQ.js";import"./x--G2PLC8C.js";import"./createLucideIcon-mwlEDpcM.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BoGHaXxS.js";import"./Hidden-C30O7ZZj.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bt6CiHI_.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
