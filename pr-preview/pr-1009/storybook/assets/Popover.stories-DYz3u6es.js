import{j as r}from"./iframe-BfX_07x0.js";import{P as a}from"./Popover-B63yxUdD.js";import{a as i}from"./Dialog-BaNlAR24.js";import{B as n}from"./Button-S0b0VHM6.js";import{S as p}from"./save-COwNjGQc.js";import{c as m}from"./createLucideIcon-NdhLV474.js";import{T as s}from"./Text-B2HNGjiH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CuPHKC8V.js";import"./useFocusRing-B8HbIXNd.js";import"./utils-otEk9Sjq.js";import"./index-Fv7k2kbU.js";import"./index-Tc84QQew.js";import"./Button-BjsM-sZt.js";import"./Hidden-BW_Q879K.js";import"./useLabels-BDfZfP3D.js";import"./useButton-Bnqm25mU.js";import"./useResizeObserver-DE6Jojwh.js";import"./useControlledState-BDBdaFnj.js";import"./RSPContexts-Cjsc-eOQ.js";import"./Collection-B-H-yU5f.js";import"./index-CAt6XeDx.js";import"./Separator-DgrfS2q7.js";import"./SelectionManager-CGKOZMdZ.js";import"./useEvent-TK48cLph.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNeDQaEc.js";import"./useDescription-tN0S61gz.js";import"./ListKeyboardDelegate-BxcuPLOy.js";import"./Text-BlHVCXfu.js";import"./PressResponder-Dyai04df.js";import"./useLocalizedStringFormatter-DfmLe7Uo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKRWm9Cp.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Mgvz9RsA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtSMgK2r.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
