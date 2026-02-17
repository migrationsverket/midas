import{j as r}from"./iframe-CLZ7lMWL.js";import{P as a}from"./Popover-CQBSpcVE.js";import{$ as i}from"./Dialog-CXJMpsnJ.js";import{B as n}from"./Button-epCGRlhZ.js";import{S as p}from"./save-3I971m0Q.js";import{c as m}from"./createLucideIcon-CqL2zG8F.js";import{T as s}from"./Text-BMOUMG_N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-NBOTP4rD.js";import"./useFocusRing-ChcbSX8A.js";import"./utils-2WeD-wN4.js";import"./index-joeLWnyk.js";import"./index-BQfKMPTh.js";import"./Button-BdHKCjLS.js";import"./Hidden-To-3RG_j.js";import"./useLabels-DWLJ680t.js";import"./useButton-BRhObPaf.js";import"./useResizeObserver-tdEzEOOs.js";import"./useControlledState-Ch1Apm7b.js";import"./RSPContexts-p4UD-iwG.js";import"./Collection-D5JQNHBM.js";import"./index-DFhlRqD6.js";import"./Separator-BB7lIjRA.js";import"./SelectionManager-DXid-Z9i.js";import"./useEvent-A6WuRPvM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ml-LKVKH.js";import"./useDescription-DN7NAyXj.js";import"./ListKeyboardDelegate-zdtkEJzt.js";import"./Text-DRJ2hBXG.js";import"./PressResponder-fHgI3hkF.js";import"./useLocalizedStringFormatter-C7tLz9-g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9mV23my.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BKsebB3-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKKvMQ_v.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
