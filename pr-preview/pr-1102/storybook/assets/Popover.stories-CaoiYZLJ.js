import{j as r}from"./iframe-BKt9EFfY.js";import{P as a}from"./Popover-CL7jeCE7.js";import{$ as i}from"./Dialog-Cwu02sHs.js";import{S as n}from"./save-DyYG5VgF.js";import{c as m}from"./createLucideIcon-CwzpYKvj.js";import{B as p}from"./Button-BP3_jhUy.js";import{T as s}from"./Text-QG4NB2hl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UHPC9nWZ.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CKG8ikC0.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./Button-54WAdtvn.js";import"./Hidden-BIzqGf_Y.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./useResizeObserver-D-YYA0Ni.js";import"./useControlledState-BZs3lQsK.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-C1Y2t1uV.js";import"./Collection-BuYk4Gk5.js";import"./index-CcGrGtPC.js";import"./Separator-CtVyKUJH.js";import"./SelectionManager-D3YQtbVB.js";import"./useEvent-BsotznEQ.js";import"./scrollIntoView-D7dRqv7d.js";import"./SelectionIndicator-fUDz65K_.js";import"./useDescription-ClLBcdJg.js";import"./ListKeyboardDelegate-BEZyuz-l.js";import"./Text-Cx5eezfb.js";import"./PressResponder-CJbEg2ds.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-Skfg5M.js";import"./getScrollParent-JoXPjCTV.js";import"./VisuallyHidden-oXJqa0w4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
