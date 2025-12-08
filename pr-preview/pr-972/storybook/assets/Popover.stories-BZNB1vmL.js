import{j as r}from"./iframe-D7PorBx8.js";import{S as n}from"./save-Dh9aB21d.js";import{c as m}from"./createLucideIcon-s0-oR3K2.js";import{$ as a}from"./Dialog-Cfp-x5MB.js";import{P as i}from"./Popover-UeCbkken.js";import{B as p}from"./Button-BN9DksRd.js";import{T as s}from"./Text-19E1mvi9.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BLXzbyhr.js";import"./utils-BRnNwB4A.js";import"./clsx-B-dksMZM.js";import"./Hidden-CALyrsXm.js";import"./useFocusRing-lOPOB9b4.js";import"./index-CVGY0x-i.js";import"./index-DjO4sh_O.js";import"./useLabels-CcuOGFTT.js";import"./useButton-_Sa8lUYH.js";import"./RSPContexts-CGV8yMDv.js";import"./OverlayArrow-DVR4VHxI.js";import"./useResizeObserver-3DHtrkfM.js";import"./useControlledState-Cu60Zsv0.js";import"./Collection-KYVnb416.js";import"./index-D9zy8vPy.js";import"./Separator-CD7ffBA2.js";import"./SelectionManager-51sRRdhh.js";import"./useEvent-CIuVaqMW.js";import"./scrollIntoView-C2jQgIYI.js";import"./SelectionIndicator-DmFPt-rE.js";import"./useDescription-D2ZN9jHt.js";import"./ListKeyboardDelegate-D5ycqaLk.js";import"./Text-D7__6bd9.js";import"./PressResponder-B-f0VFV5.js";import"./useLocalizedStringFormatter-CX2ZmV-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uRQuqh9K.js";import"./VisuallyHidden-B5Wc-8q5.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4dcCYqU.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
