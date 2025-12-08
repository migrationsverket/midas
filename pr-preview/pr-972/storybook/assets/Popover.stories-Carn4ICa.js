import{j as r}from"./iframe-D0MbCfGX.js";import{S as n}from"./save-DKgVR5LQ.js";import{c as m}from"./createLucideIcon-BVgI_rj9.js";import{$ as a}from"./Dialog-CYAJYeJS.js";import{P as i}from"./Popover-CBKbjwWD.js";import{B as p}from"./Button-ZcS88E_Q.js";import{T as s}from"./Text-lYk5NG0J.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CwpQ0ZRN.js";import"./utils-HqVyPsx5.js";import"./clsx-B-dksMZM.js";import"./Hidden-nmq2QyfL.js";import"./useFocusRing-Bu7gL19x.js";import"./index-hynslO7V.js";import"./index-fjtbWm9v.js";import"./useLabels-bAB6zu2C.js";import"./useButton-B-HcF5FI.js";import"./RSPContexts-BOmcJgyX.js";import"./OverlayArrow-DMXfG1zs.js";import"./useResizeObserver-BOnYzN1g.js";import"./useControlledState-C8xGgj4C.js";import"./Collection-B2JFKRf7.js";import"./index-COoRz86T.js";import"./Separator-DeWXwwSp.js";import"./SelectionManager-CG-4iIi6.js";import"./useEvent-CYGAUgVS.js";import"./scrollIntoView-DUUJwUq8.js";import"./SelectionIndicator-jYD4F_ud.js";import"./useDescription--JIgYdID.js";import"./ListKeyboardDelegate-DAlCqSfA.js";import"./Text-C56uKtog.js";import"./PressResponder-Ct7dIoGM.js";import"./useLocalizedStringFormatter-2hEikx4k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DtAfmDwe.js";import"./VisuallyHidden-CztvSzbh.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cp1Qq6jQ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Primary","Placement"];export{e as Placement,t as Primary,Y as __namedExportsOrder,X as default};
