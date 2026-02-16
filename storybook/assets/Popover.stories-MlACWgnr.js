import{j as r}from"./iframe-CFaxLqEa.js";import{P as a}from"./Popover-BwbmJqMI.js";import{$ as i}from"./Dialog-Bzr23H7G.js";import{B as n}from"./Button-NFqaYpQd.js";import{S as p}from"./save-BpYR8Dsm.js";import{c as m}from"./createLucideIcon-0-aYMEMi.js";import{T as s}from"./Text-B0xzN78n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BW1bAGv8.js";import"./useFocusRing-B3QBGcNF.js";import"./utils-BgY9U9Qr.js";import"./index-GxleSbEr.js";import"./index-g5CyflDh.js";import"./Button-CRZFTWuY.js";import"./Hidden-Cw9STqj5.js";import"./useLabels-ClJSaiIH.js";import"./useButton-DZkgje5C.js";import"./useResizeObserver-Csuma0yr.js";import"./useControlledState-lnm2btlX.js";import"./RSPContexts-CKwAPfOb.js";import"./Collection-Dg55PgvO.js";import"./index-Dtj87kt5.js";import"./Separator-P9MdtsbI.js";import"./SelectionManager-Bk1PTlDQ.js";import"./useEvent-Cb-Pr1Jl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cbzi_KBz.js";import"./useDescription-BMyeVBGj.js";import"./ListKeyboardDelegate-Cz9dpHB8.js";import"./Text-LU79jMy_.js";import"./PressResponder-bv_9uGzA.js";import"./useLocalizedStringFormatter-BhBXUazm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dr53HehO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYWYy-1_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-LFhdxWG_.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
