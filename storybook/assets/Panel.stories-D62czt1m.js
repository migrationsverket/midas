import{r as p,j as r}from"./iframe-C8x-msxk.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Chuw4tHW.js";import{B as c}from"./Button-vkpw1trS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DCAgeBJw.js";import"./useFocusRing-pYs-dxV_.js";import"./utils-x6RmcanB.js";import"./index-esthriUJ.js";import"./index-Bvs38Ve9.js";import"./animation-7A-xBO6J.js";import"./PanelTitle-B5KT8VTJ.js";import"./clsx-Ciqy0D92.js";import"./Text-DQO-SfK1.js";import"./Text-DgcFjB2j.js";import"./x-DXHCMQVs.js";import"./createLucideIcon-yUmnm7ht.js";import"./useLocalizedStringFormatter-DbnioywX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CUxxVM2V.js";import"./Hidden-BrrSlW-M.js";import"./useLabel-fGMhI5RW.js";import"./useLabels-CTHQc_bx.js";import"./useButton-DEMiZMSi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQd7HXEj.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
