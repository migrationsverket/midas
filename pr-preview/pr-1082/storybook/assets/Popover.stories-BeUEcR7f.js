import{j as r}from"./iframe-DMN73KB2.js";import{P as a}from"./Popover-CklDT1fD.js";import{$ as i}from"./Dialog-DcZbMXkv.js";import{B as n}from"./Button-Ck576HV9.js";import{S as p}from"./save-ClZfYIoO.js";import{c as m}from"./createLucideIcon-C88Lc7aZ.js";import{T as s}from"./Text-B0z8pO1R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BU1AkI_T.js";import"./useFocusRing-BhcplY33.js";import"./utils-ytX4X4hU.js";import"./index-Qnw9UhGM.js";import"./index-DrmiERuM.js";import"./Button-CGbtmoIr.js";import"./Hidden-BA-gHfWt.js";import"./useLabels-CRP67w2C.js";import"./useButton-CkF7Pwvg.js";import"./useResizeObserver-lUohFryK.js";import"./useControlledState-DtotprCd.js";import"./RSPContexts-Be8xIyRm.js";import"./Collection-BVCQUf8U.js";import"./index-ZVlvUlGw.js";import"./Separator-Dxb0YODw.js";import"./SelectionManager-Cox4bVbR.js";import"./useEvent-I49ndoPs.js";import"./scrollIntoView-BoaQO-l5.js";import"./SelectionIndicator-CNseZYUo.js";import"./useDescription-lqHqz3yA.js";import"./ListKeyboardDelegate-BnhUGRCm.js";import"./Text-DjG6q6Y1.js";import"./PressResponder-BL8bUdIr.js";import"./useLocalizedStringFormatter-B6PiDztw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0x70afu.js";import"./getScrollParent-tlP_VOWl.js";import"./VisuallyHidden-CJkttl4h.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CiDW_veP.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
