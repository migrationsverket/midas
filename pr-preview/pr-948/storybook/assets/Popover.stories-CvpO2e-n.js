import{j as r}from"./iframe-BFAT86ge.js";import{S as n}from"./save-BmB3kaUG.js";import{c as m}from"./createLucideIcon-DcKvq49U.js";import{$ as a}from"./Dialog-PUDk5BYI.js";import{P as i}from"./Popover-CUejfpX7.js";import{B as p}from"./Button-D7VV456q.js";import{T as s}from"./Text-DuhPYjo1.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DLAy5IOQ.js";import"./utils-Ba9aKAk3.js";import"./clsx-B-dksMZM.js";import"./Hidden-eduYOiEE.js";import"./useFocusRing-DMrOFPKB.js";import"./index-BFncSmEm.js";import"./index-frs3Q4tr.js";import"./useLabels-C6lMhNDy.js";import"./useButton-B3TVvISn.js";import"./RSPContexts-BYWA1x4J.js";import"./OverlayArrow-BGApCK5D.js";import"./useResizeObserver-B7UpDBay.js";import"./useControlledState-CkPmYDR8.js";import"./Collection-BiYgrWvW.js";import"./index-B1FZUAB2.js";import"./Separator-Dhh2VqBs.js";import"./SelectionManager-DlsLVDHq.js";import"./useEvent-CnO47SCe.js";import"./scrollIntoView-BSaH7Nmd.js";import"./SelectionIndicator-D0NQfIHj.js";import"./useDescription-Cc9k7uL8.js";import"./ListKeyboardDelegate-CvV3oALN.js";import"./Text-ZCo5zKuv.js";import"./PressResponder-C6_AVyjI.js";import"./useLocalizedStringFormatter-EcwRZ9Dr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsKOuMBX.js";import"./VisuallyHidden-CyAMcSTC.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D_c5jWec.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
