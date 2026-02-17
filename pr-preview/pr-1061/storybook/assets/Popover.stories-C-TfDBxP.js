import{j as r}from"./iframe-eQfj5TyR.js";import{P as a}from"./Popover-XnePCbGS.js";import{$ as i}from"./Dialog-BdOZRepl.js";import{B as n}from"./Button-D4E-mWNd.js";import{S as p}from"./save-DBVd7_r0.js";import{c as m}from"./createLucideIcon-BnydqwKc.js";import{T as s}from"./Text-D1gBRjyS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-AQ1O_GLb.js";import"./useFocusRing-FgnAwrg-.js";import"./utils-B1fyRi3f.js";import"./index-BXO00OuG.js";import"./index-CIA7hP3J.js";import"./Button-Bl9G2J9w.js";import"./Hidden-DKvQ0UCo.js";import"./useLabels-D68jkqrd.js";import"./useButton-Bt3yaOy2.js";import"./useResizeObserver-CL5hCH-U.js";import"./useControlledState-BQkMHVAJ.js";import"./RSPContexts-Ds5n5rrC.js";import"./Collection-C_EJZkl4.js";import"./index-B9-vxnY5.js";import"./Separator-B13PBXpT.js";import"./SelectionManager-BSPVAL4T.js";import"./useEvent-gQ4dcrYq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTrHW9Yg.js";import"./useDescription-BaMN0osh.js";import"./ListKeyboardDelegate-HsGsFezV.js";import"./Text-Adt_UDUW.js";import"./PressResponder-B-WzlAfD.js";import"./useLocalizedStringFormatter-CGYFFa5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOTj5QaS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wNpkr7eA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-V6SfCR6T.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
