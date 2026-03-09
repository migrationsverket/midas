import{j as r}from"./iframe-DF-gckEl.js";import{P as a}from"./Popover-CJEHa82s.js";import{$ as i}from"./Dialog-Dp3Ryqzc.js";import{B as n}from"./Button-xgruqnpI.js";import{S as p}from"./save-CCvaB2d1.js";import{c as m}from"./createLucideIcon-DlP1PWjK.js";import{T as s}from"./Text-mrdWRvrC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-fvY2aP3t.js";import"./useFocusRing-DVmaifLp.js";import"./utils-xE_2EOTS.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./Button-DfFeWMER.js";import"./Hidden-CnADKIpW.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./useResizeObserver-toiQEKaZ.js";import"./useControlledState-BozieDQw.js";import"./RSPContexts-CRcRJYcx.js";import"./Collection-B0md0RaS.js";import"./index-CQSyT-Ss.js";import"./Separator-DT4h2oOV.js";import"./SelectionManager--p2EeLu6.js";import"./useEvent-BG4kCyp-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C2_foj_8.js";import"./useDescription-BrazaQD9.js";import"./ListKeyboardDelegate-CBJAAlnU.js";import"./Text-CD93M0aA.js";import"./PressResponder-BdVYCRiG.js";import"./useLocalizedStringFormatter-B49X21jk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-r1pRCCBf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-WVzpTwv1.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CPX24HR9.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
