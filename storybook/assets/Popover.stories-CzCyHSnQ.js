import{j as r}from"./iframe-_Z42HqI2.js";import{S as n}from"./save-CEnJnyu-.js";import{c as m}from"./createLucideIcon-DxsQvIVq.js";import{$ as a}from"./Dialog-CjESVl3F.js";import{P as i}from"./Popover-DzcCBfCJ.js";import{B as p}from"./Button-CJtuwFwb.js";import{T as s}from"./Text-B2Ny6SaZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CK5CfXUr.js";import"./utils-CrFX56hd.js";import"./clsx-B-dksMZM.js";import"./Hidden-BhDJNGVH.js";import"./useFocusRing-BVlddUKs.js";import"./index-BjqvvYkr.js";import"./index-BufdmmQ5.js";import"./useLabels-CPlvQ2_t.js";import"./useButton-BBRfPduy.js";import"./RSPContexts-CHAQW4_v.js";import"./OverlayArrow-D2w3lhSc.js";import"./useResizeObserver-Ls85LRA8.js";import"./useControlledState-C42bKwUu.js";import"./Collection-BP9le3z0.js";import"./index-6otkVSUG.js";import"./Separator-_W4MQ8Kt.js";import"./SelectionManager-BHdh6SkD.js";import"./useEvent-vDDYHoIn.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BAoKk-bv.js";import"./useDescription-5yHK5kQM.js";import"./ListKeyboardDelegate-DO9-fFrt.js";import"./Text-BpRe27H2.js";import"./PressResponder-BGrpQpZY.js";import"./useLocalizedStringFormatter-CWBL-q72.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CN8Uxxik.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUe-0CEM.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAmkoZvN.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
