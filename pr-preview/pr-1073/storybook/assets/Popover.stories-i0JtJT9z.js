import{j as r}from"./iframe-xAfmlG07.js";import{P as a}from"./Popover-qRc5bSAQ.js";import{$ as i}from"./Dialog-JhXE_H92.js";import{B as n}from"./Button-DlzyzK84.js";import{S as p}from"./save-CRHiqMYG.js";import{c as m}from"./createLucideIcon-xLqTy_XU.js";import{T as s}from"./Text-Dg2zxxbH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BQzg_e_8.js";import"./useFocusRing-DuURs6wG.js";import"./utils-9cghZAOb.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./Button-_CPn_6qY.js";import"./Hidden-CaQ6AcOr.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./useResizeObserver-C4Shs2bn.js";import"./useControlledState-B8262pyO.js";import"./RSPContexts-COny7Pe5.js";import"./Collection-B7cfVZ3K.js";import"./index-CRbTRMO1.js";import"./Separator-CQC-DCEi.js";import"./SelectionManager-CyVU1abT.js";import"./useEvent-juwi-LBt.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUUhQe3s.js";import"./useDescription-BG0yfZwv.js";import"./ListKeyboardDelegate-CcmS_bQH.js";import"./Text-DTHVKRvi.js";import"./PressResponder-DsrT-E5Y.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwOyL9Gj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPCvzmAs.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
