import{j as r}from"./iframe-Cy9xQwF6.js";import{S as n}from"./save-CJ11aEgl.js";import{c as m}from"./createLucideIcon-DOfRWyVf.js";import{$ as a}from"./Dialog-DvRymg4l.js";import{P as i}from"./Popover-DyC09Xrb.js";import{B as p}from"./Button-BTN2abfL.js";import{T as s}from"./Text-in_uCIcq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D4DaLWR4.js";import"./utils-CX91mN24.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMiuVEcg.js";import"./useFocusRing-eGyNtlnv.js";import"./index-wz2WhQ9W.js";import"./index-CLKliA_Q.js";import"./useLabels-Bn5QEtDZ.js";import"./useButton-LhbsvKtL.js";import"./RSPContexts-BygzARCD.js";import"./OverlayArrow-v9G_YlFK.js";import"./useResizeObserver-C0eTb9yn.js";import"./useControlledState-CLnNsNKS.js";import"./Collection-Bxj0UpEc.js";import"./index-08ROoh00.js";import"./Separator-DQTnEdVU.js";import"./SelectionManager-DCjNTz9O.js";import"./useEvent-DGA9jmm-.js";import"./scrollIntoView-CPTgXU84.js";import"./SelectionIndicator-CsP0uaVU.js";import"./useDescription-eJSpB747.js";import"./ListKeyboardDelegate-dK4g9XO_.js";import"./Text-EiK0GjXA.js";import"./PressResponder-eeg6mLp7.js";import"./useLocalizedStringFormatter-6fLhkzE_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-hBxNwP5K.js";import"./VisuallyHidden-DExMWTTn.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BbLBIRys.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
