import{j as r}from"./iframe-C97-KldL.js";import{P as a}from"./Popover-BqoLnGke.js";import{$ as i}from"./Dialog-DD8Nc2dh.js";import{B as n}from"./Button-TcfJGFPW.js";import{S as p}from"./save-BPcr-iqu.js";import{c as m}from"./createLucideIcon-DyW2bSMY.js";import{T as s}from"./Text-kfKvhgrO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BD4eRlxk.js";import"./useFocusRing-BaDVQaIN.js";import"./utils-CT49lX3Q.js";import"./index-C9-aWDE9.js";import"./index-DcQl-zHv.js";import"./Button-By32KbkP.js";import"./Hidden-Cns8g0IT.js";import"./useLabels-DbdYa4IU.js";import"./useButton-C3jqDXTt.js";import"./useResizeObserver-C9RsjVbx.js";import"./useControlledState-BASohq_6.js";import"./RSPContexts-CVaQzuT2.js";import"./Collection-HncGmFQp.js";import"./index-QjpHXcWP.js";import"./Separator-6HTi-cQh.js";import"./SelectionManager-CW0pq1_s.js";import"./useEvent-CjzdKbLS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeibBvL7.js";import"./useDescription-B32pZrdJ.js";import"./ListKeyboardDelegate-DOWibJoJ.js";import"./Text-BWtrJhgb.js";import"./PressResponder-BbrzfePp.js";import"./useLocalizedStringFormatter-CDO2zV2D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8bZ8BQ0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-cBRDBRce.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWWYhU2v.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
