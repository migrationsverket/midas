import{r as p,j as r}from"./iframe-DAlGZfQW.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CCtEtLXr.js";import{B as c}from"./Button-xgyBGP3u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CvHTtUWm.js";import"./useFocusRing-aL1wDNV0.js";import"./utils-C0mXnx3L.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./animation-DykFtkea.js";import"./PanelTitle-BiCadoJp.js";import"./clsx-Ciqy0D92.js";import"./Text-BD2SYZAb.js";import"./Text-LSJ9RRHV.js";import"./x-4pQMUwmc.js";import"./createLucideIcon-D-D7lNm8.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DEU34lA6.js";import"./Hidden-o3xiVHpT.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CtB5gR65.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
