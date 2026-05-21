import{r as p,j as r}from"./iframe-CU6IyPdi.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CEdUR_tV.js";import{B as c}from"./Button-DzjFo675.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnKqpd9E.js";import"./useFocusRing-CgN0-97j.js";import"./utils-C3EuF5tN.js";import"./index-CWwAu-UJ.js";import"./index-EaiVYzVz.js";import"./animation-wYJS1t3d.js";import"./PanelTitle-mkNhI_UM.js";import"./clsx-Ciqy0D92.js";import"./Text-DiW7fUXy.js";import"./Text-DjY_AY4u.js";import"./x-DvEBYFLx.js";import"./createLucideIcon-BhPQSJHM.js";import"./useLocalizedStringFormatter-D1ier4wV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Dn__6SVC.js";import"./Hidden-BMh1hBMj.js";import"./useLabel-Bt0836mW.js";import"./useLabels-Di0VtbU1.js";import"./useButton-YhY6a0OA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bl6sgZVR.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
