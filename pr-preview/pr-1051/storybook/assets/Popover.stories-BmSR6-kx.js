import{j as r}from"./iframe-B5fT8W8B.js";import{P as a}from"./Popover-DYl4vHjt.js";import{$ as i}from"./Dialog-DvKYvcjN.js";import{S as n}from"./save-CkTqIajz.js";import{c as m}from"./createLucideIcon-ChldPQr9.js";import{B as p}from"./Button-Cbu0zB47.js";import{T as s}from"./Text-DNRTdsIF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bh7KGz6i.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BNkBoj7e.js";import"./useFocusRing-BgTsLm0m.js";import"./index-CkX7KbtT.js";import"./index-C5IsVOl0.js";import"./Button-DoDt4li8.js";import"./Hidden-DB3eEGqq.js";import"./useLabels-D60PMjBU.js";import"./useButton-CPqG-nUq.js";import"./useResizeObserver-BXLfxhXd.js";import"./useControlledState-BGmHapEN.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-D1Lpp2lJ.js";import"./Collection-D0ciEbnT.js";import"./index-XlgYwMjJ.js";import"./Separator-CaeDAGZa.js";import"./SelectionManager-EQR1HDvb.js";import"./useEvent-DJwUrGHD.js";import"./scrollIntoView-B84U33Mc.js";import"./SelectionIndicator-CF8GTE7k.js";import"./useDescription-_hkkBgKI.js";import"./ListKeyboardDelegate-BMePGJGy.js";import"./Text-DOeKj6x7.js";import"./PressResponder-Bmoe4W4a.js";import"./useLocalizedStringFormatter-CcytJjyB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BxiC26xr.js";import"./getScrollParent-DN2Ny2rG.js";import"./VisuallyHidden-DiGmQZwe.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CVUeiCFD.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
