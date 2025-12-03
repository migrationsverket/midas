import{j as r}from"./iframe-CKFV4t_1.js";import{S as n}from"./save-CpRxZLYz.js";import{c as m}from"./createLucideIcon-sgDlsuts.js";import{$ as a}from"./Dialog-BQ_mqNXy.js";import{P as i}from"./Popover-i2s2TNUi.js";import{B as p}from"./Button-CX41FOI9.js";import{T as s}from"./Text-Dv3jZ_aV.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DI-ffzDX.js";import"./utils-DI9iWWNt.js";import"./clsx-B-dksMZM.js";import"./Hidden-DihczV1P.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./RSPContexts-BzweYrWZ.js";import"./OverlayArrow-gZMjfUNs.js";import"./useResizeObserver-HMX32PgH.js";import"./useControlledState-BDpF19zF.js";import"./Collection-DZeW03SE.js";import"./index-vTCi_tu9.js";import"./Separator-hYZTGZos.js";import"./SelectionManager-Dv3dFLkJ.js";import"./useEvent-CAPMhfOK.js";import"./scrollIntoView-s5FNUvm8.js";import"./SelectionIndicator-CblqZDMx.js";import"./useDescription-XRc2AN6L.js";import"./ListKeyboardDelegate-tcadBjjn.js";import"./Text-DzSDPQzh.js";import"./PressResponder-CuU5Vb0J.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DClmF7Sb.js";import"./VisuallyHidden-POfTLuvh.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
