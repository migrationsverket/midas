import{j as r}from"./iframe-RkEpx7ni.js";import{P as a}from"./Popover-G63esFkG.js";import{$ as i}from"./Dialog-D7TD1ze6.js";import{B as n}from"./Button-DYQbXjbn.js";import{S as p}from"./save-CbnhQVhu.js";import{c as m}from"./createLucideIcon-cwFcj7Hk.js";import{T as s}from"./Text-C1lDc3gF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CVx-1z4E.js";import"./useFocusRing-BlNPnF8L.js";import"./utils-B679VK9X.js";import"./index-goo2gDrg.js";import"./index-DxX5hx9t.js";import"./Button-g4l6mPYD.js";import"./Hidden-CZ7CBwUl.js";import"./useLabels-xGg1dRYQ.js";import"./useButton-KyyZ2_fP.js";import"./useResizeObserver-61DcnlhT.js";import"./useControlledState-CwCz7UAe.js";import"./RSPContexts-C64Y1eJJ.js";import"./Collection-CgY1rek1.js";import"./index-DcJwTbuE.js";import"./Separator-tflavVo2.js";import"./SelectionManager-BVsm7uU1.js";import"./useEvent-B7oskemw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dt95h1eU.js";import"./useDescription--nrXx0r0.js";import"./ListKeyboardDelegate-_gXQplax.js";import"./Text-BGMtfqCs.js";import"./PressResponder-Cm6tbCUn.js";import"./useLocalizedStringFormatter-DI3yj5Q3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3kQ3QyBc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bkb3QPlD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPcGQfa-.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
