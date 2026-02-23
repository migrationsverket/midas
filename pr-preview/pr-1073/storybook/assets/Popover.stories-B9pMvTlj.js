import{j as r}from"./iframe-CeCAp685.js";import{P as a}from"./Popover-CxKoBaBv.js";import{$ as i}from"./Dialog-SD2XHtbf.js";import{B as n}from"./Button-DO76dX9X.js";import{S as p}from"./save-BP0s5la4.js";import{c as m}from"./createLucideIcon-DSHxLsIU.js";import{T as s}from"./Text-BD2V775c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BbkrtxzH.js";import"./useFocusRing-Bh0QYcZA.js";import"./utils-COZ-VSjk.js";import"./index-NSorO2Ba.js";import"./index-BRisY6m3.js";import"./Button-0wuCXx93.js";import"./Hidden-DL0LnJvP.js";import"./useLabels-Dg5MFTni.js";import"./useButton-MOpcSjMV.js";import"./useResizeObserver-B3cttXhP.js";import"./useControlledState-Dps_NbAf.js";import"./RSPContexts-CyFxiidX.js";import"./Collection-KDzXr54v.js";import"./index-BAAd046U.js";import"./Separator-Dd_YeU7-.js";import"./SelectionManager-0GA5VoNT.js";import"./useEvent-teEO8Cf_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D8WnGrhr.js";import"./useDescription-B3frf935.js";import"./ListKeyboardDelegate-vJRFFTIb.js";import"./Text-OHvhFpdo.js";import"./PressResponder-DLEVeqMj.js";import"./useLocalizedStringFormatter-DDDWDqSE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFJVtK1g.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C9bjb32j.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiwTvhuf.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
