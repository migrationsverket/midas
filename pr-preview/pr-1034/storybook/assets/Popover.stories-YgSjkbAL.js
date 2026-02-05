import{j as r}from"./iframe-D0l--c6C.js";import{P as a}from"./Popover-CRr_QX5c.js";import{$ as i}from"./Dialog-lxRiuV_L.js";import{B as n}from"./Button-D47vYwiU.js";import{S as p}from"./save-DLAsKPev.js";import{c as m}from"./createLucideIcon-DBbK9uba.js";import{T as s}from"./Text-evSykvIm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CG4zEYYh.js";import"./useFocusRing-TJh2D1Hm.js";import"./utils-VeCz3m0s.js";import"./index-DoExQatV.js";import"./index-RphitS5C.js";import"./Button-BerIw-Lw.js";import"./Hidden-BF6VB1MU.js";import"./useLabels-CSsYCRJ9.js";import"./useButton-Dk6hNhi1.js";import"./useResizeObserver-DCvhUmSc.js";import"./useControlledState-DG9hXw45.js";import"./RSPContexts-OtAouDzC.js";import"./Collection-Fbt71xYE.js";import"./index-CAkoeHbW.js";import"./Separator-CSB41d5-.js";import"./SelectionManager-DneqIR5T.js";import"./useEvent-G9uvljhU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_FwF8a6.js";import"./useDescription-Dv4NgNk6.js";import"./ListKeyboardDelegate-VEziE7E2.js";import"./Text-BpMUK5iu.js";import"./PressResponder-f5Z6KAl0.js";import"./useLocalizedStringFormatter-DPchQlap.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeLJJodF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-EuNheofa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVxlra1v.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
