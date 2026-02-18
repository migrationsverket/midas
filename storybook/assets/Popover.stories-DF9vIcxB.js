import{j as r}from"./iframe-Dv5oy3ex.js";import{P as a}from"./Popover-DqyP9DKX.js";import{$ as i}from"./Dialog-Bk8rq18R.js";import{B as n}from"./Button-DFKGQSYP.js";import{S as p}from"./save-MGMTWkey.js";import{c as m}from"./createLucideIcon-BqwtoRoR.js";import{T as s}from"./Text-BnCHL2hB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Bu-qbdnc.js";import"./useFocusRing-DFkj2PJJ.js";import"./utils-DqE5PILI.js";import"./index-COb2Vy-7.js";import"./index-IcK2KPt1.js";import"./Button-BH4eeu0k.js";import"./Hidden-CxtegDl0.js";import"./useLabels-Dt8q9qYY.js";import"./useButton-B42S7nFw.js";import"./useResizeObserver-2uNCjIkJ.js";import"./useControlledState-CnplxgpR.js";import"./RSPContexts-Bum2SDPF.js";import"./Collection-Dzh3Awwz.js";import"./index-5xno2gQO.js";import"./Separator-CaS-v3a9.js";import"./SelectionManager-DSzDDqTJ.js";import"./useEvent-6NaHNc9j.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc32OT_a.js";import"./useDescription-R2YOgaZ4.js";import"./ListKeyboardDelegate-DbvsQKFt.js";import"./Text-D7P0gU-S.js";import"./PressResponder-B8nhnZOL.js";import"./useLocalizedStringFormatter-Ci5_pA40.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-pEGSvzdu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ziZ6pEVt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BSci6oqP.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
