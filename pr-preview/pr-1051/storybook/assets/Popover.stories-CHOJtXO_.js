import{j as r}from"./iframe-B5c7-TS8.js";import{P as a}from"./Popover-BKydzdZ2.js";import{$ as i}from"./Dialog-BEf9ZAnF.js";import{B as n}from"./Button-MSp50WJ0.js";import{S as p}from"./save-PbWVpwoM.js";import{c as m}from"./createLucideIcon-DHsWZlEk.js";import{T as s}from"./Text-CXLpjGso.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Cl1qYup9.js";import"./useFocusRing-C18dDj3L.js";import"./utils-OlD28Oco.js";import"./index-ByEKdHjQ.js";import"./index-41iNjvFE.js";import"./Button-C5Qp8sRI.js";import"./Hidden-DgJfQ7aj.js";import"./useLabels-BKo_NQ3G.js";import"./useButton-Br7F04Rc.js";import"./useResizeObserver-15Bzp4gu.js";import"./useControlledState-DEZrae_z.js";import"./RSPContexts-yBqgqokE.js";import"./Collection-BNPzsOfb.js";import"./index-CoLrQld2.js";import"./Separator-BSZDTc6g.js";import"./SelectionManager-Bwh8qqDD.js";import"./useEvent-LUYrey9d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CA3Uq9OB.js";import"./useDescription-BhjMw0Jb.js";import"./ListKeyboardDelegate-GShWNoVd.js";import"./Text-DYD59UTl.js";import"./PressResponder-CBrq5ngO.js";import"./useLocalizedStringFormatter-Bu05u6GJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bh91Q0k3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ByTPJ2eV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dhn_O0nj.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
