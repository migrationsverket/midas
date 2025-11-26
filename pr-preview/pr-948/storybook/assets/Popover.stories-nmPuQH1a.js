import{j as r}from"./iframe-ESnm-WG3.js";import{S as n}from"./save-B5jjed02.js";import{c as m}from"./createLucideIcon-BI482lZK.js";import{$ as a}from"./Dialog-ClCm1x3w.js";import{P as i}from"./Popover-DOoH27IE.js";import{B as p}from"./Button-C-IyseEW.js";import{T as s}from"./Text-DgO_WfAt.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DFzAjeyw.js";import"./utils-CfF6X6ci.js";import"./clsx-B-dksMZM.js";import"./Hidden-CluJLsa9.js";import"./useFocusRing-DA_fDrnE.js";import"./index-vxsCmClI.js";import"./index-AgRx6xjg.js";import"./useLabels-CAK9137x.js";import"./useButton-6NzSPfmg.js";import"./RSPContexts-FqK3r0D2.js";import"./OverlayArrow-DKF8GtH1.js";import"./useResizeObserver-DuCEJASZ.js";import"./useControlledState-Df7HUCxc.js";import"./Collection-C-8Cbsbh.js";import"./index-CjhXrpIL.js";import"./Separator-D5Pkyu2p.js";import"./SelectionManager-B4xzLv80.js";import"./useEvent-CO_Npdc0.js";import"./scrollIntoView-yDgqYeez.js";import"./SelectionIndicator-BnOJ7FHR.js";import"./useDescription-BG6y4S9U.js";import"./ListKeyboardDelegate-DSKO2hYg.js";import"./Text-CopC_eFr.js";import"./PressResponder-BkJSiJRg.js";import"./useLocalizedStringFormatter-DiyOzk1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CNw16W3a.js";import"./VisuallyHidden-D9McEQWq.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dl_alOYb.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
