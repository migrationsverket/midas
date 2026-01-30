import{j as r}from"./iframe-BFkYxjpi.js";import{P as a}from"./Popover-C2aZ7GTb.js";import{a as i}from"./Dialog-B9a7SUZC.js";import{B as n}from"./Button-C3X5dVZs.js";import{S as p}from"./save-WoDhvsNi.js";import{c as m}from"./createLucideIcon-Dk_ZVBqn.js";import{T as s}from"./Text-f7GuBcHW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-ILsMLnhq.js";import"./useFocusRing-DhM4Chk4.js";import"./utils-Cvg_SbFj.js";import"./index-1TDjJkgb.js";import"./index-Bfl55b4y.js";import"./Button-CPeoJlq9.js";import"./Hidden-BxbGe5dx.js";import"./useLabels-BHCtKWaQ.js";import"./useButton-w70hhn_t.js";import"./useResizeObserver-D3KF8nv8.js";import"./useControlledState-Jpu9zhJ4.js";import"./RSPContexts-CX5DCwKf.js";import"./Collection-BK1fJAbU.js";import"./index-B4kv5YcN.js";import"./Separator-kJ6KgcrU.js";import"./SelectionManager-BEe4ixjS.js";import"./useEvent-C1J2zTQJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-hnY6KiAM.js";import"./useDescription-BbdIQJUv.js";import"./ListKeyboardDelegate-BhusCfZS.js";import"./Text-B49sPC4A.js";import"./PressResponder-Bc2YRcYe.js";import"./useLocalizedStringFormatter-CfQ5XL6Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YwsPYOCI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKZ765x3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3SxVOfHu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
