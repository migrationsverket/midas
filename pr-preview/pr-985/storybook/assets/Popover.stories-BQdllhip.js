import{j as r}from"./iframe-C-Lam_ng.js";import{S as n}from"./save-CmJ6NL0m.js";import{c as m}from"./createLucideIcon-44xnuqEI.js";import{$ as a}from"./Dialog-D85-23oJ.js";import{P as i}from"./Popover-DcUOIW9J.js";import{B as p}from"./Button-P88LisFb.js";import{T as s}from"./Text-CpVobgrZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-fej9ya2E.js";import"./utils-W06ddP_L.js";import"./clsx-B-dksMZM.js";import"./Hidden-LjeV_3jg.js";import"./useFocusRing-BOxTCQ-z.js";import"./index-B-1MEL0a.js";import"./index-AgIsqBR_.js";import"./useLabels-CL-84yha.js";import"./useButton-CI7GwtHS.js";import"./RSPContexts-B-YXtEWf.js";import"./OverlayArrow-BkOxcu8_.js";import"./useResizeObserver-BU5R8K1e.js";import"./useControlledState-CKRNIuAr.js";import"./Collection-Bk_dwAYv.js";import"./index-DuhlN3yt.js";import"./Separator-Bn6bUxSk.js";import"./SelectionManager-DS6MAhbr.js";import"./useEvent-z1sPjE67.js";import"./scrollIntoView-D5cAmATd.js";import"./SelectionIndicator-Hy3jm3Uq.js";import"./useDescription-_kbhm_E4.js";import"./ListKeyboardDelegate-DH8AGtvn.js";import"./Text-BfdfpGmz.js";import"./PressResponder-D4nt81Wh.js";import"./useLocalizedStringFormatter-DdCEe0_z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWmAp7Wq.js";import"./VisuallyHidden-_cUxrJf0.js";import"./clsx-Ciqy0D92.js";import"./Button.module-D7V8WCeR.js";import"./useLocalizedStringFormatter-h0NnrpaM.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
