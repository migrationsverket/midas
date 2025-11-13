import{j as r}from"./iframe-FtEa7VQj.js";import{S as n}from"./save-ED5bETgV.js";import{c as m}from"./createLucideIcon-BFKkZNi-.js";import{$ as a}from"./Dialog-BKLolvfT.js";import{P as i}from"./Popover-DpWEsjXP.js";import{B as p}from"./Button-BHyJkgwt.js";import{T as s}from"./Text-DiMsQpYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Dqxngb1_.js";import"./utils-COfxaHf8.js";import"./clsx-B-dksMZM.js";import"./Hidden-DvRPXbsY.js";import"./useFocusRing-D8XlJGR3.js";import"./index-DAEPIqsi.js";import"./index-loZrsOH8.js";import"./useLabels-BKIUEpC2.js";import"./useButton-cS6iWc3P.js";import"./RSPContexts-BCdKzl2o.js";import"./OverlayArrow-mq7tAYNM.js";import"./useResizeObserver-Crg5DKff.js";import"./useControlledState-CCkxZ5nC.js";import"./Collection-Aylh_77m.js";import"./index-BDcn4SpJ.js";import"./Separator-fIkq8orD.js";import"./SelectionManager-D_wMjdMu.js";import"./useEvent-S9LJqkM-.js";import"./scrollIntoView-DgbQWClN.js";import"./SelectionIndicator-DwyyQNvW.js";import"./useDescription-BpV-4EC3.js";import"./ListKeyboardDelegate-DMu8IpBO.js";import"./Text-ESAF9nxg.js";import"./PressResponder-P5z6VbJ-.js";import"./useLocalizedStringFormatter-iKxxmVnK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2Nxm4kL.js";import"./VisuallyHidden-DfcEnh0s.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),W={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const X=["Primary","Placement"];export{e as Placement,t as Primary,X as __namedExportsOrder,W as default};
