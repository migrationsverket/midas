import{j as r}from"./iframe-CH21sBFo.js";import{P as a}from"./Popover-CWx6x2q9.js";import{$ as i}from"./Dialog-CQ7FpZ0p.js";import{S as n}from"./save-DCzJ1I7O.js";import{c as m}from"./createLucideIcon-BCbaEzrv.js";import{B as p}from"./Button-DAqWGZgG.js";import{T as s}from"./Text-irla2VTm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTsYysht.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DXDnGS1w.js";import"./useFocusRing-DLE_Hwk5.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./Button-Cyld21y_.js";import"./Hidden-BZUBqXYz.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./useResizeObserver-BYnbHVpd.js";import"./useControlledState-BSIuYOQP.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-kvxCI0gF.js";import"./Collection-Cv8r9qAi.js";import"./index-CqPeTyvA.js";import"./Separator-BknOFeGR.js";import"./SelectionManager-DqQLiQaF.js";import"./useEvent-B6n2-V8U.js";import"./scrollIntoView-By99Ab3d.js";import"./SelectionIndicator-DQXVG8Dk.js";import"./useDescription-B4sJiGX5.js";import"./ListKeyboardDelegate-DkHv3-VU.js";import"./Text-BvEBpsjb.js";import"./PressResponder-Bo1gKqy7.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMXONQ0x.js";import"./getScrollParent-DE7toX-r.js";import"./VisuallyHidden-BbJs2R-u.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
