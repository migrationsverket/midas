import{j as r}from"./iframe-mw-3Wqs6.js";import{S as n}from"./save-CiQuqZ_6.js";import{c as m}from"./createLucideIcon-DugDWxFe.js";import{$ as a}from"./Dialog-Ccjdhkv8.js";import{P as i}from"./Popover-BRD9rdjK.js";import{B as p}from"./Button-Ca1dkGu6.js";import{T as s}from"./Text-DGTCcOxe.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Db-TTM-V.js";import"./utils-CYxbFJyZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DYrMFcxf.js";import"./useFocusRing-89DUUa4N.js";import"./index-zd9D6jNJ.js";import"./index-DA11V2mi.js";import"./useLabels-DdJABAh2.js";import"./useButton-XGSOFvEQ.js";import"./RSPContexts-XN3T4dow.js";import"./OverlayArrow-BKSp9Jsk.js";import"./useResizeObserver-CH-Wqbzm.js";import"./useControlledState--wR3WwaU.js";import"./Collection-D6Asr0I3.js";import"./index-DKZkByRv.js";import"./Separator-DWgFLVGB.js";import"./SelectionManager-C7pFQbzQ.js";import"./useEvent-CRXVShig.js";import"./scrollIntoView-CXkXakFA.js";import"./SelectionIndicator-Do5clOAx.js";import"./useDescription-Blh6neaZ.js";import"./ListKeyboardDelegate-CSgQuyq8.js";import"./Text-D7lmaY_E.js";import"./PressResponder-Bbu-ILI9.js";import"./useLocalizedStringFormatter-BCBlkbeT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CGAWy5Jf.js";import"./VisuallyHidden-D6wLmm0f.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNqwZTZL.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
