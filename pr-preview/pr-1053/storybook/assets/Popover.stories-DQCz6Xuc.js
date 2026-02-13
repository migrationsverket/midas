import{j as r}from"./iframe-BAZk80fE.js";import{P as a}from"./Popover-D47IUhzN.js";import{$ as i}from"./Dialog-I6ArOmci.js";import{B as n}from"./Button-BOvHyuxs.js";import{S as p}from"./save-X7abY3qm.js";import{c as m}from"./createLucideIcon-DfErYrVe.js";import{T as s}from"./Text-Bot8P-aJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D4E-POyn.js";import"./useFocusRing-KQoMJM9B.js";import"./utils-BhwQ1U93.js";import"./index-Dt6rToeR.js";import"./index-B34iUau2.js";import"./Button-eLqhqo_k.js";import"./Hidden-CYtm9s7u.js";import"./useLabels-CMB4fTd1.js";import"./useButton-CPWt2pMm.js";import"./useResizeObserver-jKdj-9Bn.js";import"./useControlledState-Cu0nMJYp.js";import"./RSPContexts-Ch508LJX.js";import"./Collection-RYZnXscw.js";import"./index-DRW4hoi9.js";import"./Separator-B7gVewdW.js";import"./SelectionManager-DGsipqzM.js";import"./useEvent-vN0H1Ozz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0NoolGA.js";import"./useDescription-CPqrosz3.js";import"./ListKeyboardDelegate-DxlpbXJb.js";import"./Text-Y_F9Qc3q.js";import"./PressResponder-btOu00TB.js";import"./useLocalizedStringFormatter-B43e0zJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLotUQCh.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Coy_xA-f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GVvU4XfJ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
