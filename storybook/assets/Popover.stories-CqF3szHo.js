import{j as r}from"./iframe--IbK7uvL.js";import{P as a}from"./Popover-C_KG0Jqv.js";import{$ as i}from"./Dialog-BziSI5az.js";import{S as n}from"./save-BEe59K4b.js";import{c as m}from"./createLucideIcon-CZI6jzSG.js";import{B as p}from"./Button-BYHfDOH9.js";import{T as s}from"./Text-qvWOJ16d.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CA7lVtot.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-wQIpOgVU.js";import"./useFocusRing-D2xoM2VM.js";import"./index-BZz7yXlj.js";import"./index-CXKCK8P0.js";import"./Button-Re0Yy6Pp.js";import"./Hidden-BExZVod8.js";import"./useLabels-rslA135_.js";import"./useButton-Cojk1q0i.js";import"./useResizeObserver-D4SKbTHF.js";import"./useControlledState-xHQ8O9W1.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CuIQ88x9.js";import"./Collection-DYP0TvTP.js";import"./index-DQ8CC9Ma.js";import"./Separator-CLdh5GVL.js";import"./SelectionManager-hB9sSLiJ.js";import"./useEvent-C2aKNcd9.js";import"./scrollIntoView-DpbtecG_.js";import"./SelectionIndicator-BVtUFBWh.js";import"./useDescription-C_IbgAiL.js";import"./ListKeyboardDelegate-CIOrWFjf.js";import"./Text-fLskqfUb.js";import"./PressResponder-Cu-sV0FT.js";import"./useLocalizedStringFormatter-Dg5HXGYt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6FfuHjp.js";import"./getScrollParent-BemRRphk.js";import"./VisuallyHidden-CYG4Jpuo.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dr2L-_6O.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
