import{j as r}from"./iframe-Dy8YW1nL.js";import{S as n}from"./save-CVDk1v9P.js";import{c as m}from"./createLucideIcon-Dm8CZmjq.js";import{$ as a}from"./Dialog-B0fIVHVn.js";import{P as i}from"./Popover-B7fnbKy0.js";import{B as p}from"./Button-B67iCngD.js";import{T as s}from"./Text-hvN0j1za.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DC3XM5t6.js";import"./utils-C1iN3peK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMRF2LLs.js";import"./useFocusRing-CHtYKIBZ.js";import"./index-CiKqZaPy.js";import"./index-CtsF22kH.js";import"./useLabels-BfD0hyaw.js";import"./useButton-BzUs9u61.js";import"./RSPContexts-CGLIBW7g.js";import"./OverlayArrow-CdekLvSf.js";import"./useResizeObserver-nI4TvI1F.js";import"./useControlledState-yTQyhLHt.js";import"./Collection-DQpYV1l7.js";import"./index-DYTqj35q.js";import"./Separator-CypzuRi1.js";import"./SelectionManager-mqjIioqG.js";import"./useEvent-CZ4JNl4C.js";import"./scrollIntoView-CvK5Pp_s.js";import"./SelectionIndicator-WMLvYsov.js";import"./useDescription-izPGNkRr.js";import"./ListKeyboardDelegate-D25woScL.js";import"./Text-DWQpvMY3.js";import"./PressResponder-CeEHBSGP.js";import"./useLocalizedStringFormatter-DY5nz3IE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BDcVMAVa.js";import"./VisuallyHidden-BflTjhoa.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bgm_EniW.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
