import{j as r}from"./iframe-DZFoTsAP.js";import{P as a}from"./Popover-BmXNd6c7.js";import{$ as i}from"./Dialog-K0HBlPWu.js";import{S as n}from"./save-DOQHihB5.js";import{c as m}from"./createLucideIcon-D8OPAh1o.js";import{B as p}from"./Button-DrMZqG88.js";import{T as s}from"./Text-BTLpICHy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgDH_W4s.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D_bcYX2Q.js";import"./useFocusRing-BOfY4fHs.js";import"./index-C0QzEn7-.js";import"./index-qTuN-RN1.js";import"./Button-DXuM91n-.js";import"./Hidden-CfeWKfQs.js";import"./useLabels-5V9A1z8O.js";import"./useButton-DlimN8Sl.js";import"./useResizeObserver-DL4n-NVK.js";import"./useControlledState-DdgMtiiZ.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-BEm_mhkG.js";import"./Collection-D92hNAQF.js";import"./index-JR0-rleW.js";import"./Separator-BtfYlAGj.js";import"./SelectionManager-BkDv12c8.js";import"./useEvent-BV0hRtep.js";import"./scrollIntoView-BWZteTWd.js";import"./SelectionIndicator-D0pzxM3X.js";import"./useDescription-DUddkFIG.js";import"./ListKeyboardDelegate-C20pHG0c.js";import"./Text-CDyd3dUQ.js";import"./PressResponder-DLlHUZ0n.js";import"./useLocalizedStringFormatter-DXt9zP7M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDKtzH8k.js";import"./getScrollParent-CVqyyLK3.js";import"./VisuallyHidden-CsEimcih.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BFv7ZkAg.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
