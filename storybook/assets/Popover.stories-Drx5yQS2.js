import{j as r}from"./iframe-CS97_aKA.js";import{P as a}from"./Popover-CTKC9Jvy.js";import{$ as i}from"./Dialog-De7-YKVD.js";import{S as n}from"./save-DFncsENj.js";import{c as m}from"./createLucideIcon-CpkX-fVF.js";import{B as p}from"./Button-BxQXJJlf.js";import{T as s}from"./Text-BsEp3Lpg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Csn9hih_.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-UYFu1rrw.js";import"./useFocusRing-D6iyZNHD.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./Button-BEBLvHt_.js";import"./Hidden-CZHel-hh.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./useResizeObserver-1dwTHbMM.js";import"./useControlledState-DJ6meZbb.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CFWUJItL.js";import"./Collection-BApChUOw.js";import"./index-Cu6_2N_X.js";import"./Separator-B7QslHwr.js";import"./SelectionManager-BjwXPLp2.js";import"./useEvent-D0H0aX9U.js";import"./scrollIntoView-BRhOFysU.js";import"./SelectionIndicator-CwDxAhdf.js";import"./useDescription-ChcQRQvy.js";import"./ListKeyboardDelegate-Dk3x5F9m.js";import"./Text-DllmWVRt.js";import"./PressResponder-W0HbzxSx.js";import"./useLocalizedStringFormatter-DHK9UVHX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvqAEV7Q.js";import"./getScrollParent-BvsZnnQg.js";import"./VisuallyHidden-XYRUvUKq.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
