import{j as r}from"./iframe-Ix5wRpaN.js";import{S as n}from"./save-DYliE4Cd.js";import{c as m}from"./createLucideIcon-YU44cn6f.js";import{$ as a}from"./Dialog-BceAbOhC.js";import{P as i}from"./Popover-EocjC30m.js";import{B as p}from"./Button-DyCCzjyo.js";import{T as s}from"./Text-B11VOrpZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BM7g1M5L.js";import"./utils-IjPZU40W.js";import"./clsx-B-dksMZM.js";import"./Hidden-CNH6e1Wd.js";import"./useFocusRing-DQ3B9kj8.js";import"./index-BxboPkxI.js";import"./index-DhXNeZr5.js";import"./useLabels-Duwc-TYD.js";import"./useButton-Bj416gmr.js";import"./RSPContexts-Ci7SZAye.js";import"./OverlayArrow-D1gyUw3-.js";import"./useResizeObserver-CacsnmkD.js";import"./useControlledState-B8ejMBKU.js";import"./Collection-DFIlvKZ4.js";import"./index-PxkW4WaJ.js";import"./Separator-D1k2Ughs.js";import"./SelectionManager-D36DbuXR.js";import"./useEvent-CMFoSART.js";import"./scrollIntoView-Dghqke3L.js";import"./SelectionIndicator-D_ktuef1.js";import"./useDescription-TqfBx-LN.js";import"./ListKeyboardDelegate-DadYOWPa.js";import"./Text-C--26gLT.js";import"./PressResponder-Blt_lbk5.js";import"./useLocalizedStringFormatter-D-Y0AvCi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DvjOSPHQ.js";import"./VisuallyHidden-CXRQ0hU3.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DOQfTjJs.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
