import{j as r}from"./iframe-Y9Fx-e1B.js";import{P as a}from"./Popover-D5cyLeNa.js";import{$ as i}from"./Dialog-BcVfrZ1q.js";import{B as n}from"./Button-k0gPOjAM.js";import{S as p}from"./save-F5OHaUqU.js";import{c as m}from"./createLucideIcon-CkeYV7Jq.js";import{T as s}from"./Text-By_wui5t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C0efwt1x.js";import"./useFocusRing-DMFWV4N3.js";import"./utils-tjsFOw4T.js";import"./index-rl_t3oro.js";import"./index-CoUwmbWb.js";import"./Button-C7bYDuo2.js";import"./Hidden-C5yYJ2g8.js";import"./useLabels-D5SCo0gw.js";import"./useButton-BIY4kkQ2.js";import"./useResizeObserver-D3guSGKd.js";import"./useControlledState-Dt63NuRp.js";import"./RSPContexts-SJiJ_uHO.js";import"./Collection-DL_ASsG3.js";import"./index-G7Co38C3.js";import"./Separator-B2Sw61m-.js";import"./SelectionManager-D8wjYhYM.js";import"./useEvent-IYNS4JE3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DO9xWdRa.js";import"./useDescription-B2vMFsED.js";import"./ListKeyboardDelegate-BRLf6YZa.js";import"./Text-Rwl3gWWv.js";import"./PressResponder-BJlyIV_Q.js";import"./useLocalizedStringFormatter-Cz-yREfr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMghiz9Y.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-uQrH2dzx.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CKHZ7v8y.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
