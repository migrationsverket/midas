import{j as r}from"./iframe-8UJkVthP.js";import{P as a}from"./Popover-DF28tWtL.js";import{$ as i}from"./Dialog-CrNctySC.js";import{S as n}from"./save-CKCxQiDV.js";import{c as m}from"./createLucideIcon-KCEZs7i4.js";import{B as p}from"./Button-ByNh2qq9.js";import{T as s}from"./Text-FE_S5mZr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BDWBmxXy.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D1WaM4Ij.js";import"./useFocusRing-0HTfSbqX.js";import"./index-CmnEY_Qy.js";import"./index-Co6zkntU.js";import"./Button-5Crp6oLI.js";import"./Hidden-D2CAjC8z.js";import"./useLabels-CdJkQqk9.js";import"./useButton-MMd5ycyS.js";import"./useResizeObserver-DR8kIdUi.js";import"./useControlledState-CQGiwWre.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-qbHEhELM.js";import"./Collection-BjLu6E75.js";import"./index-CiiwR1vG.js";import"./Separator-C-rwZau5.js";import"./SelectionManager-DN6QIcY4.js";import"./useEvent-CbYAf6vF.js";import"./scrollIntoView-BW2PYDKv.js";import"./SelectionIndicator-BMVKAfis.js";import"./useDescription-BTR78MKM.js";import"./ListKeyboardDelegate-D2hlOZCJ.js";import"./Text-CV-khTPA.js";import"./PressResponder-DCf-TYC-.js";import"./useLocalizedStringFormatter-gIHOQjHO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-td24gFyo.js";import"./getScrollParent-6Dr3zswo.js";import"./VisuallyHidden-vq1pC-28.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dos3tI0u.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
