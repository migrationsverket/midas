import{j as r}from"./iframe-CDA_ildW.js";import{P as a}from"./Popover-DuqRbdii.js";import{$ as i}from"./Dialog-BQv3YqZW.js";import{S as n}from"./save-D_YZUkjn.js";import{c as m}from"./createLucideIcon-HvfaTVWX.js";import{B as p}from"./Button-ByHOpWo0.js";import{T as s}from"./Text-ThZYXmAV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DYwc33gT.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C2FN7BXZ.js";import"./useFocusRing-3NNdwvus.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./Button-Djyjt8oy.js";import"./Hidden-DPevkO8m.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./useResizeObserver-rW2TM9K1.js";import"./useControlledState-K9GQEKN-.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-txMKpHrt.js";import"./Collection-SRMBzawM.js";import"./index-CXnan05L.js";import"./Separator-CduiM4Yn.js";import"./SelectionManager-DvdfVsnr.js";import"./useEvent-H41NhmUB.js";import"./scrollIntoView-CDtwkdUZ.js";import"./SelectionIndicator-Mz0JAxcc.js";import"./useDescription-_BnwWcQ8.js";import"./ListKeyboardDelegate-B31G3H95.js";import"./Text-K4BkD2rQ.js";import"./PressResponder-ymxt6aWP.js";import"./useLocalizedStringFormatter-Bx9Y73Mw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CrDB_43n.js";import"./getScrollParent-BOHsqMJ6.js";import"./VisuallyHidden-D1KRANLi.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D0XL9qnD.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
