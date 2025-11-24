import{j as r}from"./iframe-GcUoBMSg.js";import{S as n}from"./save-BWsFg5Uw.js";import{c as m}from"./createLucideIcon-iWDg5CCZ.js";import{$ as a}from"./Dialog-DYfIYppF.js";import{P as i}from"./Popover-nBLGaqsv.js";import{B as p}from"./Button-CKo_jchp.js";import{T as s}from"./Text-CNOZt7Js.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DSIvaIV3.js";import"./utils-rtD3T3TW.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqpeSpmt.js";import"./useFocusRing-DIuTFd3b.js";import"./index-DRY6s0Uf.js";import"./index-CzFqfJNr.js";import"./useLabels-DexiCPCf.js";import"./useButton-DXkPYxVk.js";import"./RSPContexts-B8ZXf98J.js";import"./OverlayArrow-BcNhpTrX.js";import"./useResizeObserver-j9xgkMrU.js";import"./useControlledState-BbDaPJvR.js";import"./Collection-DN0v5seS.js";import"./index-D9YajRC4.js";import"./Separator-Dc2O86N8.js";import"./SelectionManager-C_5PIkPp.js";import"./useEvent-B47GfUV2.js";import"./scrollIntoView-DEGH2g_V.js";import"./SelectionIndicator-BRxVJQ3E.js";import"./useDescription-DegkKtjI.js";import"./ListKeyboardDelegate-oF-WQ10S.js";import"./Text-F1ylVkWL.js";import"./PressResponder-BWvYHgKI.js";import"./useLocalizedStringFormatter-ygoypWk4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJeQ7SrW.js";import"./VisuallyHidden-CO11mDnh.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-3VUd_YGv.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
