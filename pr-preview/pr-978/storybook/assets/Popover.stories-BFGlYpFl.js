import{j as r}from"./iframe-aZts9sTH.js";import{S as n}from"./save-CBri7BH9.js";import{c as m}from"./createLucideIcon-BCtVQ7cW.js";import{$ as a}from"./Dialog-FK6yk6Vq.js";import{P as i}from"./Popover-B7MPMU68.js";import{B as p}from"./Button-Ba0mnMwa.js";import{T as s}from"./Text-BFEuyFsz.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DRPL95DZ.js";import"./utils-CluU2ngc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BI6nf7sE.js";import"./useFocusRing-BRQxC-Pn.js";import"./index-BtqyUEvJ.js";import"./index-BZUDR8KZ.js";import"./useLabels-Bi0kdcz9.js";import"./useButton-B4wgjHhf.js";import"./RSPContexts-DdRuYZUO.js";import"./OverlayArrow-CEmYMLLq.js";import"./useResizeObserver-kOtRAKS9.js";import"./useControlledState-BWJsClp4.js";import"./Collection-CgsiLLmy.js";import"./index-kL85HzZP.js";import"./Separator-CQL19c0s.js";import"./SelectionManager-4oSlNkuw.js";import"./useEvent-BhW_lhji.js";import"./scrollIntoView-BTTXyCtL.js";import"./SelectionIndicator-fRccRsDB.js";import"./useDescription-C2-ZDTdq.js";import"./ListKeyboardDelegate-DzCjeQwL.js";import"./Text-D3KoC4fT.js";import"./PressResponder-C6-4xRmN.js";import"./useLocalizedStringFormatter-DQv6nStV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bg93bK7j.js";import"./VisuallyHidden-CjGgagJb.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Buplq2VU.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
