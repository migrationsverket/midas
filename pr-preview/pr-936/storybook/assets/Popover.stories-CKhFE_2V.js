import{j as r}from"./iframe-DwmMgugL.js";import{S as n}from"./save-TeK29Xd4.js";import{c as m}from"./createLucideIcon-9R8XYZ6c.js";import{$ as a}from"./Dialog-D1YNyvRd.js";import{P as i}from"./Popover-CoUsr5oa.js";import{B as p}from"./Button-DoQx4OEV.js";import{T as s}from"./Text-uR4nWzwy.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Dle7h4uT.js";import"./utils-DmBjYA7q.js";import"./clsx-B-dksMZM.js";import"./Hidden-C52U5hS0.js";import"./useFocusRing-CzZK1_to.js";import"./index-DjWT9C0a.js";import"./index-BRzIZAFy.js";import"./useLabels-BFzRRTRc.js";import"./useButton-CUQ_mzTp.js";import"./RSPContexts-Bu2Edo6o.js";import"./OverlayArrow-wbJ3ETWU.js";import"./useResizeObserver-BguVcYqf.js";import"./useControlledState-yWDFBEGR.js";import"./Collection-PdcqvvyM.js";import"./index-D54BHJvF.js";import"./Separator-Cnmu05dX.js";import"./SelectionManager-DgjfJV5o.js";import"./useEvent-Jcjvrjge.js";import"./scrollIntoView-CjjreEs4.js";import"./SelectionIndicator-DNV4kXHD.js";import"./useDescription-DUuO3-sD.js";import"./ListKeyboardDelegate-ar09duhk.js";import"./Text-BgheBiT-.js";import"./PressResponder-Djs9pyA3.js";import"./useLocalizedStringFormatter-BaxlK3Fj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BGXuVfZe.js";import"./VisuallyHidden-Bjv_fvAd.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),W={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
