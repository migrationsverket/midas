import{j as r}from"./iframe-TiTRU3BL.js";import{P as a}from"./Popover-BjUckbNv.js";import{$ as i}from"./Dialog-D_HeaERm.js";import{S as n}from"./save--Tcyg5YF.js";import{c as m}from"./createLucideIcon-BH4SiISs.js";import{B as p}from"./Button-uSTshioy.js";import{T as s}from"./Text-CNXxeonm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C9MqlSp2.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D38NPX59.js";import"./useFocusRing-dtBjt7J0.js";import"./index-B_qfMS5p.js";import"./index-B3QYGaBR.js";import"./Button-D1pF9L05.js";import"./Hidden-oj9BLOe9.js";import"./useLabels-CfZHg_n5.js";import"./useButton-P0duEZAc.js";import"./useResizeObserver-_n0TiEZH.js";import"./useControlledState-L72g7_5f.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-ByDZeKU9.js";import"./Collection-CS7C6DmN.js";import"./index-nhPrKmvq.js";import"./Separator-dwDOr2kY.js";import"./SelectionManager-CY4JiqN1.js";import"./useEvent-YyEIKRGW.js";import"./scrollIntoView-DVlMW1h6.js";import"./SelectionIndicator-BB0oS2TY.js";import"./useDescription-C6zFetVQ.js";import"./ListKeyboardDelegate-C2tXzQP2.js";import"./Text-BHbOdxoE.js";import"./PressResponder-CJQejyfg.js";import"./useLocalizedStringFormatter-BNlFtQ2R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3SZqYUGV.js";import"./getScrollParent-Lft_6uIw.js";import"./VisuallyHidden-BpqMk6oy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BuTIbiUS.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
