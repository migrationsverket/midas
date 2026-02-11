import{j as r}from"./iframe-BZJIgrzq.js";import{P as a}from"./Popover-DQyXc06k.js";import{$ as i}from"./Dialog-CcNPSpKX.js";import{B as n}from"./Button-CLHjLMLk.js";import{S as p}from"./save-DcfI8VIB.js";import{c as m}from"./createLucideIcon-OgUSFDFv.js";import{T as s}from"./Text-CLRTBMzT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CSCLCtnW.js";import"./useFocusRing-CLRJYDX3.js";import"./utils-CDsu9e82.js";import"./index-CMFY0fD_.js";import"./index-DLK3qOyE.js";import"./Button-nILSV0Zl.js";import"./Hidden-BH3zIE_M.js";import"./useLabels-1qpMULhJ.js";import"./useButton-DhBm0XNi.js";import"./useResizeObserver-C4hmgU3I.js";import"./useControlledState-YwjV-cgx.js";import"./RSPContexts-Db0C8CO2.js";import"./Collection-Bw20jmHK.js";import"./index-CHIfq2GA.js";import"./Separator-DSVl1r7I.js";import"./SelectionManager-TMotc0NR.js";import"./useEvent-8RC0B9o7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEjfesxB.js";import"./useDescription-D0LbgrVb.js";import"./ListKeyboardDelegate-C3FvELMR.js";import"./Text-BCf7Uakc.js";import"./PressResponder-CM1z-dcT.js";import"./useLocalizedStringFormatter--c6s_bUB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CUc15JYj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C0iAQ1h6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-c0g796co.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
