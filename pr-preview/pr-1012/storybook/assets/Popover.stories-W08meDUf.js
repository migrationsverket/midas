import{j as r}from"./iframe-CJgCBOSn.js";import{P as a}from"./Popover-CvF2RunL.js";import{a as i}from"./Dialog-BXeq8yIU.js";import{B as n}from"./Button-Cymdj4BH.js";import{S as p}from"./save-CQSa-OL1.js";import{c as m}from"./createLucideIcon-Dnv4tKqV.js";import{T as s}from"./Text-Dgha63Ct.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BWvk9jsj.js";import"./useFocusRing-Yl6f3H1r.js";import"./utils-g4p4NUI-.js";import"./index-D7z4XUKW.js";import"./index-JexUwc7G.js";import"./Button-CBtGc9Ub.js";import"./Hidden-ImloFknN.js";import"./useLabels-Dg-uXO6o.js";import"./useButton-Wu2FI5Vk.js";import"./useResizeObserver-DLVkKK8_.js";import"./useControlledState-ChV93gD3.js";import"./RSPContexts-D9FhM06Z.js";import"./Collection-CwyFg43Q.js";import"./index-1nYhzryp.js";import"./Separator-BIK8Hd3Y.js";import"./SelectionManager-LF9c0-Pj.js";import"./useEvent-CGoIXu2x.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-7KPouL.js";import"./useDescription-B_8Lnofc.js";import"./ListKeyboardDelegate-Dlthfsmd.js";import"./Text-DWxQCZze.js";import"./PressResponder-CyKCGOJN.js";import"./useLocalizedStringFormatter-CP4b5mEF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeMjaL19.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-lpY5sFDd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BC67XuMA.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
