import{r as p,j as r}from"./iframe-BgN3T3xs.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bsonb6av.js";import{B as c}from"./Button-zGEEwAU5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DuMP6pst.js";import"./useFocusRing-s6LcsVmw.js";import"./utils-Cy9VbIrx.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./animation-DKbwhPfX.js";import"./PanelTitle-CzXNqkEj.js";import"./clsx-Ciqy0D92.js";import"./Text-Bm_qFAHe.js";import"./Text-Cws1TLos.js";import"./x-U-sIlJJn.js";import"./createLucideIcon-BePQROhA.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BtxXkeGG.js";import"./Hidden-BUpoh45I.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DwUK2ATG.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
