import{r as p,j as r}from"./iframe-Bs-4Q0RS.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CgIjSwLn.js";import{B as c}from"./Button-DTSBAwbm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DOA-W8fE.js";import"./useFocusRing-BPypZ_tc.js";import"./utils-D6H3fjwf.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./animation-BKwuCbyw.js";import"./PanelTitle-DtM0nXlo.js";import"./clsx-Ciqy0D92.js";import"./Text-CODpWWcU.js";import"./Text-DUhY8chK.js";import"./x-DCsDOoGU.js";import"./createLucideIcon-C-ocypBz.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BRycn86x.js";import"./Hidden-DC5u3Uje.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-D2ZFd25y.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
