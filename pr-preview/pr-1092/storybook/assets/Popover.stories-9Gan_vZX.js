import{j as r}from"./iframe-C_rSI28S.js";import{P as a}from"./Popover-BpG9x7Y0.js";import{$ as i}from"./Dialog-DMbz8tWh.js";import{B as n}from"./Button-DfJo8lJp.js";import{S as p}from"./save-CT9QMpAU.js";import{c as m}from"./createLucideIcon-DJNcDtcF.js";import{T as s}from"./Text-D8Oj8wTT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-GDHlNZL-.js";import"./useFocusRing-1c7-b3IG.js";import"./utils-B9fitk-d.js";import"./index-D-oq6Wi4.js";import"./index-DhVgnvLi.js";import"./Button-BZMldgT_.js";import"./Hidden-DkMo9DJh.js";import"./useLabels-BB_4cBjW.js";import"./useButton-BJxdkC7q.js";import"./useResizeObserver-CLjwbffR.js";import"./useControlledState-Bu5qipFz.js";import"./RSPContexts-CccBVtRj.js";import"./Collection-DQPpNpIp.js";import"./index-CMNlANvy.js";import"./Separator-DseIPh_7.js";import"./SelectionManager-OOYxevrX.js";import"./useEvent-Bpac53ZB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C8GAWl4j.js";import"./useDescription-w-LKIPXs.js";import"./ListKeyboardDelegate-D1l7F5b-.js";import"./Text-C0Ky8cuO.js";import"./PressResponder-DbjOz25Q.js";import"./useLocalizedStringFormatter-CS1E0pV3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CALY2agj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DjxO6q8B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-iM29cO5J.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
