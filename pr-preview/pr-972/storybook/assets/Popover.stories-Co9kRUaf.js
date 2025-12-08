import{j as r}from"./iframe-BtnDiUeo.js";import{S as n}from"./save-BZ8WBdST.js";import{c as m}from"./createLucideIcon-Cyxnybqj.js";import{$ as a}from"./Dialog-BlQvHMfi.js";import{P as i}from"./Popover-DAHUnuwF.js";import{B as p}from"./Button-COsxIDgV.js";import{T as s}from"./Text-5ETkJBTM.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C4A3JbkV.js";import"./utils-6t5S5iG-.js";import"./clsx-B-dksMZM.js";import"./Hidden-SeEFEyCD.js";import"./useFocusRing-CeaXn4pv.js";import"./index-DNj_r2ie.js";import"./index-CMMeM23Q.js";import"./useLabels-L9u9tUn5.js";import"./useButton-Dj3Yiida.js";import"./RSPContexts-DIOS6Ojx.js";import"./OverlayArrow-Dyw6ueAU.js";import"./useResizeObserver-IKiumAb0.js";import"./useControlledState-BMBk6NmG.js";import"./Collection-Bs_M3g-9.js";import"./index-D8rcrMqJ.js";import"./Separator-CJlTHlzH.js";import"./SelectionManager-BoO8dgsX.js";import"./useEvent--JaFozHk.js";import"./scrollIntoView-BzmlEbl8.js";import"./SelectionIndicator-rrxign9m.js";import"./useDescription-BYAmENSk.js";import"./ListKeyboardDelegate-ClLuk8-x.js";import"./Text-BHP3jDdS.js";import"./PressResponder-CLcoXyel.js";import"./useLocalizedStringFormatter-BfXnVgGt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJqeFeZI.js";import"./VisuallyHidden-DyHyzLz4.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6oMJ6jzu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
