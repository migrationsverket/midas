import{j as r}from"./iframe-B7CA7zm9.js";import{P as a}from"./Popover-B8lVjLh6.js";import{$ as i}from"./Dialog-B8n15aSr.js";import{B as n}from"./Button-D89KgD4F.js";import{S as p}from"./save-CRyDV-d3.js";import{c as m}from"./createLucideIcon-DrWysga5.js";import{T as s}from"./Text-Cj80PO87.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BGpEZi_q.js";import"./useFocusRing-DlIVYC0Q.js";import"./utils-CQgVAoKd.js";import"./index-Cwsun3ZN.js";import"./index-BocC1wQt.js";import"./Button-DCb3Avtf.js";import"./Hidden-D1GMlL2H.js";import"./useLabels-COPc6DSg.js";import"./useButton-OekK3SSa.js";import"./useResizeObserver-BVLHTBcx.js";import"./useControlledState-C73mtcAA.js";import"./RSPContexts-DllVX3bg.js";import"./Collection-DxnCaOCK.js";import"./index-Dlarzz0C.js";import"./Separator-CFJ4eBpI.js";import"./SelectionManager--8uLHtnZ.js";import"./useEvent-D9DTZ6Bu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COP-JOsu.js";import"./useDescription-_20e8jer.js";import"./ListKeyboardDelegate-DCvaEldI.js";import"./Text-D03EwgzM.js";import"./PressResponder-DP9ZmtgD.js";import"./useLocalizedStringFormatter-jYoZNKU4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMWytpzV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6IbkCTP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dmi23tW0.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
