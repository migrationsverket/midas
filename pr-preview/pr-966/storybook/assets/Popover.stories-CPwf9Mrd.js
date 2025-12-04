import{j as r}from"./iframe-DfJuQE8m.js";import{S as n}from"./save-B_59iT-N.js";import{c as m}from"./createLucideIcon-Bek8kOw5.js";import{$ as a}from"./Dialog-CZsdvfkm.js";import{P as i}from"./Popover-LFcU3rXq.js";import{B as p}from"./Button-DUMkSbLt.js";import{T as s}from"./Text-C0meLp2u.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C1h3qiWM.js";import"./utils-DhOIe8g4.js";import"./clsx-B-dksMZM.js";import"./Hidden-L0FDO2bN.js";import"./useFocusRing-DEOWgYwB.js";import"./index-CQALj8IV.js";import"./index-BkqquRj0.js";import"./useLabels-ukq135hJ.js";import"./useButton-D5urjP3V.js";import"./RSPContexts-Bl-t2YWe.js";import"./OverlayArrow-Bov2DMmm.js";import"./useResizeObserver-BSNTYhDh.js";import"./useControlledState-eRrBZcf1.js";import"./Collection-zRDc75Sn.js";import"./index-CFUygh5x.js";import"./Separator-a1OeMPZ9.js";import"./SelectionManager-381fJsVV.js";import"./useEvent-sIyE_x4m.js";import"./scrollIntoView-BOxlOCOK.js";import"./SelectionIndicator-BMh5Wja0.js";import"./useDescription-Cvwf_bWB.js";import"./ListKeyboardDelegate-DxvgtmVa.js";import"./Text-BE6FOv1W.js";import"./PressResponder-BJHsACuL.js";import"./useLocalizedStringFormatter-DiGWatbI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-irao4iUV.js";import"./VisuallyHidden-Cs6c7lY9.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAe3Ejvu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
