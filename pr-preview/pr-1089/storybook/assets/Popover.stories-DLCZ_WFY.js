import{j as r}from"./iframe-C9oGoQlD.js";import{P as a}from"./Popover-BbBpnWtB.js";import{$ as i}from"./Dialog-tRvNkEhL.js";import{B as n}from"./Button-BfQwIuB4.js";import{S as p}from"./save-CNtFlu0O.js";import{c as m}from"./createLucideIcon-B4xrwkR8.js";import{T as s}from"./Text-6CtE12hJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-ECDMMUFe.js";import"./useFocusRing-BZ5zqIPz.js";import"./utils-c5FSWQc2.js";import"./index-DI4OZgw7.js";import"./index-D3v6lHGq.js";import"./Button-Cxj7U1e9.js";import"./Hidden-DN3uGqX_.js";import"./useLabels-B3yO6u3S.js";import"./useButton-DJeKkiJU.js";import"./useResizeObserver-C5fFhGEN.js";import"./useControlledState-Bqpo8ac-.js";import"./RSPContexts-BnvAgtmh.js";import"./Collection-1CzbJfsQ.js";import"./index-CzsQzHup.js";import"./Separator-DjtVqcvK.js";import"./SelectionManager-5cPgrrKD.js";import"./useEvent-CKrpPU1L.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BU-2wMTH.js";import"./useDescription-DU5vTSEG.js";import"./ListKeyboardDelegate-B2fL_pD3.js";import"./Text-BguV-1BC.js";import"./PressResponder-khEv3hIN.js";import"./useLocalizedStringFormatter-BZNBSpMr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXzW8d1z.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-cGHgangc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CCYDdyRA.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
