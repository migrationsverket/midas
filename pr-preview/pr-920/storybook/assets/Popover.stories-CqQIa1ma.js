import{j as r}from"./iframe-k-zAH7Ef.js";import{S as n}from"./save-Bv47sZVY.js";import{c as m}from"./createLucideIcon-b2tMwHkv.js";import{$ as a}from"./Dialog-B0hNAeSx.js";import{P as i}from"./Popover-D7zgKGQS.js";import{B as p}from"./Button-DmW_TZqr.js";import{T as s}from"./Text-BOoeMNrs.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BdULP_1i.js";import"./utils-BSpJY3Um.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHgR79MS.js";import"./useFocusRing-DVpNpWCG.js";import"./index-B_jnwY6D.js";import"./index-BhzajAhd.js";import"./useLabels-CYnXYQCZ.js";import"./useButton-HRso9Wou.js";import"./RSPContexts-DGsEwDeK.js";import"./OverlayArrow-CvdGKYEz.js";import"./useResizeObserver-DoIK5Zf8.js";import"./useControlledState-CWQoOU6w.js";import"./Collection-D44rOmaq.js";import"./index-Cv8hS9vc.js";import"./Separator-IjEHfEYR.js";import"./SelectionManager-H8uXbQRA.js";import"./useEvent-BG9GMXpu.js";import"./scrollIntoView-MFUOiOkG.js";import"./SelectionIndicator-B7O4Zl4E.js";import"./useDescription-ScrL-_TA.js";import"./ListKeyboardDelegate-CMpffdDC.js";import"./Text-BGMRpBYZ.js";import"./PressResponder-C31hFz2h.js";import"./useLocalizedStringFormatter-CxFXRTv0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-a6tJLPyA.js";import"./VisuallyHidden-DbtIx9ZK.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),W={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const X=["Primary","Placement"];export{e as Placement,t as Primary,X as __namedExportsOrder,W as default};
