import{j as r}from"./iframe-CqGw52kl.js";import{P as a}from"./Popover-DpNHjmRR.js";import{$ as i}from"./Dialog-3-VZN3M4.js";import{B as n}from"./Button-ABAzSfOF.js";import{S as p}from"./save-CNJOLppB.js";import{c as m}from"./createLucideIcon-CoMafoM3.js";import{T as s}from"./Text-D3EOjJ0B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CisMBNJ_.js";import"./useFocusRing-GvsYGsAP.js";import"./utils-DNYE9rrP.js";import"./index-CNbPhO7N.js";import"./index-Czi_6eNz.js";import"./Button-BG-x6i-t.js";import"./Hidden-duzZCIPn.js";import"./useLabels-BUufR3Kd.js";import"./useButton-CXcA0iHt.js";import"./useResizeObserver-D828MuGa.js";import"./useControlledState-CGYQyUPv.js";import"./RSPContexts-CivMWx79.js";import"./Collection-D3dy6mEh.js";import"./index-DTn8N8sc.js";import"./Separator-CnTEdMMk.js";import"./SelectionManager-Cw5-ky3E.js";import"./useEvent-7xwxZlQ2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D3fnkg3j.js";import"./useDescription-B6vY1f8v.js";import"./ListKeyboardDelegate-y9oHfD-i.js";import"./Text-CHXVqnQT.js";import"./PressResponder-BXUkqiri.js";import"./useLocalizedStringFormatter-Dya7MH1I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCLu3UE2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BSHZJK5y.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-MNNjNWeI.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
