import{j as r}from"./iframe-CYrC2O7n.js";import{P as a}from"./Popover-xvlzBOBY.js";import{$ as i}from"./Dialog-BTKGCqJw.js";import{B as n}from"./Button-OKR0VFLl.js";import{S as p}from"./save-M3yudCGv.js";import{c as m}from"./createLucideIcon-B2v0PGO8.js";import{T as s}from"./Text-C6dUuRFD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-gbdM9ti7.js";import"./useFocusRing-DwhBMXNM.js";import"./utils-W9KFSJyi.js";import"./index-Dd5lO-PO.js";import"./index-BE0HShMl.js";import"./Button-BKTJlLGY.js";import"./Hidden-Cuqxaz-j.js";import"./useLabels-JnCkPdA7.js";import"./useButton-DzzAV_qM.js";import"./useResizeObserver-C7khmZ6Y.js";import"./useControlledState-CWVzqNB6.js";import"./RSPContexts-96m8ngxa.js";import"./Collection-C0qlFWCq.js";import"./index-C6ZPDeAo.js";import"./Separator-Ou9floIC.js";import"./SelectionManager-C2qcIVnE.js";import"./useEvent-Cl9zlQud.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BisZMVPl.js";import"./useDescription-CS0207ko.js";import"./ListKeyboardDelegate-Cq5x0cfE.js";import"./Text-kU8vQOsb.js";import"./PressResponder-HHm5zrGH.js";import"./useLocalizedStringFormatter-D52FmrAL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IiM63RyR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-vjowbZXC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CEUvbGBF.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
