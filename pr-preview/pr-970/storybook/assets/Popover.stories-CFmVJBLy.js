import{j as r}from"./iframe-BvU5xcZ6.js";import{S as n}from"./save-CqDwQmoz.js";import{c as m}from"./createLucideIcon-Bd04jM4n.js";import{$ as a}from"./Dialog-DI6MPESB.js";import{P as i}from"./Popover-D4m9w2Ry.js";import{B as p}from"./Button-Cv7hnaWU.js";import{T as s}from"./Text-evR5nmIf.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C9_RYgB9.js";import"./utils-DNv02rPu.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHY5Q1Kt.js";import"./useFocusRing-vZw9Dvay.js";import"./index-Bef40-aw.js";import"./index-Dc_kFy69.js";import"./useLabels-FmS0ggiN.js";import"./useButton-B8BiSZmd.js";import"./RSPContexts-BulTZf7c.js";import"./OverlayArrow-BZcVsILZ.js";import"./useResizeObserver-DWjM30zM.js";import"./useControlledState-PQZLqL14.js";import"./Collection-Dl6go_YD.js";import"./index-YoBKxMt_.js";import"./Separator-B-zTWApR.js";import"./SelectionManager-DHcXwlU3.js";import"./useEvent-Bz8l31iO.js";import"./scrollIntoView-D3VgVWtP.js";import"./SelectionIndicator-Bx753wwo.js";import"./useDescription-BClDbhSX.js";import"./ListKeyboardDelegate-CWATdnNC.js";import"./Text-DFigioyQ.js";import"./PressResponder-DqvzWvwj.js";import"./useLocalizedStringFormatter-BKZa2vq4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7Iam-X6.js";import"./VisuallyHidden-C8Yn3KEk.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B52eqB_B.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
