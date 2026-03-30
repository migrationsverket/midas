import{j as r}from"./iframe-DI52Qlo4.js";import{P as a}from"./Popover-Ci3NpRpo.js";import{$ as i}from"./Dialog-CRbXODQt.js";import{S as n}from"./save-CA5TGQrv.js";import{c as m}from"./createLucideIcon-Bf3dyCX1.js";import{B as p}from"./Button-3POgXEp-.js";import{T as s}from"./Text-D2edba9r.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-urtsDcnm.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D7hD0gOc.js";import"./useFocusRing-2JaqZA15.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./Button-eSR4bLK4.js";import"./Hidden-CscT1sly.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./useResizeObserver-6WAybvcV.js";import"./useControlledState-CLoU2XYC.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CrMRLfkl.js";import"./Collection-hUB3sBJJ.js";import"./index-Bdpc1bHO.js";import"./Separator-kUMFISQV.js";import"./SelectionManager-CX4E6mov.js";import"./useEvent-BfgA6E-w.js";import"./scrollIntoView-hSq_mdzL.js";import"./SelectionIndicator-By0Zxqsk.js";import"./useDescription-58WIc14O.js";import"./ListKeyboardDelegate-H7rz5L58.js";import"./Text-C_RzDhoB.js";import"./PressResponder-BhhTh5UN.js";import"./useLocalizedStringFormatter-C62DnPYV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCqfTzdf.js";import"./getScrollParent-BHx5XlTQ.js";import"./VisuallyHidden-Ct-vZpQ3.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
