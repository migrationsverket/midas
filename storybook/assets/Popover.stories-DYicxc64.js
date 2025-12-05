import{j as r}from"./iframe-CMtsh5Eh.js";import{S as n}from"./save-DT9Wt8OD.js";import{c as m}from"./createLucideIcon-DdaWlS2p.js";import{$ as a}from"./Dialog-AUSwWiaV.js";import{P as i}from"./Popover-BhIdIv06.js";import{B as p}from"./Button-DfH0lIm8.js";import{T as s}from"./Text-C7cHUgK0.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Ci2iUJ0f.js";import"./utils-VAsp_gKy.js";import"./clsx-B-dksMZM.js";import"./Hidden-CV6VXQ7p.js";import"./useFocusRing-B6bGNFeQ.js";import"./index-39OB84OG.js";import"./index-DyOrKDpA.js";import"./useLabels-BTto6oES.js";import"./useButton-BNNKUFuH.js";import"./RSPContexts-DR0SeAEq.js";import"./OverlayArrow-BUld-Zv5.js";import"./useResizeObserver-pQJQWZuR.js";import"./useControlledState-DLBojQJe.js";import"./Collection-S5-jVCcq.js";import"./index-DYE2Sbm4.js";import"./Separator-B1WORw9S.js";import"./SelectionManager-Dos85k94.js";import"./useEvent-riGGv9T-.js";import"./scrollIntoView-DOcHuZnj.js";import"./SelectionIndicator-Dexp5ffo.js";import"./useDescription-CUv_4czl.js";import"./ListKeyboardDelegate-B0YXW_In.js";import"./Text-BX-Y82iV.js";import"./PressResponder-DlqolfDe.js";import"./useLocalizedStringFormatter-B1g8k-5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C1WRDsik.js";import"./VisuallyHidden-8XrnnDsa.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPQnGY0f.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
