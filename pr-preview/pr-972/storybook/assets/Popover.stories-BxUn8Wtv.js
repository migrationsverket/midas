import{j as r}from"./iframe-CcqIJJ9I.js";import{S as n}from"./save-BSwDxByP.js";import{c as m}from"./createLucideIcon-Ba6CVsaC.js";import{$ as a}from"./Dialog-6IaWqWsz.js";import{P as i}from"./Popover-CTjC1vhw.js";import{B as p}from"./Button-Y2MdeHyb.js";import{T as s}from"./Text-B2y69JCA.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-g0SRrwOY.js";import"./utils-CY4Fu9XG.js";import"./clsx-B-dksMZM.js";import"./Hidden-DoPVqW9a.js";import"./useFocusRing-C6yLInR-.js";import"./index-BZYrye5E.js";import"./index-Dk_EVKVa.js";import"./useLabels-BilCN1NI.js";import"./useButton-DY6rqluc.js";import"./RSPContexts-DAOG_PEF.js";import"./OverlayArrow-7jeERZda.js";import"./useResizeObserver-CInyPDqE.js";import"./useControlledState-DFeihBKm.js";import"./Collection-DptOGsU8.js";import"./index-CdKsVf5O.js";import"./Separator-aU5CSZY5.js";import"./SelectionManager-CuK7wIFL.js";import"./useEvent-C1dfxzp6.js";import"./scrollIntoView-BY6i16iw.js";import"./SelectionIndicator-DxGLI-9G.js";import"./useDescription-Bm_U4g4C.js";import"./ListKeyboardDelegate-DUBgQ1Yz.js";import"./Text-BeMrApc1.js";import"./PressResponder-gIDAusRx.js";import"./useLocalizedStringFormatter-C2Q5ZqZK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B2_RuOXm.js";import"./VisuallyHidden-BbrVFRLR.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dvdqua-f.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
