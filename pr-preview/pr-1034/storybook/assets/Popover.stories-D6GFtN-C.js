import{j as r}from"./iframe-CROn2D2x.js";import{P as a}from"./Popover-jYqU0WYI.js";import{$ as i}from"./Dialog-Cw1fKDHF.js";import{B as n}from"./Button-tcUqF5wD.js";import{S as p}from"./save-Dh2lgKut.js";import{c as m}from"./createLucideIcon-BBVnxcWo.js";import{T as s}from"./Text-p_fXYEUj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Deu2MDQU.js";import"./useFocusRing-DbrQCD6u.js";import"./utils-BmCdB7DC.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./Button-rTy-r-bM.js";import"./Hidden-B4kaJ98v.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./useResizeObserver-B6ynseLj.js";import"./useControlledState-Bvh10bMV.js";import"./RSPContexts-BXOPS_Ee.js";import"./Collection-DxKKFJjX.js";import"./index-BoGcMoi7.js";import"./Separator-ytKG-vz9.js";import"./SelectionManager-D69MLAoG.js";import"./useEvent-CCZ-8-DW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeR5295T.js";import"./useDescription-D384wrOJ.js";import"./ListKeyboardDelegate-DOS933sq.js";import"./Text-m0OBBvo5.js";import"./PressResponder-GNhMtVyH.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DInQMJQJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHGp5XeR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
