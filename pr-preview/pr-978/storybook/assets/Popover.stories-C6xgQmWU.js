import{j as r}from"./iframe-BGtyy6fd.js";import{S as n}from"./save-CBt9TyMn.js";import{c as m}from"./createLucideIcon-4ZkmUN36.js";import{$ as a}from"./Dialog-BPV-Pf39.js";import{P as i}from"./Popover-C6lXhGDs.js";import{B as p}from"./Button-D11DdKki.js";import{T as s}from"./Text-BVf8H_wM.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DrTjj1gj.js";import"./utils-CccsvD7u.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxOQW0OL.js";import"./useFocusRing-BnRxtNNt.js";import"./index-Jo84nh3h.js";import"./index-iE9NyH8V.js";import"./useLabels-C6qEHWqP.js";import"./useButton-BpARo-s5.js";import"./RSPContexts-CVImfJEg.js";import"./OverlayArrow-CmjTiIwA.js";import"./useResizeObserver-CU-PaB2M.js";import"./useControlledState-NBBb3dwB.js";import"./Collection-CHaufu6-.js";import"./index-Csz31sU_.js";import"./Separator-BU2fOkre.js";import"./SelectionManager-BoytQZuc.js";import"./useEvent-CtQhVAtx.js";import"./scrollIntoView-nLxHXHgJ.js";import"./SelectionIndicator-DPsuFEfF.js";import"./useDescription-C16OAo1l.js";import"./ListKeyboardDelegate-zE1Wl869.js";import"./Text-CdSUS3L4.js";import"./PressResponder-C00aJ731.js";import"./useLocalizedStringFormatter-BciR1wkJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DmaRQTrd.js";import"./VisuallyHidden-ClSljMM6.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0q1zQmh.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
