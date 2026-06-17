import{j as r}from"./iframe-Cf0gSBlV.js";import{P as a}from"./Popover-BLukUqq0.js";import{$ as i}from"./Dialog-DQ75by7R.js";import{S as n}from"./save-9A0KHlWE.js";import{c as m}from"./createLucideIcon-CuxZToxj.js";import{B as p}from"./Button-t2ToDX_o.js";import{T as s}from"./Text-BVKObbzr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5wiuCjg.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DAGMAflH.js";import"./useFocusRing-CU4h4oO2.js";import"./index-Cq4gtJu1.js";import"./index-BGK7RvPC.js";import"./Button-lgeK8kME.js";import"./Hidden-BBPU8yn5.js";import"./useLabel-tj1Q-TRL.js";import"./useLabels-CtzpOF36.js";import"./useButton-BvfyWom1.js";import"./useResizeObserver-3YecxwtY.js";import"./useControlledState-CCD2Jo-X.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-hWKFxDS1.js";import"./Collection-B0lLxu9D.js";import"./index-DS3qhvBb.js";import"./Separator-LzjLQQNX.js";import"./SelectionManager-BuxsMIzv.js";import"./useEvent-y-qPMRaI.js";import"./scrollIntoView-C0W73uc3.js";import"./SelectionIndicator-C0NvYuKl.js";import"./useDescription-M0SxojFs.js";import"./ListKeyboardDelegate-B0W0pQHS.js";import"./Text-DVsPk7Go.js";import"./PressResponder-jXCX15sr.js";import"./useLocalizedStringFormatter-jI7Oi0kB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CylMbfLW.js";import"./getScrollParent-DJJhTJvR.js";import"./VisuallyHidden-Qxum1xZt.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BePTNged.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
