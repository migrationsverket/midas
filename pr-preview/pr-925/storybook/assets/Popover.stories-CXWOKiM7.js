import{j as r}from"./iframe-CcFj61hi.js";import{S as n}from"./save-emfC5mYe.js";import{c as m}from"./createLucideIcon-pE-zvx_b.js";import{$ as a}from"./Dialog-D4CFCaRg.js";import{P as i}from"./Popover-D9kDRdmu.js";import{B as p}from"./Button-DCIYWzuo.js";import{T as s}from"./Text-BqVsEr9P.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-B1O3Yrk6.js";import"./utils-CsHqKOjh.js";import"./clsx-B-dksMZM.js";import"./Hidden-meMQGPd4.js";import"./useFocusRing-tven7JmU.js";import"./index-DGWwOE3x.js";import"./index-BNjYms5q.js";import"./useLabels-BR7Zi-G6.js";import"./useButton-6rhH5hF9.js";import"./RSPContexts-DH4UiXRZ.js";import"./OverlayArrow-DuLm_AeX.js";import"./useResizeObserver-elSf9-E4.js";import"./useControlledState-CS68R5UU.js";import"./Collection-TTOn1B46.js";import"./index-DU0eoAI4.js";import"./Separator-DCFolOPa.js";import"./SelectionManager-CBeYtRWI.js";import"./useEvent-z1bYF1OT.js";import"./scrollIntoView-BAiEh8sy.js";import"./SelectionIndicator-CsFMiP1E.js";import"./useDescription-DcDlBbEU.js";import"./ListKeyboardDelegate-CP17FQUZ.js";import"./Text-CVt-e_rr.js";import"./PressResponder-CcYMnq3L.js";import"./useLocalizedStringFormatter-Ciz81QXa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-2W37j7Q_.js";import"./VisuallyHidden-5KJu7kOB.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-MF-hbWH5.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
