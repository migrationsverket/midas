import{j as r}from"./iframe-BludVCPL.js";import{S as n}from"./save-CBlde4UO.js";import{c as m}from"./createLucideIcon-DcDehA1r.js";import{$ as a}from"./Dialog-NGsBiAvQ.js";import{P as i}from"./Popover-Dmdd-Cu_.js";import{B as p}from"./Button-BMfaash4.js";import{T as s}from"./Text-4OIt-jaA.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CjGnslnG.js";import"./utils-BoYzwdTq.js";import"./clsx-B-dksMZM.js";import"./Hidden-DiUQMeVN.js";import"./useFocusRing-Bo_hMFPQ.js";import"./index-nZf0-c-4.js";import"./index-CLlIRgpI.js";import"./useLabels-CO3fVOFf.js";import"./useButton-B0B4GjtL.js";import"./RSPContexts-iVsZHsvb.js";import"./OverlayArrow-BB08AjEm.js";import"./useResizeObserver-DYKnm_GK.js";import"./useControlledState-CuHjUcW0.js";import"./Collection-DPwfbabj.js";import"./index-ioBwjV19.js";import"./Separator-fPHNx-_f.js";import"./SelectionManager-BJaM4A7j.js";import"./useEvent-C0paImUG.js";import"./scrollIntoView-Dnq7ttBi.js";import"./SelectionIndicator-C0xKl5-A.js";import"./useDescription-Ci4JSH0r.js";import"./ListKeyboardDelegate-DxarZjkL.js";import"./Text-DjPdOjsD.js";import"./PressResponder-_BVhgS5_.js";import"./useLocalizedStringFormatter-B4WIXBM0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DUD7FXJ3.js";import"./VisuallyHidden-vUa_tkI4.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXNZT2cC.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
