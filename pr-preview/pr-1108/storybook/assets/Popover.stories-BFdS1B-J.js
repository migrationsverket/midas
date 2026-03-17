import{j as r}from"./iframe-Bwfgw8pk.js";import{P as a}from"./Popover-DF332a0H.js";import{$ as i}from"./Dialog-C7W01rMn.js";import{S as n}from"./save-Dr2_R8Dk.js";import{c as m}from"./createLucideIcon-BSOfHJOH.js";import{B as p}from"./Button-Cc79re0B.js";import{T as s}from"./Text-COMr0RdB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BYZTfypc.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Dr8c5DE9.js";import"./useFocusRing-cRFXK4sJ.js";import"./index-D1I53Bzg.js";import"./index-VSa-88v0.js";import"./Button-BsV8k1dg.js";import"./Hidden-C55orz_R.js";import"./useLabels-BW9zsbr2.js";import"./useButton-CETvSTMc.js";import"./useResizeObserver-BQc1W3Sq.js";import"./useControlledState-iPtiFsr4.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DoSu8nwv.js";import"./Collection-Did71HL7.js";import"./index-CWidqN52.js";import"./Separator-F19jK_-2.js";import"./SelectionManager-BneQkNS9.js";import"./useEvent-DV0ae6Un.js";import"./scrollIntoView-DORWTWY7.js";import"./SelectionIndicator-CbPDFvK6.js";import"./useDescription-DGPUAMqe.js";import"./ListKeyboardDelegate-DWcO9r8m.js";import"./Text-CHrquvV0.js";import"./PressResponder-C84U-Gpu.js";import"./useLocalizedStringFormatter-CQ1hUGUd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCIo6s83.js";import"./getScrollParent-BLupYbMm.js";import"./VisuallyHidden-B9CGtyyD.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Du3bV9_E.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
