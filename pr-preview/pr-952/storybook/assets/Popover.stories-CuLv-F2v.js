import{j as r}from"./iframe-GJIV0jhi.js";import{S as n}from"./save-Vtbc__Gk.js";import{c as m}from"./createLucideIcon-Cn9h6HqS.js";import{$ as a}from"./Dialog-D6RrQG_I.js";import{P as i}from"./Popover-BaFlzyAz.js";import{B as p}from"./Button-CsYpEVDI.js";import{T as s}from"./Text-DdZm8tc2.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-JyF5O3_f.js";import"./utils-SjaA0yG3.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJsyoLBN.js";import"./useFocusRing-CK_C_BwU.js";import"./index-C4Uh3RJ4.js";import"./index-VoTlDwim.js";import"./useLabels-vYy7nIsq.js";import"./useButton-DXeUeID3.js";import"./RSPContexts-Bm7yg8Mb.js";import"./OverlayArrow--_yWJSqC.js";import"./useResizeObserver-C6JRZ4Ai.js";import"./useControlledState-Dv7dRxR4.js";import"./Collection-ClprxEqD.js";import"./index-hjQnYhFX.js";import"./Separator-DAneCyaB.js";import"./SelectionManager-CB9fgW49.js";import"./useEvent-BAd3DddR.js";import"./scrollIntoView-o7LqwIpG.js";import"./SelectionIndicator-DOv89vEg.js";import"./useDescription-B5HoYkdy.js";import"./ListKeyboardDelegate-DUpPRxxA.js";import"./Text-DrabhmgK.js";import"./PressResponder-CakFfnSq.js";import"./useLocalizedStringFormatter-gn54IrKP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DeTBM43N.js";import"./VisuallyHidden-CRj1GIcN.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-q-Ln1_vz.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
