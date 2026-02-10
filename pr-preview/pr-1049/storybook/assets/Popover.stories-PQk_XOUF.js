import{j as r}from"./iframe-8LQjSoV-.js";import{P as a}from"./Popover-B8UBIi6G.js";import{$ as i}from"./Dialog-D_ik0V2q.js";import{B as n}from"./Button-BHfZAxDJ.js";import{S as p}from"./save-J6pP9QRK.js";import{c as m}from"./createLucideIcon-DK8ikGDs.js";import{T as s}from"./Text-B7DoZjLQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CFLAg81B.js";import"./useFocusRing-eCeeo32D.js";import"./utils-D4ezzWJc.js";import"./index-CSLiAA3d.js";import"./index-Bp415QC6.js";import"./Button-B1ovmxx6.js";import"./Hidden-DMawGuP2.js";import"./useLabels-D4_n4kmh.js";import"./useButton-V0hMWo2E.js";import"./useResizeObserver-BDH1aAVt.js";import"./useControlledState-BRRCr0-V.js";import"./RSPContexts-C9qIP2XU.js";import"./Collection-CKtooNbR.js";import"./index-CvYpyXd6.js";import"./Separator-BgXH_ZB5.js";import"./SelectionManager-zJgynfyK.js";import"./useEvent-Ba0ZD0JM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4ysFdBZ.js";import"./useDescription-DXvHmld6.js";import"./ListKeyboardDelegate-BJ1_VC6C.js";import"./Text-Ba5DRcdW.js";import"./PressResponder-B4KwkXPh.js";import"./useLocalizedStringFormatter-C8C_oBkV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhPqfReP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKIzJ5lj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJaTWWg.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
