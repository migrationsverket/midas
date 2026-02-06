import{j as r}from"./iframe-D-REpNT2.js";import{P as a}from"./Popover-DsVfs9l5.js";import{$ as i}from"./Dialog-CrHh5riv.js";import{B as n}from"./Button-MhaT5nTu.js";import{S as p}from"./save-CvLakavt.js";import{c as m}from"./createLucideIcon-BcZu8RhE.js";import{T as s}from"./Text-MiHH5yI1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DfQnH08H.js";import"./useFocusRing-BWmdFu0w.js";import"./utils-BDMdsvrX.js";import"./index-CBX90dgQ.js";import"./index-Bb_XCQXS.js";import"./Button-CSGruNvs.js";import"./Hidden-DBxbBPM8.js";import"./useLabels-CL0mObZW.js";import"./useButton-BVLm7XF-.js";import"./useResizeObserver-B9yDolf1.js";import"./useControlledState-CRTz0NCq.js";import"./RSPContexts-CXb92NO5.js";import"./Collection-Bu1IPCuJ.js";import"./index-C3LxNUCX.js";import"./Separator-BVe-YMpx.js";import"./SelectionManager-zKJSBzzj.js";import"./useEvent-D-eD8_or.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CYwlpBgk.js";import"./useDescription-5inR-ZqS.js";import"./ListKeyboardDelegate-CibTaz9W.js";import"./Text-C9Slm4PY.js";import"./PressResponder-oUkAjckc.js";import"./useLocalizedStringFormatter-D5aBFhGc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sckNPW58.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CjlKzDWm.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cz89ib5x.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
