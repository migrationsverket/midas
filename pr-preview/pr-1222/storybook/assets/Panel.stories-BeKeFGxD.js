import{r as p,j as r}from"./iframe-CgWG_iU2.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CZ5eybWB.js";import{B as c}from"./Button-nHuGQ5i0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BM6BESXh.js";import"./useFocusRing-Dsycni8a.js";import"./utils-_M8wNiGT.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./animation-BG0HieEY.js";import"./PanelTitle-DXPpgQL1.js";import"./clsx-Ciqy0D92.js";import"./Text-dFUGDIq7.js";import"./Text-Dj7d9dGS.js";import"./x-Dv2iooYO.js";import"./createLucideIcon-DjCctUN5.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-ByOlI6-C.js";import"./Hidden-D3aMc9rP.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-oanLmiAX.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
