import{j as r}from"./iframe-BQhS1Nl-.js";import{P as a}from"./Popover-DZWNjICi.js";import{$ as i}from"./Dialog-CybleB_G.js";import{B as n}from"./Button-DJ5OBxjs.js";import{S as p}from"./save-VIbYJZUQ.js";import{c as m}from"./createLucideIcon-DJtzdfmE.js";import{T as s}from"./Text-C6md5qJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B0oGNqhn.js";import"./useFocusRing-C7eLc3ua.js";import"./utils-DX-1lbRH.js";import"./index-BaCUsZ-2.js";import"./index-DPBbUFQF.js";import"./Button-Dr48bfBY.js";import"./Hidden-XO9eD8nd.js";import"./useLabels-DSkvQYsZ.js";import"./useButton-28B5gFXv.js";import"./useResizeObserver-BVGCHz9Q.js";import"./useControlledState-DF0fFfyv.js";import"./RSPContexts-C79IcF5o.js";import"./Collection-CQ7e8hLV.js";import"./index-DS-ZCqJe.js";import"./Separator-B19MFsL4.js";import"./SelectionManager-CviCT7_t.js";import"./useEvent-DDuhPEOD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9HbQ8qQ.js";import"./useDescription-IaZzTqIH.js";import"./ListKeyboardDelegate-ClvxKoY7.js";import"./Text-tc6oiTHM.js";import"./PressResponder-TdTl1-2R.js";import"./useLocalizedStringFormatter-B1JkIDRF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUk09Tif.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DxSkEFyH.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BsVfwROU.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
