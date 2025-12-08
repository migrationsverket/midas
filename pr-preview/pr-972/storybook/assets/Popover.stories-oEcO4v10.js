import{j as r}from"./iframe-BNcdEUXj.js";import{S as n}from"./save-GuVYTkPi.js";import{c as m}from"./createLucideIcon-E9DumC9p.js";import{$ as a}from"./Dialog-rf362-90.js";import{P as i}from"./Popover-DrXUutE7.js";import{B as p}from"./Button-BL-fsXV7.js";import{T as s}from"./Text-DR0_UwJ4.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CaKLSY2s.js";import"./utils-Bxcv5MPT.js";import"./clsx-B-dksMZM.js";import"./Hidden-B0zthcPy.js";import"./useFocusRing-C6YM28qN.js";import"./index-TMTY01Ep.js";import"./index-DSdXJGSi.js";import"./useLabels-Cq9B0I-L.js";import"./useButton-DEu1-L8J.js";import"./RSPContexts-Bi-J2mqx.js";import"./OverlayArrow-WKc1anHT.js";import"./useResizeObserver-DbfjkM1E.js";import"./useControlledState-DGlddZrL.js";import"./Collection-Bh0FLaqb.js";import"./index-CPL2LM8Z.js";import"./Separator-Cvljqg2w.js";import"./SelectionManager-B7rIaUrL.js";import"./useEvent-SGz4Axl2.js";import"./scrollIntoView-BYkZm8rI.js";import"./SelectionIndicator-C0ddJV60.js";import"./useDescription-BasjIu_5.js";import"./ListKeyboardDelegate-BWVHPwUZ.js";import"./Text-B53mvpty.js";import"./PressResponder-DgW9No9g.js";import"./useLocalizedStringFormatter-QBa3_aSW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BR4s5BG-.js";import"./VisuallyHidden-C4uEYBAI.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfXz0OFm.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
