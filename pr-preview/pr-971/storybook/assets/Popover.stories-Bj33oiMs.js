import{j as r}from"./iframe-CDjUhHkf.js";import{S as n}from"./save-C7ywJZT0.js";import{c as m}from"./createLucideIcon-DB6p7_4V.js";import{$ as a}from"./Dialog-NNigcS5v.js";import{P as i}from"./Popover-CEKtWBqA.js";import{B as p}from"./Button-CAbYH_sj.js";import{T as s}from"./Text-CdNxzd7k.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-ZrOuQ2QI.js";import"./utils-BwP8WbxY.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bqtl1bJc.js";import"./useFocusRing-CKu_fLWx.js";import"./index-CtchEpDY.js";import"./index-DoNQNwAs.js";import"./useLabels-ueWd9dbD.js";import"./useButton-svinwHyX.js";import"./RSPContexts-DChnSr8e.js";import"./OverlayArrow--18yXwHW.js";import"./useResizeObserver-ClU8gpiW.js";import"./useControlledState-9B2Btxh8.js";import"./Collection-0IIJjKLO.js";import"./index-BnDbTwLi.js";import"./Separator-m6xfh49t.js";import"./SelectionManager-C_peV35v.js";import"./useEvent-CbUwsR45.js";import"./scrollIntoView-DAsjrTq5.js";import"./SelectionIndicator-MpA4obSc.js";import"./useDescription-qOG3Dy7D.js";import"./ListKeyboardDelegate-yDdHtdKS.js";import"./Text-B18pCq7H.js";import"./PressResponder-BM-14wCY.js";import"./useLocalizedStringFormatter-CYjVYPGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C4SgZTQS.js";import"./VisuallyHidden-CTrzc_wT.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGCNydTJ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
