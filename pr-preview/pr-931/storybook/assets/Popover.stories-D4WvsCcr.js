import{j as r}from"./iframe-CjjIIKGs.js";import{S as n}from"./save-DvHjOz0V.js";import{c as m}from"./createLucideIcon-BKOGWx3H.js";import{$ as a}from"./Dialog-DZarwmD-.js";import{P as i}from"./Popover-BnXdAC8p.js";import{B as p}from"./Button-BNEmvK4K.js";import{T as s}from"./Text-BpYGQE2I.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DNpQXrrI.js";import"./utils-8ZbXS6f6.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaoTcLvl.js";import"./useFocusRing-BUBN2goW.js";import"./index-D20K6lUI.js";import"./index-DEI9jor0.js";import"./useLabels-Ia4Z8tbb.js";import"./useButton-DixBK3IU.js";import"./RSPContexts-D6XtKLzn.js";import"./OverlayArrow-m_pLNNwx.js";import"./useResizeObserver-CMkccX_0.js";import"./useControlledState-wS3aoh2y.js";import"./Collection-DZxSDMwk.js";import"./index-Df5QruFQ.js";import"./Separator-5NLA1VX_.js";import"./SelectionManager-DYnootbn.js";import"./useEvent-D1k2-Iuc.js";import"./scrollIntoView-Bwwiqusc.js";import"./SelectionIndicator-C9Ru5Yu5.js";import"./useDescription-DKk6Hg5e.js";import"./ListKeyboardDelegate-l_0QYaKt.js";import"./Text-CkV4NByh.js";import"./PressResponder-B7Auj76h.js";import"./useLocalizedStringFormatter-TVROMl_H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DL70V3fn.js";import"./VisuallyHidden-BVLylhk2.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dff0qiua.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
