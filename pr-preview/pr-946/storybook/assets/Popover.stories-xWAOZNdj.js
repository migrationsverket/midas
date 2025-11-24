import{j as r}from"./iframe-Dt8qGcj0.js";import{S as n}from"./save-BOwo0Mp_.js";import{c as m}from"./createLucideIcon-CzMrI8-b.js";import{$ as a}from"./Dialog-CNOJc3H-.js";import{P as i}from"./Popover-I2mB7qFL.js";import{B as p}from"./Button-CoCyWkmo.js";import{T as s}from"./Text-DXvquVL7.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CjJiJTes.js";import"./utils-DzGpUwDk.js";import"./clsx-B-dksMZM.js";import"./Hidden-BXZBrSDT.js";import"./useFocusRing-B8EF88pa.js";import"./index-D45MIj80.js";import"./index-yXKLMRgP.js";import"./useLabels-DoBVCtRz.js";import"./useButton-CXsFy5nf.js";import"./RSPContexts-B8qtBHPt.js";import"./OverlayArrow-DBW45wnx.js";import"./useResizeObserver-BklRVhQH.js";import"./useControlledState-BVoQcIBV.js";import"./Collection-Mc1jGEir.js";import"./index-2HYxLetr.js";import"./Separator-DQl5Teqn.js";import"./SelectionManager-DycKXJ5f.js";import"./useEvent-EDEmV_un.js";import"./scrollIntoView-DopW3zf_.js";import"./SelectionIndicator-tL3uILI3.js";import"./useDescription-lf21MVH0.js";import"./ListKeyboardDelegate-C_4XVNH0.js";import"./Text-BFMlzHdv.js";import"./PressResponder-CKYytuCL.js";import"./useLocalizedStringFormatter-MwenM1Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DMG60YH-.js";import"./VisuallyHidden-DqAUfebe.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DHyFRBkx.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
