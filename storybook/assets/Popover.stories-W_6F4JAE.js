import{j as r}from"./iframe-CuvNnZhW.js";import{S as n}from"./save-AcRflKc4.js";import{c as m}from"./createLucideIcon-Df2ePFAr.js";import{$ as a}from"./Dialog-Oqp-w9-d.js";import{P as i}from"./Popover-CXi3Y7h5.js";import{B as p}from"./Button-_NSsZI2K.js";import{T as s}from"./Text-DQruYnq-.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DOL-rno5.js";import"./utils-Bm57M54E.js";import"./clsx-B-dksMZM.js";import"./Hidden-DxowtwNV.js";import"./useFocusRing-D43600Fq.js";import"./index-B40owRUi.js";import"./index-BMAPmUts.js";import"./useLabels-efXzBIHp.js";import"./useButton-Cp1eU1ae.js";import"./RSPContexts-CQpn_-P6.js";import"./OverlayArrow-3qO1Pz2Y.js";import"./useResizeObserver-Lve1GpGt.js";import"./useControlledState-CMlYEkCM.js";import"./Collection-D9tKhjzz.js";import"./index-CnemMvpk.js";import"./Separator-CyRvqttG.js";import"./SelectionManager-CtXuFHLs.js";import"./useEvent-Bpy0OARu.js";import"./scrollIntoView-1KZh3iQK.js";import"./SelectionIndicator-CkCvo8--.js";import"./useDescription-DhNPqrJw.js";import"./ListKeyboardDelegate-D1LsJ1W6.js";import"./Text-yK2KnKs6.js";import"./PressResponder-B40WJfeG.js";import"./useLocalizedStringFormatter-C1w5KOSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-LlGdJz5e.js";import"./VisuallyHidden-CwpyE811.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6M9RCcid.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
