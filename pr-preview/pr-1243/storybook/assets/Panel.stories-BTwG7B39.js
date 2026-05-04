import{r as p,j as r}from"./iframe-BLFVAebz.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DuCKBYyY.js";import{B as c}from"./Button-DNuEBjZY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKdXVV8i.js";import"./useFocusRing-BtgCc4uS.js";import"./utils-COORazi9.js";import"./index-DxSzAXil.js";import"./index-MFhL1fTj.js";import"./animation-C16O_xko.js";import"./PanelTitle-B7EZTvxh.js";import"./clsx-Ciqy0D92.js";import"./Text-BI792DVZ.js";import"./Text-CMpPyQHQ.js";import"./x-czyhHEQN.js";import"./createLucideIcon-ioBnSaPP.js";import"./useLocalizedStringFormatter-DZSD3y5K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CDRPkfYl.js";import"./Hidden-DwfkqXbu.js";import"./useLabel-C9MLZ0ZV.js";import"./useLabels-DsM9HmY4.js";import"./useButton-Dkva8HAQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BFj9mjRF.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
