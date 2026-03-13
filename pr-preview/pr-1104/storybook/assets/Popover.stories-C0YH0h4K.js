import{j as r}from"./iframe-Bm0DrSMO.js";import{P as a}from"./Popover-C8fWg4HG.js";import{$ as i}from"./Dialog-BbfilgdF.js";import{S as n}from"./save-BWgwpKvG.js";import{c as m}from"./createLucideIcon-CUh6klxC.js";import{B as p}from"./Button-CekYPC-I.js";import{T as s}from"./Text-BLzt5HZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CoM9YHiu.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D4l3ajFn.js";import"./useFocusRing-CkTqT8wc.js";import"./index-CFyUkJmM.js";import"./index-CuQSmexf.js";import"./Button-BlmcdTpb.js";import"./Hidden-RcWRgJ8x.js";import"./useLabels-B81GYCN9.js";import"./useButton-BNEnbj2x.js";import"./useResizeObserver-OBobqjdZ.js";import"./useControlledState-_TpPhYBA.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-nAfEcYEJ.js";import"./Collection-BAnlV6Ln.js";import"./index-DQ_G-xOK.js";import"./Separator-BvxaLU5Z.js";import"./SelectionManager-BJ6XMe41.js";import"./useEvent-Bam-6ZDs.js";import"./scrollIntoView-ChcThMc9.js";import"./SelectionIndicator-bnleW8Zx.js";import"./useDescription-BgQlQb3M.js";import"./ListKeyboardDelegate-yZYnbXf1.js";import"./Text-CvUQuXzc.js";import"./PressResponder-DLhCu5NC.js";import"./useLocalizedStringFormatter-DWI_FIzZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_4zRhOjD.js";import"./getScrollParent-D9CIxd-t.js";import"./VisuallyHidden-B5PU83U6.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ci4W8RSD.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
