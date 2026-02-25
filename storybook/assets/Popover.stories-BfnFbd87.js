import{j as r}from"./iframe-BI14_MVF.js";import{P as a}from"./Popover-Awsv4SWr.js";import{$ as i}from"./Dialog-BN4p9wge.js";import{B as n}from"./Button-CeI3qDWP.js";import{S as p}from"./save-B47yQDix.js";import{c as m}from"./createLucideIcon-DENDzJzs.js";import{T as s}from"./Text-RJrnIXBc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Dkdcjg4e.js";import"./useFocusRing-C_drv0-d.js";import"./utils-CUoFg1P-.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./Button-C1lGy2rc.js";import"./Hidden-fX2mzFJg.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./useResizeObserver-BHsIR3DY.js";import"./useControlledState-C7wUKhFW.js";import"./RSPContexts-BdlFwrnM.js";import"./Collection-CZ9Jc2KR.js";import"./index-D2lykJvQ.js";import"./Separator-oY1bR7gh.js";import"./SelectionManager-BsrCfNRx.js";import"./useEvent-Cl7U-xPX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CJ9gdQ2K.js";import"./useDescription-DRcfnO6m.js";import"./ListKeyboardDelegate-B-MPQD6f.js";import"./Text-CI44Yo6S.js";import"./PressResponder-Cud_auOR.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZXS549E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CyW44Voa.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
