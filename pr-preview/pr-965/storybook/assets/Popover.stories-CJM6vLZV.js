import{j as r}from"./iframe-67fMHQcr.js";import{S as n}from"./save-Bs8GO4aL.js";import{c as m}from"./createLucideIcon-DPoFQgUp.js";import{$ as a}from"./Dialog-C6bNEOK2.js";import{P as i}from"./Popover-Bhs-uEO6.js";import{B as p}from"./Button-SGb-jW8E.js";import{T as s}from"./Text-DRPPRvVG.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-kat9spYA.js";import"./utils-CzrochTz.js";import"./clsx-B-dksMZM.js";import"./Hidden-CgRbqzp1.js";import"./useFocusRing-Bp8Mhd7n.js";import"./index-DfEYfE5h.js";import"./index-sfGWluQm.js";import"./useLabels-Jj46PDyy.js";import"./useButton-BkNgGNTC.js";import"./RSPContexts-Ubta1JzZ.js";import"./OverlayArrow-E3wrnXrw.js";import"./useResizeObserver-Hy--umlO.js";import"./useControlledState-DJp7nnOG.js";import"./Collection-DhelN-Nr.js";import"./index-CJk1rCJK.js";import"./Separator-DQHPTvCK.js";import"./SelectionManager-DFD9tYq5.js";import"./useEvent-Ctiau1nl.js";import"./scrollIntoView-BVZkxVMT.js";import"./SelectionIndicator-Zq4ffFUx.js";import"./useDescription-_77_jMY7.js";import"./ListKeyboardDelegate-CUWjsHit.js";import"./Text-BUZyNo40.js";import"./PressResponder-BNGvUDtY.js";import"./useLocalizedStringFormatter-B_WHaKeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DW9ss5j_.js";import"./VisuallyHidden-kN9goOZy.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-166t5hcs.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
