import{j as r}from"./iframe-GzN0VSzx.js";import{P as a}from"./Popover-CDfA2okm.js";import{$ as i}from"./Dialog-BB0cbBWM.js";import{B as n}from"./Button-BcwNb2j2.js";import{S as p}from"./save-VSPFSMHq.js";import{c as m}from"./createLucideIcon-KJI_USZY.js";import{T as s}from"./Text-DW2oSw1u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B4Mvj34m.js";import"./useFocusRing-BT84Sj0b.js";import"./utils-dcWRHMqA.js";import"./index-BtUmmQ1y.js";import"./index-DkoMqfON.js";import"./Button-B9ouc3Vz.js";import"./Hidden-BiK8gQF-.js";import"./useLabels-8wBAXN0N.js";import"./useButton-BJTX_GMM.js";import"./useResizeObserver-DzkMjZLw.js";import"./useControlledState-CFkZ7Ywi.js";import"./RSPContexts-DntI5H5m.js";import"./Collection-DlB3NQT_.js";import"./index-CD7Lnybu.js";import"./Separator-CAURjAbf.js";import"./SelectionManager-yF3l3XTv.js";import"./useEvent-kmBIgIh4.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPUPbomw.js";import"./useDescription-DH1k0dXL.js";import"./ListKeyboardDelegate-tH97EUPf.js";import"./Text-BytI2fT-.js";import"./PressResponder-Bqn7NlWU.js";import"./useLocalizedStringFormatter-CkwJfZLX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ti5FQfNt.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bf3adftS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9sMeAIfj.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
