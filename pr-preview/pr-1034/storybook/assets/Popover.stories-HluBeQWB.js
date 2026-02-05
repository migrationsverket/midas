import{j as r}from"./iframe-DWeimgIa.js";import{P as a}from"./Popover-Bc4Lfs41.js";import{$ as i}from"./Dialog-DYBzwV37.js";import{B as n}from"./Button-77YGZ7IT.js";import{S as p}from"./save-CweNSwLG.js";import{c as m}from"./createLucideIcon-BHfYKO9v.js";import{T as s}from"./Text-CfprFU7e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BMvinMub.js";import"./useFocusRing-DKnPpF37.js";import"./utils-DxMtLVOR.js";import"./index-yvDfoLET.js";import"./index-Zv7Hv4yU.js";import"./Button-BvEh5rbk.js";import"./Hidden-DKOEiJ1S.js";import"./useLabels-C5bIK2qD.js";import"./useButton-DqDFtivK.js";import"./useResizeObserver-BUoUipIm.js";import"./useControlledState-HboVp0gd.js";import"./RSPContexts-CNnbePcK.js";import"./Collection-DwYHR0Vg.js";import"./index-DyeLdOPS.js";import"./Separator-19e6jFiW.js";import"./SelectionManager-i0o8PGpm.js";import"./useEvent-C4MlArKl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKDi98ip.js";import"./useDescription-Bh7NSV4H.js";import"./ListKeyboardDelegate-CY2YJj51.js";import"./Text-DbBhNbbj.js";import"./PressResponder-BnEt-TVg.js";import"./useLocalizedStringFormatter-aKbmrIDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPvNjLbq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRBz7uUV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTWeQANG.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
