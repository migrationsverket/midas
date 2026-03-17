import{j as r}from"./iframe-FsNXgqe6.js";import{P as a}from"./Popover-BUi0eHZY.js";import{$ as i}from"./Dialog-B8uY3jGW.js";import{S as n}from"./save-CYpYk4Ll.js";import{c as m}from"./createLucideIcon-Dz3AmHpK.js";import{B as p}from"./Button-YzrNlavS.js";import{T as s}from"./Text-C8W6Aunw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CHHHSM11.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DmsvKZX4.js";import"./useFocusRing-CRoVfTyE.js";import"./index-C-L_vO3C.js";import"./index-DR5yPJn1.js";import"./Button-BlUHKe-n.js";import"./Hidden-B6vp6jMs.js";import"./useLabels-Dlx2sqNn.js";import"./useButton-Dvk9iXpB.js";import"./useResizeObserver-IhCfOiMN.js";import"./useControlledState-cgOhGnIF.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-L16IbbAV.js";import"./Collection-DDaYa3-Y.js";import"./index--E2Dvaj6.js";import"./Separator-Bd83B3mj.js";import"./SelectionManager-h8lDah4m.js";import"./useEvent-ClOxTEoa.js";import"./scrollIntoView-C5rWQYSS.js";import"./SelectionIndicator-CvwVJIfe.js";import"./useDescription-B03GWqqQ.js";import"./ListKeyboardDelegate-CFzjx7yi.js";import"./Text-CjmdaRq5.js";import"./PressResponder-4pNBWveI.js";import"./useLocalizedStringFormatter-C2slbsQF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeKVnalW.js";import"./getScrollParent--flH2mcI.js";import"./VisuallyHidden-CDgolLOv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-XwSS7WVV.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
