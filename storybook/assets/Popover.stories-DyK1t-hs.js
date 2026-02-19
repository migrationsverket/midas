import{j as r}from"./iframe-D6sKX6II.js";import{P as a}from"./Popover-gkXA_BBE.js";import{$ as i}from"./Dialog-CABw0W6S.js";import{B as n}from"./Button-DCKGBAMV.js";import{S as p}from"./save-7QITUWfp.js";import{c as m}from"./createLucideIcon-sDHC6FPE.js";import{T as s}from"./Text-jsf--eUF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-V9Eb3cRx.js";import"./useFocusRing-CSkB88rB.js";import"./utils-C4RQL2_3.js";import"./index-DKBJrd3a.js";import"./index-DDUPyWG3.js";import"./Button-BaCPfcFA.js";import"./Hidden-DGXb4i6s.js";import"./useLabels-Eanys-W7.js";import"./useButton-QkYGdCiT.js";import"./useResizeObserver-pDOO4CWr.js";import"./useControlledState-lIXa58Dk.js";import"./RSPContexts-DvpaVa_O.js";import"./Collection-D2vS0JJK.js";import"./index-UPahk6AO.js";import"./Separator-BrNCWKzO.js";import"./SelectionManager-Bng19qqy.js";import"./useEvent-DGV7xSYV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BuDLJhSH.js";import"./useDescription-kimTwMt1.js";import"./ListKeyboardDelegate-Cx41C5kb.js";import"./Text-BrckZ8Xv.js";import"./PressResponder-C6vxJpG9.js";import"./useLocalizedStringFormatter-CWLwTKjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-uOUtYkvb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D9YxITQY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CajHjEjY.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Heading style={{
        marginBottom: '0.5rem'
      }}>Info</Heading>
        <Text>Genom att spara detta går det ej att ta bort</Text>
      </div>
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara'>
        <Save />
      </Button>
      <Popover {...args} />
    </DialogTrigger>
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    children: 'Spara'
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara' data-testid='popover-placement-trigger'>
        <Save />
      </Button>
      <Popover data-testid='popover-placement' {...args} />
    </DialogTrigger>
}`,...e.parameters?.docs?.source}}};const Z=["Primary","Placement"];export{e as Placement,t as Primary,Z as __namedExportsOrder,Y as default};
