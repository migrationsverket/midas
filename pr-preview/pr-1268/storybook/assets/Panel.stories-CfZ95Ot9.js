import{r as p,j as r}from"./iframe-usp88RXh.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DPRyomlo.js";import{B as c}from"./Button-DOBuF016.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bk0Ug2PQ.js";import"./useFocusRing-BnVcW9EZ.js";import"./utils-BXqK3GQS.js";import"./index-BaVleoZK.js";import"./index-B6kb6Xt1.js";import"./animation-tTrc6B4i.js";import"./PanelTitle-CjBij6Uv.js";import"./clsx-Ciqy0D92.js";import"./Text-BRG4rOQY.js";import"./Text-nB3EVkcg.js";import"./x-BTd5rXGN.js";import"./createLucideIcon-DHgdMN24.js";import"./useLocalizedStringFormatter-JvTntPif.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-B-TKlEdD.js";import"./Hidden-BTFNJ6XH.js";import"./useLabel-Rz3gMjr1.js";import"./useLabels-BlUIkC-Y.js";import"./useButton-Dr8gKvJs.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVXdiwcx.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
