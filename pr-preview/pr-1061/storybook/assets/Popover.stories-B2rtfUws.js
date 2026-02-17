import{j as r}from"./iframe-DTfJSErE.js";import{P as a}from"./Popover-DK1z9kYJ.js";import{$ as i}from"./Dialog-C261NJAw.js";import{B as n}from"./Button-Bw1mXw0X.js";import{S as p}from"./save-Bxv4S8pw.js";import{c as m}from"./createLucideIcon-DuvGCIEA.js";import{T as s}from"./Text-DDwjjFnB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CTH9LQ8k.js";import"./useFocusRing-B1zsHiit.js";import"./utils-B73muxhO.js";import"./index-BUT5P9H-.js";import"./index-CgWBRnNX.js";import"./Button-DSjX8i_m.js";import"./Hidden-D7A9_Rse.js";import"./useLabels-BqfQS0uq.js";import"./useButton-oYO7zjMC.js";import"./useResizeObserver-BrFLorgc.js";import"./useControlledState-BaQo_f5T.js";import"./RSPContexts-DA83ZcWW.js";import"./Collection-Cywdh-W1.js";import"./index-lje2h9lu.js";import"./Separator-D8SADm8K.js";import"./SelectionManager-C9R0-jGz.js";import"./useEvent-BxSLArWq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CcF_Y5ct.js";import"./useDescription-gEBlcK5R.js";import"./ListKeyboardDelegate-BlP5VjP_.js";import"./Text-D5Dq4q45.js";import"./PressResponder-CuinuHt0.js";import"./useLocalizedStringFormatter-uC-u8m9n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2iCZixk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKITv4VW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BApN70s6.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
