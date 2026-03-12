import{j as r}from"./iframe-cYpxZzUZ.js";import{P as a}from"./Popover-CYeW9AVh.js";import{$ as i}from"./Dialog-EHn9dooH.js";import{S as n}from"./save-B1Cnuda-.js";import{c as m}from"./createLucideIcon-CeCkLO_B.js";import{B as p}from"./Button-CJf-JCMB.js";import{T as s}from"./Text-BWvCs6nS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Da5YKx2_.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CvoS3GVf.js";import"./useFocusRing-Ro1kVhTk.js";import"./index-DWJi6tle.js";import"./index-nlAR4CdQ.js";import"./Button-I19PkSL9.js";import"./Hidden-CEh4KexJ.js";import"./useLabels-yIxCyUCA.js";import"./useButton-BTaVYt9k.js";import"./useResizeObserver-BMDdilg5.js";import"./useControlledState-BAEBGgdv.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-PAZO9wT0.js";import"./Collection-DMSsilCO.js";import"./index-BHK2Mwib.js";import"./Separator-BPdP3iah.js";import"./SelectionManager-CBa264Qr.js";import"./useEvent-CieYChAx.js";import"./scrollIntoView-rdHf84fN.js";import"./SelectionIndicator-CHMUoP5F.js";import"./useDescription-D_79kmmu.js";import"./ListKeyboardDelegate-MdSAf45I.js";import"./Text-BEBHFL1U.js";import"./PressResponder-VukDtROZ.js";import"./useLocalizedStringFormatter-BSJ4rvpt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C9JA0yfm.js";import"./getScrollParent-DCSYnjJt.js";import"./VisuallyHidden-DaBYovm5.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cgn8B_F7.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
