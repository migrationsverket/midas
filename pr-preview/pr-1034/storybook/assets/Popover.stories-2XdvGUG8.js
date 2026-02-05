import{j as r}from"./iframe-HG_Z2pg-.js";import{P as a}from"./Popover-CO9pW_0n.js";import{$ as i}from"./Dialog-DyG2P5dM.js";import{B as n}from"./Button-C-MBQNdi.js";import{S as p}from"./save-BjtG5ogg.js";import{c as m}from"./createLucideIcon-CkaE1DwA.js";import{T as s}from"./Text-CKZFwH_2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CxQkpfnq.js";import"./useFocusRing-C2pNSdUj.js";import"./utils-CdY9616D.js";import"./index-CMaq89o6.js";import"./index-iNkvpkXc.js";import"./Button-DAM_PuZi.js";import"./Hidden-BkYvshkQ.js";import"./useLabels-CYZjihjK.js";import"./useButton-gu6J6a7T.js";import"./useResizeObserver-CeCEK1FF.js";import"./useControlledState-sKIB1QYe.js";import"./RSPContexts-rEVBiSVI.js";import"./Collection-BSaBUkOh.js";import"./index-CBto2vLy.js";import"./Separator-C6RpXoRb.js";import"./SelectionManager-DBA4BPE3.js";import"./useEvent-BB0Ydt5c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CYCN6V3S.js";import"./useDescription-BzOv_EiU.js";import"./ListKeyboardDelegate-BvXzhQRP.js";import"./Text-CPFj8IEW.js";import"./PressResponder-DWz2bTvF.js";import"./useLocalizedStringFormatter-C17LFZpf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-83r22ReL.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-L0YDRZd4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYUm24Kr.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
