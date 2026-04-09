import{j as r}from"./iframe-BQlcbrgq.js";import{P as a}from"./Popover-CXYnS0Pt.js";import{$ as i}from"./Dialog-BfMFzFGl.js";import{S as n}from"./save-D55SbhvB.js";import{c as m}from"./createLucideIcon-Dkmw8KOt.js";import{B as p}from"./Button-CWx5j6of.js";import{T as s}from"./Text-VFn9yNax.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-zlU0QFfw.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CfGpEGgB.js";import"./useFocusRing-vaJTuI4B.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./Button-CDoUC3iq.js";import"./Hidden-BCstp6u_.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./useResizeObserver-BxaWleb4.js";import"./useControlledState-8FQUmPf4.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-Bvy64kgY.js";import"./Collection-DiPZ5oiq.js";import"./index-Cc7kdlmZ.js";import"./Separator-Bxvh_6_C.js";import"./SelectionManager-Bqi2DdnI.js";import"./useEvent-DZ7mJmfU.js";import"./scrollIntoView-qNB0-vvI.js";import"./SelectionIndicator-DTHAul58.js";import"./useDescription-WI-F6yLm.js";import"./ListKeyboardDelegate-ekvubGfM.js";import"./Text-9noXsIlr.js";import"./PressResponder-CsSdfsYB.js";import"./useLocalizedStringFormatter-DJDlUoLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dja5saqP.js";import"./getScrollParent-CdT_EqNx.js";import"./VisuallyHidden-CKBFwX4P.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
