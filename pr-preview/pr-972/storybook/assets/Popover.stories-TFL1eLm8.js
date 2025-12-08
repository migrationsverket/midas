import{j as r}from"./iframe-NQwQ8Ipc.js";import{S as n}from"./save-CByFS0IZ.js";import{c as m}from"./createLucideIcon-pmY9-a6l.js";import{$ as a}from"./Dialog-B1XSLwxn.js";import{P as i}from"./Popover-DZXAIx4I.js";import{B as p}from"./Button-CDPGYKZu.js";import{T as s}from"./Text-YxgCEkkP.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BD9SwyBt.js";import"./utils-CagmBR4h.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMhcaOTC.js";import"./useFocusRing-ChWSchxP.js";import"./index-D5MLpHUU.js";import"./index-Cvu387iz.js";import"./useLabels-B0KRHn3k.js";import"./useButton-CEbDpz1S.js";import"./RSPContexts-BtehIcvf.js";import"./OverlayArrow-DbAqa-xg.js";import"./useResizeObserver-Bf2XUjIv.js";import"./useControlledState-C5kK2k2z.js";import"./Collection-CgH9y7rA.js";import"./index-BoF2Q7cm.js";import"./Separator-BMs47c8O.js";import"./SelectionManager-CF8t7v__.js";import"./useEvent-zLeWJTeo.js";import"./scrollIntoView-BHqusxUp.js";import"./SelectionIndicator-BaEmZcqu.js";import"./useDescription-Dgt-8WJE.js";import"./ListKeyboardDelegate-BPHDB0oM.js";import"./Text-C_uAOKRC.js";import"./PressResponder-CU_iIlAi.js";import"./useLocalizedStringFormatter-Cw0M4ILW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DOXk8-VT.js";import"./VisuallyHidden-DcGuHUr7.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5C2l5IJ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
