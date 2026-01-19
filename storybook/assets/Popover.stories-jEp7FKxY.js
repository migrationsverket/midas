import{j as r}from"./iframe-CIadKzdu.js";import{P as a}from"./Popover-B68gghcY.js";import{a as i}from"./Dialog-vJ84OY4R.js";import{B as n}from"./Button-CpzbrA9E.js";import{S as p}from"./save-B1PTP9Yw.js";import{c as m}from"./createLucideIcon-CNkLKi9D.js";import{T as s}from"./Text-MV4z5RP3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CVlv4gLj.js";import"./useFocusRing-Cx6NGDs8.js";import"./utils-DJPrropT.js";import"./index-eDsXbqKn.js";import"./index-lKxGNrLV.js";import"./Button-DWV-W5ps.js";import"./Hidden-kJ8IT1EO.js";import"./useLabels-EmpP_-hk.js";import"./useButton-ChIla9FM.js";import"./useResizeObserver-Dain9kfp.js";import"./useControlledState-DulzVG2b.js";import"./RSPContexts-B0-J_gY5.js";import"./Collection-CuqHIG9l.js";import"./index-DJg3KfkY.js";import"./Separator-CcJw4JmH.js";import"./SelectionManager-CirZ2bQ2.js";import"./useEvent-CpZmOcxi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-itVqOOaa.js";import"./useDescription-CpAdjwu7.js";import"./ListKeyboardDelegate-Bd9RyyDr.js";import"./Text-D5AYdaUH.js";import"./PressResponder-COk2EHa3.js";import"./useLocalizedStringFormatter-DqJJo-SC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSpOvMxI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D0TfLuCq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AWWTtLk1.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
