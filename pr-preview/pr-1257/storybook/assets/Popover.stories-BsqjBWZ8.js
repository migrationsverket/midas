import{j as r}from"./iframe-BgrJi1dO.js";import{P as a}from"./Popover-ClRnZYFV.js";import{$ as i}from"./Dialog-Dx5PGef6.js";import{S as n}from"./save-RF4Fm78y.js";import{c as m}from"./createLucideIcon-Xa2G53WL.js";import{B as p}from"./Button-B_tSlyMA.js";import{T as s}from"./Text-U40rqCZc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BxhCGC-N.js";import"./useFocusRing-BS9YqB89.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./Button-CzM4r0Q8.js";import"./Hidden-B-ocAKFH.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./useResizeObserver-DsBe658C.js";import"./useControlledState-D4OQ_QAh.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DvRO0UAG.js";import"./Collection-B928yBNj.js";import"./index-hMpkQrUO.js";import"./Separator-CFMUc0y5.js";import"./SelectionManager-ydqEliBd.js";import"./useEvent-MCxZUdsg.js";import"./scrollIntoView-BBkPTMW6.js";import"./SelectionIndicator--LpreWkm.js";import"./useDescription-jfs0LzVP.js";import"./ListKeyboardDelegate-TS4aAaQm.js";import"./Text-BwTtjMDe.js";import"./PressResponder-oCaC_hiz.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoZL00eg.js";import"./getScrollParent-D_EmKFyf.js";import"./VisuallyHidden-BtrvhTUL.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
