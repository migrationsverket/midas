import{j as r}from"./iframe-a6Wk3Xzy.js";import{S as n}from"./save-Dds2eGh-.js";import{c as m}from"./createLucideIcon-D5ghYwFQ.js";import{$ as a}from"./Dialog-CXvjpGUD.js";import{P as i}from"./Popover-BqLHs2z5.js";import{B as p}from"./Button-BXJQHasJ.js";import{T as s}from"./Text-Cei6q4nW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D3kzwT0j.js";import"./utils-Djxj9dvS.js";import"./clsx-B-dksMZM.js";import"./Hidden-DuHdXNGk.js";import"./useFocusRing-C1yXmCPx.js";import"./index-BIPy-evI.js";import"./index-h3_AmtF7.js";import"./useLabels-C0y6iNyy.js";import"./useButton-BLcqsVts.js";import"./RSPContexts-SYjPV_Gd.js";import"./OverlayArrow-CyE76S0y.js";import"./useResizeObserver-BdfPDCR2.js";import"./useControlledState-DCZoTGT5.js";import"./Collection-BxZCsRFI.js";import"./index-D2MYWhMB.js";import"./Separator-DC01dWRI.js";import"./SelectionManager-505Ik3lC.js";import"./useEvent-DDIjSBAF.js";import"./scrollIntoView-D4IpJVjb.js";import"./SelectionIndicator-CdYP5Mmy.js";import"./useDescription-CCWPLKTi.js";import"./ListKeyboardDelegate-hyjiyDq3.js";import"./Text-DkJniAIt.js";import"./PressResponder-Dhuu2u_J.js";import"./useLocalizedStringFormatter-CuYf0UQ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DPdiGwy9.js";import"./VisuallyHidden-nz69IdQH.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-73Ei4hOY.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
