import{j as r}from"./iframe-DEr5LyL9.js";import{P as a}from"./Popover-BBpOhvfS.js";import{$ as i}from"./Dialog-ZjhlH8TX.js";import{B as n}from"./Button-BTVP098H.js";import{S as p}from"./save-DYFANUlB.js";import{c as m}from"./createLucideIcon-C7-8qsjG.js";import{T as s}from"./Text-BfZUAwgB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BzVCgUDi.js";import"./useFocusRing-DOTEBX87.js";import"./utils-DwL8W83g.js";import"./index-DExjCakj.js";import"./index-Nw0I9830.js";import"./Button-CBWCdlEK.js";import"./Hidden-NLnfrHdz.js";import"./useLabels-h5iBdAs1.js";import"./useButton-CVEcfEQG.js";import"./useResizeObserver-B5Vgs11W.js";import"./useControlledState-h_6fbbYP.js";import"./RSPContexts-Bn2caes7.js";import"./Collection-wSsMWtTf.js";import"./index-WpBjSl2g.js";import"./Separator-DxFfrhUf.js";import"./SelectionManager-DLCRf5Wk.js";import"./useEvent-AcHiQLhX.js";import"./scrollIntoView-CKlviFsz.js";import"./SelectionIndicator-DbLggP3S.js";import"./useDescription-DigpKdML.js";import"./ListKeyboardDelegate-WHrWx2cP.js";import"./Text-DAPFiM_T.js";import"./PressResponder-BARi5h15.js";import"./useLocalizedStringFormatter-7tBmCqt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RzHdbGF3.js";import"./getScrollParent-Cud-L_Kq.js";import"./VisuallyHidden-CwaOa1m7.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-55D9ueFU.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
