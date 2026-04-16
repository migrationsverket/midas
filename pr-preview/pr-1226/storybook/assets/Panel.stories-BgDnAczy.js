import{r as p,j as r}from"./iframe-D3lvYj-7.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-NOpaBTeQ.js";import{B as c}from"./Button-DrsIbXth.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D5Ejjxkh.js";import"./useFocusRing-DIwykGm6.js";import"./utils-B6k7vEYH.js";import"./index-BM1vPyr1.js";import"./index-DIXJvTpR.js";import"./animation-9T1riTjI.js";import"./PanelTitle-CP7KgUGc.js";import"./clsx-Ciqy0D92.js";import"./Text-CEj93Me_.js";import"./Text-DdkQbCnP.js";import"./x-MTUjWktr.js";import"./createLucideIcon-C2BZ0Xjj.js";import"./useLocalizedStringFormatter-Dn72RgHJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DOFXZV3V.js";import"./Hidden-DPjLOd6z.js";import"./useLabel-Pnrma__y.js";import"./useLabels-CJIv4d2A.js";import"./useButton-Dbna9MqX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-a__j3MRh.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
