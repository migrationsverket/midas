import{j as r}from"./iframe-CACK1ifN.js";import{S as n}from"./save-CSkfPHV7.js";import{c as m}from"./createLucideIcon-G0rIHLkb.js";import{$ as a}from"./Dialog-B5kUQCj1.js";import{P as i}from"./Popover-Ca39AIkX.js";import{B as p}from"./Button-BoPq1AVj.js";import{T as s}from"./Text-CRhY20oU.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-J7gLD4uT.js";import"./utils-DrYd9Pqd.js";import"./clsx-B-dksMZM.js";import"./Hidden-C1FS9acW.js";import"./useFocusRing-DYoY7B0o.js";import"./index-Cso1iP6f.js";import"./index-RncFtgOS.js";import"./useLabels-C_najzVY.js";import"./useButton-DYZev9kh.js";import"./RSPContexts-Bjnw7db_.js";import"./OverlayArrow-DLj8T8PD.js";import"./useResizeObserver-Crrk23vz.js";import"./useControlledState-DCOK662h.js";import"./Collection-CAmhBvgE.js";import"./index-Cq_3bRrR.js";import"./Separator-D61x4Nam.js";import"./SelectionManager-D-ZLegKB.js";import"./useEvent-CM7-6yi_.js";import"./scrollIntoView-B7hwb_SX.js";import"./SelectionIndicator-sFKgU-Ui.js";import"./useDescription-osvHzt0k.js";import"./ListKeyboardDelegate-CxhWwM1o.js";import"./Text-BnT-eFzO.js";import"./PressResponder-1GogWAhd.js";import"./useLocalizedStringFormatter-D7qp87au.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DcH05knO.js";import"./VisuallyHidden-COi0BVk3.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AIFce-v4.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
