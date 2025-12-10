import{j as r}from"./iframe-C9g4MTX7.js";import{S as n}from"./save-CjbXuANR.js";import{c as m}from"./createLucideIcon-mQbrOUxF.js";import{$ as a}from"./Dialog-B1VUh1MD.js";import{P as i}from"./Popover-DhqI-H1D.js";import{B as p}from"./Button-Cd6lSrpE.js";import{T as s}from"./Text-CbrSL-Nv.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-_3UTtnws.js";import"./utils-_Jmhc4hr.js";import"./clsx-B-dksMZM.js";import"./Hidden-Blvi27yb.js";import"./useFocusRing-DG43Unny.js";import"./index-C_J0lp9X.js";import"./index-DhjFuTvG.js";import"./useLabels-LOj0MSb9.js";import"./useButton-BIIPbxfI.js";import"./RSPContexts-vx5S09HY.js";import"./OverlayArrow-CWpyETov.js";import"./useResizeObserver-Cbz0T_4Q.js";import"./useControlledState-FOZz2YKy.js";import"./Collection-YEJssIt5.js";import"./index-Dg75dvRG.js";import"./Separator-CurZBUS-.js";import"./SelectionManager-BAaQ0uR4.js";import"./useEvent-Bv7P4LMn.js";import"./scrollIntoView-DxrqCAfs.js";import"./SelectionIndicator-FjxP8PaG.js";import"./useDescription-4ih0aY-K.js";import"./ListKeyboardDelegate-C7faG6eE.js";import"./Text-XjFf9xI5.js";import"./PressResponder-CmSEDKi3.js";import"./useLocalizedStringFormatter-DewJi2DS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DWsgVBc_.js";import"./VisuallyHidden-CMi3wTGx.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0wJzWuW.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
