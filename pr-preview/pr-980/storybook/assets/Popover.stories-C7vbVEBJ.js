import{j as r}from"./iframe-ew_c8Ar1.js";import{S as n}from"./save-CKn7lPQu.js";import{c as m}from"./createLucideIcon-CjgT-vsM.js";import{$ as a}from"./Dialog-BQ3If_6k.js";import{P as i}from"./Popover-dF1uHzQn.js";import{B as p}from"./Button-DR2FWxw-.js";import{T as s}from"./Text-qQ_AxwzD.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CNKdX4lK.js";import"./utils-Dqzr4Pki.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqxvZ74N.js";import"./useFocusRing-BCBGQLiA.js";import"./index-B-AnuWqo.js";import"./index-DV6EzAem.js";import"./useLabels-BfgLEKzw.js";import"./useButton-DD4YI9ZW.js";import"./RSPContexts-C0CdLA6m.js";import"./OverlayArrow-CaCN9pdQ.js";import"./useResizeObserver-tdd60-57.js";import"./useControlledState-CcfGPE8i.js";import"./Collection-DVPNe_rB.js";import"./index-CAuzshzC.js";import"./Separator-D8J14l87.js";import"./SelectionManager-D8qpnu3e.js";import"./useEvent-TRpBA60y.js";import"./scrollIntoView-B87_qoAO.js";import"./SelectionIndicator-jAxqj1hI.js";import"./useDescription-BpxF-b7t.js";import"./ListKeyboardDelegate-t0Dd7Zgy.js";import"./Text-DCZDHd_s.js";import"./PressResponder-DRxrBBeJ.js";import"./useLocalizedStringFormatter-CJvI6W0Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BzLbdOeN.js";import"./VisuallyHidden-pImEXMGE.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BsyJ0bjv.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
