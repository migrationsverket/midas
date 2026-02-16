import{j as r}from"./iframe-kL-Bl9su.js";import{P as a}from"./Popover-CH8aGv-F.js";import{$ as i}from"./Dialog-4DXEqqMA.js";import{B as n}from"./Button-BrThkrNe.js";import{S as p}from"./save-Td5KU_W2.js";import{c as m}from"./createLucideIcon-DoVMa1bS.js";import{T as s}from"./Text-Brx6h1NF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C-_NKgJm.js";import"./useFocusRing-B8gpdiRk.js";import"./utils-DSQv1swn.js";import"./index-9Z-HIz-6.js";import"./index-Dc0KIhb6.js";import"./Button-C3MzL_5z.js";import"./Hidden-fIPo0I_L.js";import"./useLabels-CH1yRhK0.js";import"./useButton-PS6G0SsP.js";import"./useResizeObserver-JmlDC1iB.js";import"./useControlledState-CCkzC0Tp.js";import"./RSPContexts-zPihLAoF.js";import"./Collection-V9ENYK9P.js";import"./index-C6yzV3k4.js";import"./Separator-CIUFat57.js";import"./SelectionManager-ALK4G4BP.js";import"./useEvent-BRxC_QDj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4koSPdu.js";import"./useDescription-D6WKBftS.js";import"./ListKeyboardDelegate-C_l6nDbK.js";import"./Text-Csjavnr3.js";import"./PressResponder-CtQHFhUR.js";import"./useLocalizedStringFormatter-5N1OdqKK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3IxBebN.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ddmz6g6z.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhEyUNPu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
