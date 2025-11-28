import{j as r}from"./iframe-oXsIpbMB.js";import{S as n}from"./save-DlVUlHbL.js";import{c as m}from"./createLucideIcon-CifL85wv.js";import{$ as a}from"./Dialog-BtOohgAq.js";import{P as i}from"./Popover-B8h4hkIm.js";import{B as p}from"./Button-BuFobGoF.js";import{T as s}from"./Text-BH5S53Oz.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-8cpKG8rd.js";import"./utils-B-O4b79N.js";import"./clsx-B-dksMZM.js";import"./Hidden-WXuZRkqT.js";import"./useFocusRing-BW9P1ZR5.js";import"./index-BxWuJyFF.js";import"./index-CmStSKjz.js";import"./useLabels-CoOIyE91.js";import"./useButton-Dsjjlw5w.js";import"./RSPContexts-DPtGg_n2.js";import"./OverlayArrow-D9IKXYjn.js";import"./useResizeObserver-BC4x8Eqq.js";import"./useControlledState-BKAJ8-LK.js";import"./Collection-6fmVf6JF.js";import"./index-DgznWqkk.js";import"./Separator-DHUONKab.js";import"./SelectionManager-AtUstcI6.js";import"./useEvent-DKd880lO.js";import"./scrollIntoView-q6sbjqLE.js";import"./SelectionIndicator-BbEcrIpr.js";import"./useDescription-BTh-6Bla.js";import"./ListKeyboardDelegate-T2pqNXVq.js";import"./Text-D73taSIa.js";import"./PressResponder-BU_onAJV.js";import"./useLocalizedStringFormatter-BAW-PBtE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-L4py_Hz8.js";import"./VisuallyHidden-D-5RikPd.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-IfFIdOWG.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
