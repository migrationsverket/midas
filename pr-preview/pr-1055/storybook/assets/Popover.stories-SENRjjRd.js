import{j as r}from"./iframe-BUqHy7GG.js";import{P as a}from"./Popover-BAVECtS6.js";import{$ as i}from"./Dialog-qKoc5lzA.js";import{B as n}from"./Button-C0V6-7WF.js";import{S as p}from"./save-C_8Q-Cuo.js";import{c as m}from"./createLucideIcon-DBH6mYos.js";import{T as s}from"./Text-6n5u0fKg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C6nnpT1Y.js";import"./useFocusRing-CebfJ1br.js";import"./utils-DrdsiK-L.js";import"./index-DEv5Wt7N.js";import"./index-DZDSHzQO.js";import"./Button-CodW0JYq.js";import"./Hidden-N4_Hw_bF.js";import"./useLabels-Dw6biMU5.js";import"./useButton-CwpzBG5G.js";import"./useResizeObserver-BWZcEgzp.js";import"./useControlledState-BKp7Diu5.js";import"./RSPContexts-r592QdOJ.js";import"./Collection-Bw_hG3jl.js";import"./index-DOsODoS1.js";import"./Separator-BA-clOZZ.js";import"./SelectionManager-CxDB_yOQ.js";import"./useEvent-ErruG-b9.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DCK9j9oG.js";import"./useDescription-B9Fe93xB.js";import"./ListKeyboardDelegate-DJkvH0e-.js";import"./Text-B9jmhAwE.js";import"./PressResponder-BgwM_wsI.js";import"./useLocalizedStringFormatter-CvEuXf2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvBGSArR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMnJ-77G.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8scW4RRu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
