import{j as r}from"./iframe-BtMwOEiM.js";import{S as n}from"./save-DRlBCsJP.js";import{c as m}from"./createLucideIcon-C3W8dNhU.js";import{$ as a}from"./Dialog-B9C9duPY.js";import{P as i}from"./Popover-CFi8PJaH.js";import{B as p}from"./Button-Bs1OmtnK.js";import{T as s}from"./Text-Blq4VDAx.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DpK-_iud.js";import"./utils-BoP-oma8.js";import"./clsx-B-dksMZM.js";import"./Hidden-4SQq7b_R.js";import"./useFocusRing-Cle0ZmwX.js";import"./index-BBjSt18z.js";import"./index-YFvqANbg.js";import"./useLabels-6uMyjyEX.js";import"./useButton-D4UG4PHy.js";import"./RSPContexts-DnH5Czok.js";import"./OverlayArrow-CfUGNIky.js";import"./useResizeObserver-DWfhUb69.js";import"./useControlledState-4eQ4VJ_x.js";import"./Collection-DSw0Co_i.js";import"./index-3O6tGQUW.js";import"./Separator-CqzvGCIB.js";import"./SelectionManager-DuSnioHk.js";import"./useEvent-Bpvasb0c.js";import"./scrollIntoView-7ZxtPAx0.js";import"./SelectionIndicator-t4ESMKeX.js";import"./useDescription-larqa2bq.js";import"./ListKeyboardDelegate-Prucwfh4.js";import"./Text-BIvd2lWW.js";import"./PressResponder-DpSlFNy6.js";import"./useLocalizedStringFormatter-DCuMM2e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent--egNNwF2.js";import"./VisuallyHidden-DmeEZsXF.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DETAsxuF.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
