import{j as r}from"./iframe-DamRJThF.js";import{P as a}from"./Popover-DwSLTJis.js";import{$ as i}from"./Dialog-DEgR2qnS.js";import{S as n}from"./save-D4yMGgZh.js";import{c as m}from"./createLucideIcon-XwoK3Gs0.js";import{B as p}from"./Button-Cp7EKUE4.js";import{T as s}from"./Text-DL78e22r.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgcDlDIC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DYWN_5ER.js";import"./useFocusRing-bURA5Avq.js";import"./index-DlvZii8t.js";import"./index-BIVPacnA.js";import"./Button-uaN-QkBJ.js";import"./Hidden-BuQbP2-q.js";import"./useLabels-DuyfGClc.js";import"./useButton-COqJVObs.js";import"./useResizeObserver-eK_zIgwr.js";import"./useControlledState-XD3RgfmU.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-Dggcgd1E.js";import"./Collection-tkyA9Vv4.js";import"./index-C30nhWEM.js";import"./Separator-CYZPONwa.js";import"./SelectionManager-C2qvcpfW.js";import"./useEvent-CvQwGKSH.js";import"./scrollIntoView-BpYJI3yu.js";import"./SelectionIndicator-Czi5_gzH.js";import"./useDescription-Bsqqymym.js";import"./ListKeyboardDelegate-DyKCuwLA.js";import"./Text-DJngJYPB.js";import"./PressResponder-DPDWKR9m.js";import"./useLocalizedStringFormatter-CCiP9Lwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbPnchON.js";import"./getScrollParent-DgPjGSeo.js";import"./VisuallyHidden-BwmvdnrK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-9w7CTOq4.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
