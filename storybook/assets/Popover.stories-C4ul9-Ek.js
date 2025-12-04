import{j as r}from"./iframe-BnvIDWhX.js";import{S as n}from"./save-BXc5_ZzV.js";import{c as m}from"./createLucideIcon-CfqM0T4F.js";import{$ as a}from"./Dialog-BT7KHO7D.js";import{P as i}from"./Popover-CT_Naab_.js";import{B as p}from"./Button-DqvzVHOE.js";import{T as s}from"./Text-C7YaW3xP.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-2vHqoAit.js";import"./utils-BvQhf5aw.js";import"./clsx-B-dksMZM.js";import"./Hidden-SpBz5CyG.js";import"./useFocusRing-kt0fM5Eg.js";import"./index-DZ5e4qNw.js";import"./index-BBb9LXyW.js";import"./useLabels-C7yBIXeo.js";import"./useButton-Dxyw1gnX.js";import"./RSPContexts-p_3PQZMd.js";import"./OverlayArrow-gsPDqO15.js";import"./useResizeObserver-DtWdT9hl.js";import"./useControlledState-DHwPIbAN.js";import"./Collection-BJ4Qy3kN.js";import"./index-Bd26Brwk.js";import"./Separator-DoOZOSYN.js";import"./SelectionManager-DrNCUxIW.js";import"./useEvent-CctKA4oo.js";import"./scrollIntoView-DcjaWzfx.js";import"./SelectionIndicator-eOyvRYaz.js";import"./useDescription-BRbn5Aqy.js";import"./ListKeyboardDelegate-DDm69ZdR.js";import"./Text-CcU36hjn.js";import"./PressResponder-CsH5riWB.js";import"./useLocalizedStringFormatter-CQGgYv2z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CPzYdZ1O.js";import"./VisuallyHidden-BHMQPsJv.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCUIru9v.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
