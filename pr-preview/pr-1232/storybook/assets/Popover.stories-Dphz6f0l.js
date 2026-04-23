import{j as r}from"./iframe-9FvbyuW0.js";import{P as a}from"./Popover-DvoNYVBo.js";import{$ as i}from"./Dialog-DpcokjtD.js";import{S as n}from"./save-CB6TEoh0.js";import{c as m}from"./createLucideIcon-BM_MsqvO.js";import{B as p}from"./Button-2CN5Xnme.js";import{T as s}from"./Text-rctLJTJW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DbV0Y6c3.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DLBSeoRI.js";import"./useFocusRing-Vad-IAyW.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./Button-C6F5UViI.js";import"./Hidden-DVuO0yGr.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./useResizeObserver-BPk5j--a.js";import"./useControlledState-DTpS52De.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts--6FiGTU6.js";import"./Collection-jHqWKKLK.js";import"./index-CygLUfk4.js";import"./Separator-BjFOZDkA.js";import"./SelectionManager-Bi6U6zzO.js";import"./useEvent-CbyPD6wK.js";import"./scrollIntoView-Cg5eRwi4.js";import"./SelectionIndicator-CSw75rQk.js";import"./useDescription-BGTuXDEN.js";import"./ListKeyboardDelegate-CMUv_TXp.js";import"./Text-DiUsHtEy.js";import"./PressResponder-DGAC22GT.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPdj6FLI.js";import"./getScrollParent-L3WWZsSI.js";import"./VisuallyHidden-C2w5ZOiK.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
