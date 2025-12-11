import{j as r}from"./iframe-CKrxTJqk.js";import{S as n}from"./save-7SGTg1JN.js";import{c as m}from"./createLucideIcon-BNr4CCY-.js";import{$ as a}from"./Dialog-bY3-AyaQ.js";import{P as i}from"./Popover-QHWmYIS1.js";import{B as p}from"./Button-DkUXR3sV.js";import{T as s}from"./Text-Ci3fUjCZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DigNz_6t.js";import"./utils-CTp3wZxS.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bbcauoo1.js";import"./useFocusRing-DRsukC58.js";import"./index-gQIqyNrY.js";import"./index-C-w1hNWf.js";import"./useLabels-FN4mMJOV.js";import"./useButton-B9vJGxui.js";import"./RSPContexts-uVMYOfO4.js";import"./OverlayArrow-D10FCSGe.js";import"./useResizeObserver-DhOgD2oT.js";import"./useControlledState-DaVWaM2P.js";import"./Collection-mzSYiwho.js";import"./index-BwxB3nHP.js";import"./Separator-CHBDTMW7.js";import"./SelectionManager-CybRNFvT.js";import"./useEvent-DOM6ytFV.js";import"./scrollIntoView-fAHEVyF_.js";import"./SelectionIndicator-wQCjbn2j.js";import"./useDescription-epMjwWcy.js";import"./ListKeyboardDelegate-DuXJOj-k.js";import"./Text-DxGoKI9p.js";import"./PressResponder-50-epSN9.js";import"./useLocalizedStringFormatter-a3l9aGqu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-qWpmxnYs.js";import"./VisuallyHidden-Lpl0yh2S.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CbUcgQXm.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
