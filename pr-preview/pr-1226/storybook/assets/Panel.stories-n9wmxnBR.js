import{r as p,j as r}from"./iframe-BspZq9tj.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CAFEtpt1.js";import{B as c}from"./Button-CgVYtA8O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFbpEbwN.js";import"./useFocusRing-ZSLB6af2.js";import"./utils-DAmpme0n.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./animation-DqI0Oqar.js";import"./PanelTitle-BKTjM6Di.js";import"./clsx-Ciqy0D92.js";import"./Text-D4utVkCo.js";import"./Text-DJFK0YJf.js";import"./x-B87ahrOa.js";import"./createLucideIcon-DZ4T53Ud.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-W6h6LqJQ.js";import"./Hidden-BxNHn6hu.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-mXHZbk3a.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
