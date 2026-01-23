import{j as r}from"./iframe-CtUIZbYn.js";import{P as a}from"./Popover-CmX6VYBg.js";import{a as i}from"./Dialog-DnPuUQE-.js";import{B as n}from"./Button-DQw6C-et.js";import{S as p}from"./save-CP8x_6rv.js";import{c as m}from"./createLucideIcon-BRaxuuf5.js";import{T as s}from"./Text-XrKnwqSN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DFpEzFlA.js";import"./useFocusRing-6a21M1IJ.js";import"./utils-Cf9IpOmc.js";import"./index-Dm2Kv3ch.js";import"./index-KufTmFNN.js";import"./Button-CgO5Dbzf.js";import"./Hidden-BI0VMXn5.js";import"./useLabels-CjFYjORR.js";import"./useButton-zj2RIXSA.js";import"./useResizeObserver-_aB2uX1w.js";import"./useControlledState-BQ5cbGs8.js";import"./RSPContexts-DeSbQpXu.js";import"./Collection-8HCxu7jq.js";import"./index-DJjmA-yx.js";import"./Separator-BA-1xW2a.js";import"./SelectionManager-DT2Uo_1q.js";import"./useEvent-DO7npvYY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZZ6Qs1R8.js";import"./useDescription-BIEKqWPT.js";import"./ListKeyboardDelegate-8pxwgSLl.js";import"./Text-yTCGhOU_.js";import"./PressResponder-BXDqNV48.js";import"./useLocalizedStringFormatter-BowEyYzH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTw-OGWI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D6i0gXjo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BZJ3lJE8.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
