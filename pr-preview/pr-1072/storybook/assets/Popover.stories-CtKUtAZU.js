import{j as r}from"./iframe-C7mRVAw-.js";import{P as a}from"./Popover-DIhZ_Ej7.js";import{$ as i}from"./Dialog-BzorbjZ_.js";import{B as n}from"./Button-CZ_HndjP.js";import{S as p}from"./save-CJmFpKOu.js";import{c as m}from"./createLucideIcon-CxN-HpyC.js";import{T as s}from"./Text-SdK-7_Ed.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D803GnqF.js";import"./useFocusRing-B6vJKCx-.js";import"./utils-BeEL8pJ2.js";import"./index-C_BC5gdb.js";import"./index-BTnShkl9.js";import"./Button-BOx_rjlH.js";import"./Hidden-DMuuZGaU.js";import"./useLabels-Ds9YSjJx.js";import"./useButton-ZvjmP_g6.js";import"./useResizeObserver-C4OyXG_p.js";import"./useControlledState-CdL3PN3V.js";import"./RSPContexts-3BOa1bAA.js";import"./Collection-CrM6FHNF.js";import"./index-BGdJvTOY.js";import"./Separator-CtIQYwU7.js";import"./SelectionManager-DdQv0Ybp.js";import"./useEvent-Cc0KmnDZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfN4lR5W.js";import"./useDescription-DTA-9R__.js";import"./ListKeyboardDelegate-CjS7qxm_.js";import"./Text-C-q-JnIT.js";import"./PressResponder-OH7UskiT.js";import"./useLocalizedStringFormatter-5uEV4cAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fr_vkZ8o.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bi6dfUTC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWqMwdpP.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
