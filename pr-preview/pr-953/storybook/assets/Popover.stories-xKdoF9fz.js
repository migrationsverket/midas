import{j as r}from"./iframe-BJQsUCMR.js";import{S as n}from"./save-BiHdlK0B.js";import{c as m}from"./createLucideIcon-DwyOL3g6.js";import{$ as a}from"./Dialog-BzC6JDiP.js";import{P as i}from"./Popover-6d4uiwK_.js";import{B as p}from"./Button-Cuv97NKO.js";import{T as s}from"./Text-BimK0k6U.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BQ9IF-8b.js";import"./utils-Cr7K8WJR.js";import"./clsx-B-dksMZM.js";import"./Hidden-o6EY_DbG.js";import"./useFocusRing-DlRtsXUX.js";import"./index-B-fdDFbP.js";import"./index-BHjUdtJS.js";import"./useLabels-BH12XE_O.js";import"./useButton-CrSiIYdq.js";import"./RSPContexts-BI01sb8g.js";import"./OverlayArrow-CVLixwYq.js";import"./useResizeObserver-0JCOC-KO.js";import"./useControlledState-DJCuFP0v.js";import"./Collection-uC_HUdxp.js";import"./index-CgFsjumR.js";import"./Separator-DHPzP9m9.js";import"./SelectionManager-DAa-cbbJ.js";import"./useEvent-DG3fzSzi.js";import"./scrollIntoView-DB1hrIB-.js";import"./SelectionIndicator-BBOdvufD.js";import"./useDescription-CKj4G0W7.js";import"./ListKeyboardDelegate-Bka3ub3I.js";import"./Text-Cc4_9gUZ.js";import"./PressResponder-D2a5bvYe.js";import"./useLocalizedStringFormatter-CePtc58O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DhO5ZbSM.js";import"./VisuallyHidden-CIBvHJ7K.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMFy_0c_.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
