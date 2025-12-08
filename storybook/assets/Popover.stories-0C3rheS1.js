import{j as r}from"./iframe-BY2_3lFS.js";import{S as n}from"./save-DRgT1J9y.js";import{c as m}from"./createLucideIcon-CKXpjIL3.js";import{$ as a}from"./Dialog-CLdltRnt.js";import{P as i}from"./Popover-PQ2bLCU9.js";import{B as p}from"./Button-B_p_1c42.js";import{T as s}from"./Text-BuRtAqu6.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-_0WHvwFf.js";import"./utils-DnCax-D0.js";import"./clsx-B-dksMZM.js";import"./Hidden-V6emqDRH.js";import"./useFocusRing-DaJYhCLu.js";import"./index-Cd6P2FPg.js";import"./index-DsAQLNj2.js";import"./useLabels-teOrTThM.js";import"./useButton-M1sf-acB.js";import"./RSPContexts-CGAbcc-X.js";import"./OverlayArrow-C7UAfav1.js";import"./useResizeObserver-aSHBb5Eo.js";import"./useControlledState-D242PxvH.js";import"./Collection-797iNAcV.js";import"./index-B-vljZWJ.js";import"./Separator-9ebvfEIo.js";import"./SelectionManager-CvMauzBi.js";import"./useEvent-DJjZV-7J.js";import"./scrollIntoView-1xelqv_Y.js";import"./SelectionIndicator-D8VjqtV-.js";import"./useDescription-Cxu1pppP.js";import"./ListKeyboardDelegate-DypTNek_.js";import"./Text-C1EVzu2w.js";import"./PressResponder-BwFeTy3P.js";import"./useLocalizedStringFormatter-DXd1hwbc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BxMLCvFI.js";import"./VisuallyHidden-Dt3RoQzb.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzVUglTs.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
