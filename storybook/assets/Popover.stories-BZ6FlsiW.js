import{j as r}from"./iframe-ttA-941O.js";import{P as a}from"./Popover-Bm6gXjcq.js";import{$ as i}from"./Dialog-CnTHFYME.js";import{B as n}from"./Button-BhVMo4IX.js";import{S as p}from"./save-18oa8qik.js";import{c as m}from"./createLucideIcon-B1sYOOVA.js";import{T as s}from"./Text-BR3kbEzk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B0GxO4SL.js";import"./useFocusRing-JMNyCoET.js";import"./utils-kMU7ki_G.js";import"./index-BGJa9tKv.js";import"./index-xTgHXqnF.js";import"./Button-C5RiUPk0.js";import"./Hidden-CwltMKmL.js";import"./useLabels-CKLykpFR.js";import"./useButton-Ufm4RpL_.js";import"./useResizeObserver-DfKSDkbA.js";import"./useControlledState-BUy0YhYj.js";import"./RSPContexts-CjxN8zVi.js";import"./Collection-D1-YSs2_.js";import"./index-CzlCb0WO.js";import"./Separator-alzxNplr.js";import"./SelectionManager-D4TP0W3E.js";import"./useEvent-DZVHWHFV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BGqMO6nd.js";import"./useDescription-BJ8hGUtQ.js";import"./ListKeyboardDelegate-BV_7VUVn.js";import"./Text-DDmMxJeL.js";import"./PressResponder-pfLeyXuc.js";import"./useLocalizedStringFormatter-C2DhziCO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BToGeip5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BaeJBxqb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CuS96Tce.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
