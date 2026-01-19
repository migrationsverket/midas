import{j as r}from"./iframe-CdV99NDU.js";import{P as a}from"./Popover-C6fv9dIY.js";import{a as i}from"./Dialog-CYr1tOJW.js";import{B as n}from"./Button-Dfhqrxs-.js";import{S as p}from"./save-Dr468wYd.js";import{c as m}from"./createLucideIcon-B6F2wH1H.js";import{T as s}from"./Text-C43rwyi-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DfWMMDPB.js";import"./useFocusRing-e9aHRU6a.js";import"./utils-CMfRIaXv.js";import"./index-BzgysReL.js";import"./index-yHLZSSmE.js";import"./Button-pO8fiD1O.js";import"./Hidden-B5huBJsQ.js";import"./useLabels-BD260d70.js";import"./useButton-KkSusS_w.js";import"./useResizeObserver-Cbv0FbJp.js";import"./useControlledState-RbaACq8P.js";import"./RSPContexts-aiXnIDGZ.js";import"./Collection-DqZyFB69.js";import"./index-p-XLETit.js";import"./Separator-CMc22emk.js";import"./SelectionManager-DHJky9qJ.js";import"./useEvent-CUH_UTTo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcarU12u.js";import"./useDescription-CMkoGRwr.js";import"./ListKeyboardDelegate-C05_rVzA.js";import"./Text-DrXygMM2.js";import"./PressResponder-CAYXo6yN.js";import"./useLocalizedStringFormatter-Bp1Nt6ma.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_Bxr_lht.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B5phWBq7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dbxw2dmh.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
