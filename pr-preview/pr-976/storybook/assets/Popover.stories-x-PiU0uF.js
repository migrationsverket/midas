import{j as r}from"./iframe-9RZ8qS0V.js";import{S as n}from"./save-CN8luY8o.js";import{c as m}from"./createLucideIcon-BEqaj3-I.js";import{$ as a}from"./Dialog-D4lCEOCj.js";import{P as i}from"./Popover-CrcIFw5_.js";import{B as p}from"./Button-_QzePwKA.js";import{T as s}from"./Text-C5_vA2qs.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DwckI6V_.js";import"./utils-BWR78VZD.js";import"./clsx-B-dksMZM.js";import"./Hidden-CoooHu5i.js";import"./useFocusRing-C1UymAdv.js";import"./index-DYDrgj8o.js";import"./index-DXKOmJXy.js";import"./useLabels-DYhyLCxD.js";import"./useButton-CvOgPonk.js";import"./RSPContexts-Ds-Tiy4a.js";import"./OverlayArrow-Ni2lUNrt.js";import"./useResizeObserver-CXYUE0pF.js";import"./useControlledState-C698iD7f.js";import"./Collection-RNgU2tiR.js";import"./index-YMhcIuwd.js";import"./Separator-vziZxE4T.js";import"./SelectionManager-D7KLd8Lh.js";import"./useEvent-eIh3SUOB.js";import"./scrollIntoView-BjOYFxBk.js";import"./SelectionIndicator-BPzi2wSX.js";import"./useDescription-QGCzoEz7.js";import"./ListKeyboardDelegate-Ck1YB2jp.js";import"./Text-DS83zdrx.js";import"./PressResponder-CKCxq1I_.js";import"./useLocalizedStringFormatter-BH65DG8h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CTT2eo6L.js";import"./VisuallyHidden-r7QMy6xC.js";import"./clsx-Ciqy0D92.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BtH6C6HU.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
