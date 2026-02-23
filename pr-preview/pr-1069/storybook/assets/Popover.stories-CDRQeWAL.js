import{j as r}from"./iframe-NgsVAIE_.js";import{P as a}from"./Popover-XdEz2vSS.js";import{$ as i}from"./Dialog-BvlF9nTc.js";import{B as n}from"./Button-CsUdCrvJ.js";import{S as p}from"./save-BaVXqtqH.js";import{c as m}from"./createLucideIcon-DNjUyKXr.js";import{T as s}from"./Text-CLMs0khC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Bw8IApUR.js";import"./useFocusRing-B3_Fq29Y.js";import"./utils-BMRDwiWU.js";import"./index-DYQAdzyg.js";import"./index-DXaepPOW.js";import"./Button-DTzo6E9X.js";import"./Hidden-CQtKkbQ1.js";import"./useLabels-DCVajOwk.js";import"./useButton-Br4NZV8a.js";import"./useResizeObserver-D356BpUm.js";import"./useControlledState-C2hVvUOR.js";import"./RSPContexts-DHoIcnKb.js";import"./Collection-aQtQkema.js";import"./index-BWLTw_OP.js";import"./Separator-Dcmf0abl.js";import"./SelectionManager-3sJFQUFt.js";import"./useEvent-DX4MF0J2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cerm8eE2.js";import"./useDescription-CtpSjBNK.js";import"./ListKeyboardDelegate-DVMZRk3M.js";import"./Text-nv-IhAMW.js";import"./PressResponder-xLJ_I-Dd.js";import"./useLocalizedStringFormatter-CJOjjMB1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-iTAQqecx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CrY5FCAN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_7PwgqK.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
