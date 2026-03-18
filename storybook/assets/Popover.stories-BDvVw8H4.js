import{j as r}from"./iframe-C7t9iVAP.js";import{P as a}from"./Popover-DZDS7sIy.js";import{$ as i}from"./Dialog-DYaKrU3e.js";import{S as n}from"./save-Dqpl_5eF.js";import{c as m}from"./createLucideIcon-CJwkvU5U.js";import{B as p}from"./Button-DtM-QtSV.js";import{T as s}from"./Text-DLwF4mI3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DHL4vNoB.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BR0NntZm.js";import"./useFocusRing-BBkvSuUI.js";import"./index-D_TWd0tg.js";import"./index-C8AjsPH3.js";import"./Button-DR73eWoN.js";import"./Hidden-DFB5LB9u.js";import"./useLabels-DBb3W9ZQ.js";import"./useButton-CqHRV2Gu.js";import"./useResizeObserver-B6trb6hQ.js";import"./useControlledState-yNJAK2-f.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CMbSZKKN.js";import"./Collection-BHety989.js";import"./index-BCuOjvAT.js";import"./Separator-4FC5CAWE.js";import"./SelectionManager-Dz4ocvIO.js";import"./useEvent-DKYdhuF3.js";import"./scrollIntoView-CXA6LuS7.js";import"./SelectionIndicator-BUBEQaAn.js";import"./useDescription-CcHmFyqs.js";import"./ListKeyboardDelegate-DdrIfvWn.js";import"./Text-DHSnms-3.js";import"./PressResponder-BbhTJQ72.js";import"./useLocalizedStringFormatter-CVtX0aD4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDaYTRoZ.js";import"./getScrollParent-DLQAjZDh.js";import"./VisuallyHidden-DGjmnIGg.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CR-t_tu1.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
