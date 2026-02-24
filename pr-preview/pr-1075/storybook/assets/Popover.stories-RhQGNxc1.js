import{j as r}from"./iframe-Cz8HHCXP.js";import{P as a}from"./Popover-Dy7L_dCg.js";import{$ as i}from"./Dialog-PfjTyKnn.js";import{B as n}from"./Button-_rHSG3fZ.js";import{S as p}from"./save-BiE6Ehao.js";import{c as m}from"./createLucideIcon-D0LCllt7.js";import{T as s}from"./Text-Ds9GT8qW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Czi8Ji7R.js";import"./useFocusRing-CifWSbR7.js";import"./utils-CHHvFpL5.js";import"./index-ByLFS2_k.js";import"./index-DySfiLBO.js";import"./Button-CyhSWA6k.js";import"./Hidden-DjfT0FF_.js";import"./useLabels-C0CZzmBW.js";import"./useButton-knBJS-If.js";import"./useResizeObserver-DecP2-I9.js";import"./useControlledState-CGafyotv.js";import"./RSPContexts-BZpnDWsc.js";import"./Collection-Bh_gfeuR.js";import"./index-DTlwesn3.js";import"./Separator-jmVq-6bR.js";import"./SelectionManager-7ahMGbrk.js";import"./useEvent-CnM7m0F3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dq--1A-J.js";import"./useDescription-D6nJ7Lob.js";import"./ListKeyboardDelegate-kyO647b2.js";import"./Text-C2eLHPBt.js";import"./PressResponder-cjCNE8YI.js";import"./useLocalizedStringFormatter-uYoPNXl-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dohc3n8K.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bnafg7jN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BF9hqiyk.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
