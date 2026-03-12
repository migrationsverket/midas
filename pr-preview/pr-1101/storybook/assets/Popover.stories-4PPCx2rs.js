import{j as r}from"./iframe-BXrSm-hy.js";import{P as a}from"./Popover-DlU6RgBw.js";import{$ as i}from"./Dialog-B-jsIdFo.js";import{S as n}from"./save-BXlaxkeC.js";import{c as m}from"./createLucideIcon-DYDRqzsr.js";import{B as p}from"./Button-DLjOZTyV.js";import{T as s}from"./Text-BpOUZ-T-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-m8hafyc1.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Tc9nsuaS.js";import"./useFocusRing-Dolnnvn8.js";import"./index-DH1xR7sx.js";import"./index-BEWugSXc.js";import"./Button-QWm8aeY3.js";import"./Hidden-Bt1SQac9.js";import"./useLabels-BpFbPl_Z.js";import"./useButton-lx5Wqlq6.js";import"./useResizeObserver-BW9eI8vu.js";import"./useControlledState-D-2kZI1H.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-BrZ6stA1.js";import"./Collection-V7haSTvz.js";import"./index-BfXHwUr8.js";import"./Separator-Cjx8ObZX.js";import"./SelectionManager-Ccbj1cbx.js";import"./useEvent-B4KqqYDZ.js";import"./scrollIntoView-Be-7cfO7.js";import"./SelectionIndicator-C5uXLrVT.js";import"./useDescription-BgOqUMKe.js";import"./ListKeyboardDelegate-BnfSiAt7.js";import"./Text-D-y5Nkc_.js";import"./PressResponder-Byq9ymm9.js";import"./useLocalizedStringFormatter-DxuMEbeM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ce0_Z5Jv.js";import"./getScrollParent-DJrEkJWW.js";import"./VisuallyHidden-CdQ2OkWx.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dv29l914.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
