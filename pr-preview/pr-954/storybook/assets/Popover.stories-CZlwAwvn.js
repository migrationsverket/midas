import{j as r}from"./iframe-DwenO7ee.js";import{S as n}from"./save-Cg0MWKtt.js";import{c as m}from"./createLucideIcon-CA6X7-no.js";import{$ as a}from"./Dialog-CBZJb7MW.js";import{P as i}from"./Popover-B8hy8FhJ.js";import{B as p}from"./Button-B4MIMYl2.js";import{T as s}from"./Text-f-cH2Nc1.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BweeCEHL.js";import"./utils-B04QOTqX.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cu6WCKNR.js";import"./useFocusRing-DMrg0sfB.js";import"./index-xMNIBZ7U.js";import"./index-DeJVUVa5.js";import"./useLabels-CZNC_GkZ.js";import"./useButton-BxnkwXfu.js";import"./RSPContexts-BkoZaB3n.js";import"./OverlayArrow-DTZ9SX0m.js";import"./useResizeObserver-BhOhVkDQ.js";import"./useControlledState-BpTl-34E.js";import"./Collection-Bvnyi-n-.js";import"./index-BgBpgMa-.js";import"./Separator-DP0E3I2M.js";import"./SelectionManager-BqHINbiI.js";import"./useEvent-CHalSxnW.js";import"./scrollIntoView-mzLO5Dzu.js";import"./SelectionIndicator-B1PjTVfM.js";import"./useDescription-Bo32FiVm.js";import"./ListKeyboardDelegate-DQUPQuil.js";import"./Text-DBlsv5Fr.js";import"./PressResponder-BMrkwj5U.js";import"./useLocalizedStringFormatter-BmtD3KPy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CmvpSIIr.js";import"./VisuallyHidden-D6EEr8kz.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3eP5Seam.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
