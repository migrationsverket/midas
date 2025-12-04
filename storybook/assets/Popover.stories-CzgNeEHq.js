import{j as r}from"./iframe-kcBhHuaH.js";import{S as n}from"./save-B8RkUxRw.js";import{c as m}from"./createLucideIcon-DghdNl6J.js";import{$ as a}from"./Dialog-Dh9JMf9d.js";import{P as i}from"./Popover-DmceUy5M.js";import{B as p}from"./Button-BSuH-ecX.js";import{T as s}from"./Text-B-hyuWsp.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C0s49uwD.js";import"./utils-DOkcVAYP.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMcBSm7p.js";import"./useFocusRing-LSHA0Ws_.js";import"./index-CI0fxBEF.js";import"./index-c5G31wg9.js";import"./useLabels-DaJadwr0.js";import"./useButton-D1IFZ1te.js";import"./RSPContexts-BUNBwwJ3.js";import"./OverlayArrow-DH5Clq5N.js";import"./useResizeObserver--VwbIWdS.js";import"./useControlledState-DFRisE43.js";import"./Collection-B9GNZMME.js";import"./index-Dorx7YVm.js";import"./Separator-DwsHHZMX.js";import"./SelectionManager-CL7ASC5i.js";import"./useEvent-iOlAT4BQ.js";import"./scrollIntoView-C6lbNJbw.js";import"./SelectionIndicator-Be5O618m.js";import"./useDescription-daVdwGQJ.js";import"./ListKeyboardDelegate-CUwlA322.js";import"./Text-DV1iqpLS.js";import"./PressResponder-CEfWacfb.js";import"./useLocalizedStringFormatter-CVmu0uNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWGMakzZ.js";import"./VisuallyHidden-BNmglq9E.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMjkdAmu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
