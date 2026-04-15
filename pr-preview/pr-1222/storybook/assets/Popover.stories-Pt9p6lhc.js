import{j as r}from"./iframe-Co8ouiR0.js";import{P as a}from"./Popover-0v0Nff7R.js";import{$ as i}from"./Dialog-CvlWZS6m.js";import{S as n}from"./save-CF3esdE1.js";import{c as m}from"./createLucideIcon-CuuVQ0Rb.js";import{B as p}from"./Button-BOgReN_Q.js";import{T as s}from"./Text-B5_C6N3n.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CaTFkK5X.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C6d9GNbe.js";import"./useFocusRing-Dxdgl-gF.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./Button-BP9TK4Xh.js";import"./Hidden-TJ2PhhZw.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./useResizeObserver-B51hn-QD.js";import"./useControlledState-CaplsX9m.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DtYDmIKY.js";import"./Collection-DINZb8zb.js";import"./index-B_luancG.js";import"./Separator-BapWEfbs.js";import"./SelectionManager-BWBhr4BK.js";import"./useEvent-Cm1cXmjt.js";import"./scrollIntoView-DvPgTXx8.js";import"./SelectionIndicator-DWiIapfM.js";import"./useDescription-HAOJ4Hrg.js";import"./ListKeyboardDelegate-CsIF4ql5.js";import"./Text-DtfYRBf1.js";import"./PressResponder-D7LEbecv.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CnViS2qk.js";import"./getScrollParent-BedhNeW7.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
