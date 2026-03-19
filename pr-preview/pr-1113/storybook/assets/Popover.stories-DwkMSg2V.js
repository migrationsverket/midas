import{j as r}from"./iframe-DmYAiZdS.js";import{P as a}from"./Popover-DOnUpo5Y.js";import{$ as i}from"./Dialog-BDsEG8m5.js";import{S as n}from"./save-Fn6MQZPv.js";import{c as m}from"./createLucideIcon-Cd1S2Ifo.js";import{B as p}from"./Button-CF56JNsj.js";import{T as s}from"./Text-DrUi_0Jd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ce8T3nBz.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CiQoy8mT.js";import"./useFocusRing-uVSx56YJ.js";import"./index-Clg0oazY.js";import"./index-BekCUKef.js";import"./Button-B_13vb86.js";import"./Hidden-DSqyIKF7.js";import"./useLabels-o8QMpPqb.js";import"./useButton-DhL-fajU.js";import"./useResizeObserver-ANlX-eKR.js";import"./useControlledState-C0DEKgGJ.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-6HyyfxyX.js";import"./Collection-0fQlzL78.js";import"./index-CQQkbUYQ.js";import"./Separator-D0kpJxeR.js";import"./SelectionManager-BVp_eIxO.js";import"./useEvent-BzBaGFQj.js";import"./scrollIntoView-7nJ5XGAi.js";import"./SelectionIndicator-CMBrlIkZ.js";import"./useDescription-Bg_KyiAu.js";import"./ListKeyboardDelegate-CCjCEqng.js";import"./Text-Cpi_AAzk.js";import"./PressResponder-CeZflBSS.js";import"./useLocalizedStringFormatter-BxKtkIxd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeWaAnEg.js";import"./getScrollParent-Bu3T6bJu.js";import"./VisuallyHidden-HoFr5-6u.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BrrMXkxk.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
