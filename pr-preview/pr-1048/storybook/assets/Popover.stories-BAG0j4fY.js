import{j as r}from"./iframe-C7bjyZwM.js";import{P as a}from"./Popover-P9PcVLxb.js";import{$ as i}from"./Dialog-Cz3ZB9H5.js";import{B as n}from"./Button-B0ce8tXc.js";import{S as p}from"./save-BWgtMVH4.js";import{c as m}from"./createLucideIcon-C5pih5R6.js";import{T as s}from"./Text-C5NeNGM2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B3YLf9Fa.js";import"./useFocusRing-5twuRh50.js";import"./utils-CIiQPwyX.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./Button-C2JLJi6L.js";import"./Hidden-aFyf7gu8.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./useResizeObserver-ezTdfubf.js";import"./useControlledState-D62BjFgf.js";import"./RSPContexts-CnvL7WZL.js";import"./Collection-6KqJKeYy.js";import"./index-BSvAKKIw.js";import"./Separator-xCvxJZHm.js";import"./SelectionManager-CvqFuJtb.js";import"./useEvent-B8VlZ3mC.js";import"./scrollIntoView-BhIbPiYG.js";import"./SelectionIndicator-Stz9YuR-.js";import"./useDescription-CweaZgNC.js";import"./ListKeyboardDelegate-C5T3FD_h.js";import"./Text-BJaGdqWL.js";import"./PressResponder-jUlRYh37.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpAp9bcE.js";import"./getScrollParent-BeyReYlz.js";import"./VisuallyHidden-B7bbQpVf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
