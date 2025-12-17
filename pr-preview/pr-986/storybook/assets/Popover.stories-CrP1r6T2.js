import{j as r}from"./iframe-BIgVwRzi.js";import{S as n}from"./save-fYt5bET-.js";import{c as m}from"./createLucideIcon-38Nuhk7x.js";import{$ as a}from"./Dialog-BQp6Xln0.js";import{P as i}from"./Popover-Dh-zN2eA.js";import{B as p}from"./Button-cszjA275.js";import{T as s}from"./Text-Bgt8anl_.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BbaSeMTk.js";import"./utils-zlmf3cg_.js";import"./clsx-B-dksMZM.js";import"./Hidden-UQDm3VtM.js";import"./useFocusRing-BbQ4IaHs.js";import"./index-BR_IV3ka.js";import"./index-D26pB2kE.js";import"./useLabels-Dvj8ZU2I.js";import"./useButton-I1p8fH58.js";import"./RSPContexts-Derb496R.js";import"./OverlayArrow-DUdlZ50r.js";import"./useResizeObserver-CLZNJQNI.js";import"./useControlledState-CBUPCzMg.js";import"./Collection-DWh6W0bq.js";import"./index-jt0eOPBg.js";import"./Separator-BEVZtFra.js";import"./SelectionManager-1kG5QFWW.js";import"./useEvent-Buf3aweS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BeW-ijUI.js";import"./useDescription-6EDhH15h.js";import"./ListKeyboardDelegate-B1feCyCI.js";import"./Text-igUMio9r.js";import"./PressResponder-jzmT9_sa.js";import"./useLocalizedStringFormatter-CHL49Mx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4GAzZkr.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BLTljg8L.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DSORq7VR.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
