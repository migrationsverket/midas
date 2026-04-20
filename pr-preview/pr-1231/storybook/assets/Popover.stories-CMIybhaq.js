import{j as r}from"./iframe-DHMeiSea.js";import{P as a}from"./Popover-BdjDmCqu.js";import{$ as i}from"./Dialog-D_XYb5Vc.js";import{S as n}from"./save-DMqrBScg.js";import{c as m}from"./createLucideIcon-DHfZe-cT.js";import{B as p}from"./Button-DRj-uv9d.js";import{T as s}from"./Text-OJU2i65y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DxS57IzR.js";import"./useFocusRing-BZqNlBLL.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./Button-X7Yqj24b.js";import"./Hidden-BDTDIVWX.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./useResizeObserver-Ze8rZcGU.js";import"./useControlledState-CMV_FSB4.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-BSo_BzMb.js";import"./Collection-B5CYATRa.js";import"./index-CyT7ybeZ.js";import"./Separator-oRvQrtC5.js";import"./SelectionManager-qRhNxfSP.js";import"./useEvent-lEqisOMe.js";import"./scrollIntoView-CXJd081A.js";import"./SelectionIndicator-D6PB-Vso.js";import"./useDescription-D2PosSZ6.js";import"./ListKeyboardDelegate-DrOjYDNI.js";import"./Text-BM4AoGMt.js";import"./PressResponder-C89v-ZUc.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BShm4XID.js";import"./getScrollParent-DqcIICEx.js";import"./VisuallyHidden-V6Y_A8T3.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B2muSTfc.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
