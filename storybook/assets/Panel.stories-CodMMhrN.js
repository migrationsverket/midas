import{r as p,j as r}from"./iframe-CWDqI9As.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BZw1pWWi.js";import{B as c}from"./Button-CT52BdlE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7TZpR_sr.js";import"./useFocusRing-CGI_ER4d.js";import"./utils-dBjUBpAV.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./animation-By6ANJoT.js";import"./PanelTitle-6OduRVf3.js";import"./clsx-Ciqy0D92.js";import"./Text-Bg0gZzcQ.js";import"./Text-CNhsvp3k.js";import"./x-CzmzQROS.js";import"./createLucideIcon-CQ9K894w.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-ChgRUqyy.js";import"./Hidden-Cgjt9oWa.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CSPSoyjM.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
