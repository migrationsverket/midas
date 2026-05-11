import{r as p,j as r}from"./iframe-XiCiIf0n.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DYRG3Ogn.js";import{B as c}from"./Button-34yPA4wA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUbneG8a.js";import"./useFocusRing-Du04ckjJ.js";import"./utils-DN6l_A4f.js";import"./index-5eW94gXQ.js";import"./index-DUzzqUE5.js";import"./animation-DS5_9QGV.js";import"./PanelTitle-BjziYsZn.js";import"./clsx-Ciqy0D92.js";import"./Text-BB__0TpL.js";import"./Text-BgntJj64.js";import"./x-AkXMb_P6.js";import"./createLucideIcon-Bi0GkdZT.js";import"./useLocalizedStringFormatter-COrKBGOW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-GBAKwEXf.js";import"./Hidden-B0NT9U_h.js";import"./useLabel-CX8LzJ5q.js";import"./useLabels-yWB8_p4-.js";import"./useButton-DdGLHplO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D8kosd8O.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
