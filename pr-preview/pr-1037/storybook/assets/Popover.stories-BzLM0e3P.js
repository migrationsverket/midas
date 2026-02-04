import{j as r}from"./iframe-avvwDBBp.js";import{P as a}from"./Popover-CtWJu6lm.js";import{$ as i}from"./Dialog-CXi0lKvB.js";import{B as n}from"./Button-Bc5upLYd.js";import{S as p}from"./save-DU4eSvTt.js";import{c as m}from"./createLucideIcon-H9RUqqbe.js";import{T as s}from"./Text-BuEQRuhi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-19GsMW1S.js";import"./useFocusRing-x-yt5vcP.js";import"./utils-C6AdICJ7.js";import"./index-Cc2TyXf4.js";import"./index-F0yeFPaK.js";import"./Button-B34KA-9Z.js";import"./Hidden-Ft7ifkXt.js";import"./useLabels-BaAeHDSr.js";import"./useButton-C6RHTzzZ.js";import"./useResizeObserver-CDLAZHnJ.js";import"./useControlledState-BQt9Xj6g.js";import"./RSPContexts-BJmPPlkw.js";import"./Collection-nNhJNYKC.js";import"./index-CUhqqiIc.js";import"./Separator-D2SIzjzz.js";import"./SelectionManager-DAyBKSt5.js";import"./useEvent-DK7Zb_XO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-jzK5UQW7.js";import"./useDescription-BiPsPzZk.js";import"./ListKeyboardDelegate-CykXfXkf.js";import"./Text-nuNh7stK.js";import"./PressResponder-nCvL8pYp.js";import"./useLocalizedStringFormatter-C0xDl-WG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5BK6QLk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bjg7bFep.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDByPaCr.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
