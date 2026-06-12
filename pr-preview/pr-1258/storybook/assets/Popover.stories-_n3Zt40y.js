import{j as r}from"./iframe-CWlixrW_.js";import{P as a}from"./Popover-BEkEb1Y6.js";import{$ as i}from"./Dialog-DjmcXnG0.js";import{S as n}from"./save-DNhgYgVm.js";import{c as m}from"./createLucideIcon-Ay7p0EQv.js";import{B as p}from"./Button-DHj3NF2u.js";import{T as s}from"./Text-CaYrS64L.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CRaSuqNF.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DKZA2JNv.js";import"./useFocusRing-DDmLMMaV.js";import"./index-9FhWo1dj.js";import"./index-_BXH5tR9.js";import"./Button-kA2ued5f.js";import"./Hidden-C139jkL0.js";import"./useLabel-DkzOQx4t.js";import"./useLabels-C00UR8Eo.js";import"./useButton-DQDkLrpI.js";import"./useResizeObserver-C-ftW52s.js";import"./useControlledState-CzRWfzat.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-D4D98plB.js";import"./Collection-EO1AcQfg.js";import"./index-CFLy-5bI.js";import"./Separator-ClT2p5T2.js";import"./SelectionManager-Be9sokqv.js";import"./useEvent-Ditv3QO5.js";import"./scrollIntoView-AfG37jOw.js";import"./SelectionIndicator-DtNX-UQ2.js";import"./useDescription-DXpo-reC.js";import"./ListKeyboardDelegate-C63MTa-n.js";import"./Text-oz4ou16d.js";import"./PressResponder-DFbfA2hF.js";import"./useLocalizedStringFormatter-ViKOiGge.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzLA8zs-.js";import"./getScrollParent-DWEouMlM.js";import"./VisuallyHidden-BQ6ylskT.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BtK1NWhh.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
