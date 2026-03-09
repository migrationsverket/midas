import{j as r}from"./iframe-CZ4pIpgM.js";import{P as a}from"./Popover-DYRZwff5.js";import{$ as i}from"./Dialog-C47mvOO0.js";import{B as n}from"./Button-BsOyBqD3.js";import{S as p}from"./save-B1BrayI0.js";import{c as m}from"./createLucideIcon-NleWcVUk.js";import{T as s}from"./Text-DIdbWBzS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BIs3oxR8.js";import"./useFocusRing-CC14X5Ag.js";import"./utils-BKAqyTPp.js";import"./index--Vrw-Eoy.js";import"./index-DhnAxJyh.js";import"./Button-Bzfpb552.js";import"./Hidden-eVbRi0Ga.js";import"./useLabels-Cqjt9RJx.js";import"./useButton-BLx5WIcY.js";import"./useResizeObserver-L2UfQ-0J.js";import"./useControlledState-DloD9_PZ.js";import"./RSPContexts-D88SRWR9.js";import"./Collection-D0DooXtn.js";import"./index-A8oFdD54.js";import"./Separator-Dpi82mqi.js";import"./SelectionManager-Bpvam3Hj.js";import"./useEvent-D9H4FF1-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-6cVNcxEy.js";import"./useDescription-DpS_jdsI.js";import"./ListKeyboardDelegate-Bwq3uVzn.js";import"./Text-BQl4iJz3.js";import"./PressResponder-C53ru_xZ.js";import"./useLocalizedStringFormatter-BPfhaoOQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGmPg04v.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6O2-97V.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-2rZubXmi.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
