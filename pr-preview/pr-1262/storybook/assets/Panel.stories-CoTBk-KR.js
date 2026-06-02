import{r as p,j as r}from"./iframe-_Hk9HBhX.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BO9GCZ9C.js";import{B as c}from"./Button-BPI35lWH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CXVEjKuF.js";import"./useFocusRing-CUpBT6GV.js";import"./utils-Tr1wzETD.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./animation-BrdO1Epl.js";import"./PanelTitle-B3T7BO0o.js";import"./clsx-Ciqy0D92.js";import"./Text-4AExYRWh.js";import"./Text-CFXOaGuN.js";import"./x-3memj5xE.js";import"./createLucideIcon-qIP4byR5.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BcVwX6wB.js";import"./Hidden-vPthIoGd.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CE55BuvM.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
