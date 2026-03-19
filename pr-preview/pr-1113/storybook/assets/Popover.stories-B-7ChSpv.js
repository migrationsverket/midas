import{j as r}from"./iframe-Bv5ml16c.js";import{P as a}from"./Popover-BCtEUoE0.js";import{$ as i}from"./Dialog-BXiKJeLw.js";import{S as n}from"./save-Dy0I8FnJ.js";import{c as m}from"./createLucideIcon-CDmvOUsI.js";import{B as p}from"./Button-CLHYluxH.js";import{T as s}from"./Text-AKHTrLSe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CrzZ4zVW.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-s_PFhCGi.js";import"./useFocusRing-Cq3qZjv_.js";import"./index-BOMnw_9i.js";import"./index-fzWvs2nE.js";import"./Button-DLv8fZul.js";import"./Hidden-w_KhT5lQ.js";import"./useLabels-CDeKv3MG.js";import"./useButton-BFdfWCYJ.js";import"./useResizeObserver-AFalClzs.js";import"./useControlledState-D6OB0qGK.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-WtmDll1S.js";import"./Collection-sUJ8wEdO.js";import"./index-koW_KEyU.js";import"./Separator-BRPlw3SR.js";import"./SelectionManager-qPLhk111.js";import"./useEvent-Bm-0c1SF.js";import"./scrollIntoView-BeG1fKYH.js";import"./SelectionIndicator-B-AzNisY.js";import"./useDescription-BqCWQXFE.js";import"./ListKeyboardDelegate-BMGxV2vJ.js";import"./Text-B5E6ljJT.js";import"./PressResponder-Czmnea-t.js";import"./useLocalizedStringFormatter-CtTQzSvs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXw-D0yh.js";import"./getScrollParent-CUNZV9Gn.js";import"./VisuallyHidden-CVPJh_a3.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CsxePGHN.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
