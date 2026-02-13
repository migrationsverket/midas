import{j as r}from"./iframe-BVjJh1qr.js";import{P as a}from"./Popover-BAo9ORLy.js";import{$ as i}from"./Dialog-jgVbqZar.js";import{B as n}from"./Button-Dg78q2ju.js";import{S as p}from"./save-g18tFxDf.js";import{c as m}from"./createLucideIcon-DI0VgPwY.js";import{T as s}from"./Text-BB8xB_KG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DDPjK939.js";import"./useFocusRing-TW7q1EUd.js";import"./utils-bNy6ojY5.js";import"./index-DIEHB-cs.js";import"./index-CNkeeaIr.js";import"./Button-BMjFxLp_.js";import"./Hidden-Cb128-qJ.js";import"./useLabels-Dp0cw4u-.js";import"./useButton-r4UQO9dh.js";import"./useResizeObserver-DJVRBe_U.js";import"./useControlledState-C9LVXWZ-.js";import"./RSPContexts-4cSt6u6S.js";import"./Collection-JqSksE_3.js";import"./index-CVyQMNda.js";import"./Separator-BL73eY4j.js";import"./SelectionManager-BZ3YveyL.js";import"./useEvent-CcPYrnrS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CLchoed_.js";import"./useDescription-MeYAog7E.js";import"./ListKeyboardDelegate-cQjqjVFs.js";import"./Text-CsfvyS0Z.js";import"./PressResponder-DVLw-9bA.js";import"./useLocalizedStringFormatter-D4nGqZ_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7YH2_nR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-q2CDSj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9aLA_6i.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
