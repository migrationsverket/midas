import{j as r}from"./iframe-CgfDwMsT.js";import{P as a}from"./Popover-5ceXyevA.js";import{$ as i}from"./Dialog-CwSajge6.js";import{B as n}from"./Button-C6uLPlVc.js";import{S as p}from"./save-D_3mgol7.js";import{c as m}from"./createLucideIcon-CwSVauo5.js";import{T as s}from"./Text-CaslyU5o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CAjKRREM.js";import"./useFocusRing-aa-V_nwI.js";import"./utils-CLuUze_r.js";import"./index-BNYk_4JU.js";import"./index-Dv-85DYp.js";import"./Button-C7WplXtK.js";import"./Hidden-CJELcxwQ.js";import"./useLabels-DNGz1z-B.js";import"./useButton-BH5dt01l.js";import"./useResizeObserver-UqoURxQ-.js";import"./useControlledState-iA0OTCu9.js";import"./RSPContexts-DvQiZ2rE.js";import"./Collection-C4M8l1yV.js";import"./index-UGE9mCaU.js";import"./Separator-g-pZPYls.js";import"./SelectionManager-Cl8CuRve.js";import"./useEvent-e-NwapiS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-t9jVfqOa.js";import"./useDescription-CrupViey.js";import"./ListKeyboardDelegate-BJ31K7BN.js";import"./Text-E6YbvuHS.js";import"./PressResponder-C_J1gD1a.js";import"./useLocalizedStringFormatter-Bgfo292P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0eTp-du.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DyZ9BPVk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzThpmxU.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
