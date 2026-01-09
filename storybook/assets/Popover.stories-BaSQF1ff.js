import{j as r}from"./iframe-BbpEZ5aM.js";import{S as n}from"./save-ByC8TPKj.js";import{c as m}from"./createLucideIcon-CPTKChIs.js";import{$ as a}from"./Dialog-DHg71ag_.js";import{P as i}from"./Popover-CdlCGMko.js";import{B as p}from"./Button-yWoA7-6W.js";import{T as s}from"./Text-j1d70Osr.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CtkizHV8.js";import"./utils-BdrbvCyg.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuJG9RrC.js";import"./useFocusRing-Cb5PiwmC.js";import"./index-B8aZdXXD.js";import"./index-BjFCBoac.js";import"./useLabels-BZZ1Timc.js";import"./useButton-ldcm24KF.js";import"./RSPContexts-x1o6smL2.js";import"./OverlayArrow-C2Yyp8CV.js";import"./useResizeObserver-BE2slcQZ.js";import"./useControlledState-D9qEZDAW.js";import"./Collection-CMtEzmjM.js";import"./index-Bt1_lDd3.js";import"./Separator-vNtjvz19.js";import"./SelectionManager-Bujgh3G0.js";import"./useEvent-6MY4vP-O.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CMlltGqv.js";import"./useDescription-CuIauOi2.js";import"./ListKeyboardDelegate-Beu6wPs6.js";import"./Text-8_j-63AW.js";import"./PressResponder-o9-VTS3S.js";import"./useLocalizedStringFormatter-blmY65Ok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DN9E854x.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kdaoL2HV.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChzbMIxf.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
