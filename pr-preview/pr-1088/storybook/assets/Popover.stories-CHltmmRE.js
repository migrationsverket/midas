import{j as r}from"./iframe-CgL5jpdX.js";import{P as a}from"./Popover-CwlylJ2g.js";import{$ as i}from"./Dialog-DSbqG3ZJ.js";import{B as n}from"./Button-DSLJU119.js";import{S as p}from"./save-BP6gUwNN.js";import{c as m}from"./createLucideIcon-CxmWxSan.js";import{T as s}from"./Text-MhlqGevy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Dxv48tTs.js";import"./useFocusRing-CzWgPPi5.js";import"./utils-BwYOvAb8.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./Button-Z-LnhU8E.js";import"./Hidden-C2oIje6j.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./useResizeObserver-NI893z-o.js";import"./useControlledState-CyaCWJoJ.js";import"./RSPContexts-TxIrKy65.js";import"./Collection-9AeLgQUg.js";import"./index-CO57A9Dx.js";import"./Separator-CbbfB2UR.js";import"./SelectionManager-o0XZ8hoX.js";import"./useEvent-DWxTDEgS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DqnlVpg0.js";import"./useDescription-B8kyRAqY.js";import"./ListKeyboardDelegate-BZdKy9GG.js";import"./Text-C7o90fsQ.js";import"./PressResponder-CuXLg06j.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bik81p2q.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BsEPRBBE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
