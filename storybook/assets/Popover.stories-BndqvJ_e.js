import{j as r}from"./iframe-BGuMGxmc.js";import{P as a}from"./Popover-CIjuEgaB.js";import{$ as i}from"./Dialog-BJQvF6PQ.js";import{S as n}from"./save-C6oJGxpU.js";import{c as m}from"./createLucideIcon-YpCIaABn.js";import{B as p}from"./Button-ClNKt42i.js";import{T as s}from"./Text-X11QTVVP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ca8G7ZGu.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-ld_Fcod1.js";import"./useFocusRing-DJApir6W.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./Button-C3vJklaf.js";import"./Hidden-Blt3qGK-.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./useResizeObserver-CeeUBLia.js";import"./useControlledState-7HU2cwdp.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CnYkPQTV.js";import"./Collection-DE67HbN5.js";import"./index-PiVRGSsF.js";import"./Separator-DRH7_b0z.js";import"./SelectionManager-GAh7yBJ1.js";import"./useEvent-B0xi010u.js";import"./scrollIntoView-DUfrCx46.js";import"./SelectionIndicator-DuhzZcnq.js";import"./useDescription-CkSrBGkd.js";import"./ListKeyboardDelegate-C6e2aQfG.js";import"./Text-D1Wivcto.js";import"./PressResponder-k2rJyGDQ.js";import"./useLocalizedStringFormatter-CJMbHzz3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjTqUlHX.js";import"./getScrollParent-B6QXkZoK.js";import"./VisuallyHidden-D0q9pbf-.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
