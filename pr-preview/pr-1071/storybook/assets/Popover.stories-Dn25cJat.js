import{j as r}from"./iframe-DKSPN_rt.js";import{P as a}from"./Popover-DG4fFYgh.js";import{$ as i}from"./Dialog-Cd0Qusqo.js";import{B as n}from"./Button-DeDsiUlU.js";import{S as p}from"./save-Bs0jwoK9.js";import{c as m}from"./createLucideIcon-Cef0fBNb.js";import{T as s}from"./Text-DS4myfGl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D7xR0OBY.js";import"./useFocusRing-DIM101qK.js";import"./utils-Dsb4CS80.js";import"./index-CgoYFXbr.js";import"./index-DIEsqu5Q.js";import"./Button-D_ksf53O.js";import"./Hidden-rmoVbPRV.js";import"./useLabels-DMhDiSEv.js";import"./useButton-ld_mmKe7.js";import"./useResizeObserver-Bu_ol_6y.js";import"./useControlledState-CRiY1CfR.js";import"./RSPContexts-D7Y3JUuE.js";import"./Collection-Pk1zjnDd.js";import"./index-B4oV2hzS.js";import"./Separator-BKjTkHwz.js";import"./SelectionManager-CRXXHeJa.js";import"./useEvent-WaBg8569.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-jJOTZ3KW.js";import"./useDescription-CtUioLWT.js";import"./ListKeyboardDelegate-lcz-DEyi.js";import"./Text-Bjh-HQuI.js";import"./PressResponder-15UO_rnr.js";import"./useLocalizedStringFormatter-DHrvMH-8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CtpBP1yi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C5ojwSbT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BNEuYvl4.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
