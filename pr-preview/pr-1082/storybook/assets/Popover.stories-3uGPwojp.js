import{j as r}from"./iframe-D4qwi5aS.js";import{P as a}from"./Popover-B0dCiXtz.js";import{$ as i}from"./Dialog-DglFMp0k.js";import{B as n}from"./Button-BtMm2W3M.js";import{S as p}from"./save-BK_vdZra.js";import{c as m}from"./createLucideIcon-hD68kNPm.js";import{T as s}from"./Text-C5mfap0J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CNo4ecrH.js";import"./useFocusRing-6dU2HUqL.js";import"./utils-B-Nz338F.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./Button-Da-DtFCd.js";import"./Hidden-CM9pZ1fW.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./useResizeObserver-CEDVDmEs.js";import"./useControlledState-BpYdNZzj.js";import"./RSPContexts-CXXJq7xx.js";import"./Collection-CuVUb6O2.js";import"./index-BSSxLsJ3.js";import"./Separator-CzylDj9v.js";import"./SelectionManager-32JLFw_J.js";import"./useEvent-uU1Q1mcZ.js";import"./scrollIntoView-Dwx5yIaq.js";import"./SelectionIndicator-B1z3YSxs.js";import"./useDescription-1CMda98v.js";import"./ListKeyboardDelegate-D0Gtj1tU.js";import"./Text-0C5O0r7x.js";import"./PressResponder-BU5iSFLt.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2lfJXjh.js";import"./getScrollParent-Cwbjb50l.js";import"./VisuallyHidden-bcnkwpD1.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
