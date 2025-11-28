import{j as r}from"./iframe-Bu_0PVym.js";import{S as n}from"./save-CvZ5ZpnH.js";import{c as m}from"./createLucideIcon-DsJW-Utu.js";import{$ as a}from"./Dialog-DCDJBOxd.js";import{P as i}from"./Popover-D93ecue1.js";import{B as p}from"./Button-xsqQqkQ4.js";import{T as s}from"./Text-CcT2CHdP.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-axDS0fX7.js";import"./utils-BIbh9FXc.js";import"./clsx-B-dksMZM.js";import"./Hidden-qOIDITa6.js";import"./useFocusRing-Dpo6Rp6r.js";import"./index-CFkxhmdC.js";import"./index-DpdlitPn.js";import"./useLabels-D-wdi6sm.js";import"./useButton-DnFz0C4G.js";import"./RSPContexts-Dlhq9Mwl.js";import"./OverlayArrow-BCdGaPI4.js";import"./useResizeObserver-CTdgS_BL.js";import"./useControlledState-DhxqLuUq.js";import"./Collection-DyYagCuz.js";import"./index-B4MMZpXP.js";import"./Separator-C0vHjDka.js";import"./SelectionManager-CDRyyz4I.js";import"./useEvent-CkXPWDzi.js";import"./scrollIntoView-CmL5QW7o.js";import"./SelectionIndicator-CeBKB-1C.js";import"./useDescription-CzNL1T7g.js";import"./ListKeyboardDelegate-nj8dmpTs.js";import"./Text-BYC8Q8vx.js";import"./PressResponder-32R9ejHz.js";import"./useLocalizedStringFormatter-Drm1wbnq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQAysRqG.js";import"./VisuallyHidden-BhEPxKK7.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bso3J__i.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
