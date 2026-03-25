import{j as r}from"./iframe-BP7DzUIh.js";import{P as a}from"./Popover-DQuHdZGW.js";import{$ as i}from"./Dialog-B6ZEH6ru.js";import{S as n}from"./save-BL78gOhW.js";import{c as m}from"./createLucideIcon-zXtIRWL6.js";import{B as p}from"./Button-e7FuQA8u.js";import{T as s}from"./Text-C-lFPFDT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DTP3iI7m.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./Button-yD28QKfx.js";import"./Hidden-DlKvXDgO.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./useResizeObserver-_Mvg5rJV.js";import"./useControlledState-B7al1qBg.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-C286y1L4.js";import"./Collection-CEHuK8QM.js";import"./index-CqTzYnk-.js";import"./Separator-Ci0cwtQM.js";import"./SelectionManager-CcZ5FS4I.js";import"./useEvent-boX-2EsT.js";import"./scrollIntoView-BqUk0Mej.js";import"./SelectionIndicator-3vIypJAh.js";import"./useDescription-B4UE-M1p.js";import"./ListKeyboardDelegate-D_F26l9l.js";import"./Text-C6QCLAD1.js";import"./PressResponder-BxiRPNH8.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qcmAUM1D.js";import"./getScrollParent-CMfkxxdv.js";import"./VisuallyHidden-CFJkh_29.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
