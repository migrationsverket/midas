import{j as r}from"./iframe-Bja4lqPg.js";import{S as n}from"./save-C0m59u_S.js";import{c as m}from"./createLucideIcon-BrJy0_rm.js";import{$ as a}from"./Dialog-CjVbz4Lh.js";import{P as i}from"./Popover-BsYceE2w.js";import{B as p}from"./Button-DjNVoY-4.js";import{T as s}from"./Text-DrvB4AMM.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BuHlPB14.js";import"./utils-CfGU2F4C.js";import"./clsx-B-dksMZM.js";import"./Hidden-BoHDrhun.js";import"./useFocusRing-nt4HuyWe.js";import"./index-ClGRDelY.js";import"./index-Cha5Qbb4.js";import"./useLabels-CH_BwytF.js";import"./useButton-BzfR_wja.js";import"./RSPContexts-B0c07tpm.js";import"./OverlayArrow-nrtNdYMd.js";import"./useResizeObserver-B0uDfREA.js";import"./useControlledState-BAOyWDV2.js";import"./Collection-BL6fAMD0.js";import"./index-B84vWc8j.js";import"./Separator-BWqQwA6c.js";import"./SelectionManager-C7MFZmY6.js";import"./useEvent-o5EzRx1a.js";import"./scrollIntoView-jVw5IWHo.js";import"./SelectionIndicator-wzXcrhAR.js";import"./useDescription-B8wRK8nF.js";import"./ListKeyboardDelegate-DU0eug87.js";import"./Text-DmatnyXE.js";import"./PressResponder-62AbajkD.js";import"./useLocalizedStringFormatter-cCcv7JR5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DOGvcR6n.js";import"./VisuallyHidden-CY-bY3f_.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFnTdSDM.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
