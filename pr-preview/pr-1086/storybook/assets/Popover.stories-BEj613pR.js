import{j as r}from"./iframe-DBfoD2U7.js";import{P as a}from"./Popover-D5jv0uxC.js";import{$ as i}from"./Dialog-BzReNYR-.js";import{B as n}from"./Button-mUhJkAyU.js";import{S as p}from"./save-BhLcxgGe.js";import{c as m}from"./createLucideIcon-Bmf1TE0_.js";import{T as s}from"./Text-D6_QswxK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DM7W4rdn.js";import"./useFocusRing-_y_4-82L.js";import"./utils-D_iENdjI.js";import"./index-Cn5t1hH6.js";import"./index-Cba1Uww2.js";import"./Button-Bp1ZxcfX.js";import"./Hidden-BUhyB_bX.js";import"./useLabels-BUVsGCLs.js";import"./useButton-Cw8muoeF.js";import"./useResizeObserver-DoFkhrvv.js";import"./useControlledState-_hIvr0Rm.js";import"./RSPContexts-BQx21hqj.js";import"./Collection-CusLbJSw.js";import"./index-BBhCFU6K.js";import"./Separator-CEMyLdIQ.js";import"./SelectionManager-BhEz_fDy.js";import"./useEvent-tLrG8XwI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DaRDFZPd.js";import"./useDescription-BtveEICz.js";import"./ListKeyboardDelegate-BjRG0rSY.js";import"./Text-BwIO0Pwg.js";import"./PressResponder-DBMGacat.js";import"./useLocalizedStringFormatter-D7V2ZqXE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9nHzfDWI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DIm4I4zN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTqG2xCS.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
