import{j as r}from"./iframe-CPHjxRlP.js";import{P as a}from"./Popover-cvAu2U6j.js";import{$ as i}from"./Dialog-BpI-i29_.js";import{S as n}from"./save-BWlEUHzP.js";import{c as m}from"./createLucideIcon-iYSxmCjy.js";import{B as p}from"./Button-BPjf-uHP.js";import{T as s}from"./Text-p3Ykg7gy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B-Qbv9d3.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Dqn5MO81.js";import"./useFocusRing-DWjPv-Rc.js";import"./index-BH0p0wiY.js";import"./index-HgmA4Z-C.js";import"./Button-0oqu_HuR.js";import"./Hidden-BaLLinj_.js";import"./useLabels-JrHx6Rsk.js";import"./useButton-BM6c3a1z.js";import"./useResizeObserver-Cs363CQE.js";import"./useControlledState-kjVA7Iho.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-IuRmAr1v.js";import"./Collection-dzAraWz5.js";import"./index-DlfcjIIA.js";import"./Separator-CXP1fQTs.js";import"./SelectionManager-BPXPWQd0.js";import"./useEvent-B67iovzO.js";import"./scrollIntoView-qZ3V1AoT.js";import"./SelectionIndicator-Cpy4WKkL.js";import"./useDescription-BrEL6S7F.js";import"./ListKeyboardDelegate-C6dnvuD-.js";import"./Text-BM8b8hjA.js";import"./PressResponder-CpG4UWem.js";import"./useLocalizedStringFormatter-IAU1f4xs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C04746Dl.js";import"./getScrollParent-vFXpP8ab.js";import"./VisuallyHidden-DUGlWYSK.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BXoUii7t.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
