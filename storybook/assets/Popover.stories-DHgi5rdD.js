import{j as r}from"./iframe-_gH3GU_Z.js";import{P as a}from"./Popover-t_dPh4fH.js";import{a as i}from"./Dialog-BtuTLPLx.js";import{B as n}from"./Button-DXF4_9k-.js";import{S as p}from"./save-CCjw3Ghm.js";import{c as m}from"./createLucideIcon-CfuZJf8D.js";import{T as s}from"./Text-DjGT25-P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BEIjUFBk.js";import"./useFocusRing-BXEJ-Tr4.js";import"./utils-CfJDu102.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./Button-B0GHbiBt.js";import"./Hidden-D04Pc1_R.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./useResizeObserver-BDJqeTBY.js";import"./useControlledState-D8rfmS1g.js";import"./RSPContexts-FS6mevKY.js";import"./Collection-CiCTCt3v.js";import"./index-CTMRyEef.js";import"./Separator-OXKMMQ8u.js";import"./SelectionManager-94IQVh0z.js";import"./useEvent-DDt3427d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ata1nNeT.js";import"./useDescription-DCw1B2k2.js";import"./ListKeyboardDelegate-BbjP68Pi.js";import"./Text-BRHHCRG8.js";import"./PressResponder-D2R8re7P.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNQkECp5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6ArGHnI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
