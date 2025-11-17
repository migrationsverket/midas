import{j as r}from"./iframe-BGJKVmf3.js";import{S as n}from"./save-DqHg-wzK.js";import{c as m}from"./createLucideIcon-Bvs4zFUu.js";import{$ as a}from"./Dialog-BkzjdUPZ.js";import{P as i}from"./Popover-BiIV6MRI.js";import{B as p}from"./Button-BoJn9f0V.js";import{T as s}from"./Text-Bp3BbsoJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BnLvJykT.js";import"./utils-CdECfOvA.js";import"./clsx-B-dksMZM.js";import"./Hidden-HQtC_o9a.js";import"./useFocusRing-DbrozJ_r.js";import"./index-pedBBgRE.js";import"./index-DRo8smSM.js";import"./useLabels-DjNPyrwJ.js";import"./useButton-H76zVe9p.js";import"./RSPContexts-B4x9M34g.js";import"./OverlayArrow-CEhGYxVs.js";import"./useResizeObserver-U2HW7D5b.js";import"./useControlledState-CKSdrHFO.js";import"./Collection-BLiFri7p.js";import"./index-CXAwwT1a.js";import"./Separator-DJ3CyE4J.js";import"./SelectionManager-DLKSBW41.js";import"./useEvent-USaeSmTd.js";import"./scrollIntoView-Da0pxFKj.js";import"./SelectionIndicator-Dv9tLt5C.js";import"./useDescription-DXkPEcT2.js";import"./ListKeyboardDelegate-D0u_GLeO.js";import"./Text-r6BcnIdd.js";import"./PressResponder--ZsFu1sS.js";import"./useLocalizedStringFormatter-DpbFwMiK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfHGa-5w.js";import"./VisuallyHidden-G7JBO7ul.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DljgyLYu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Primary","Placement"];export{e as Placement,t as Primary,Y as __namedExportsOrder,X as default};
