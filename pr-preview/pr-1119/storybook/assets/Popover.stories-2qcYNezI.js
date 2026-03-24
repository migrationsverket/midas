import{j as r}from"./iframe-CPefQOMB.js";import{P as a}from"./Popover-DvBVFfgk.js";import{$ as i}from"./Dialog-jsJXy4uT.js";import{S as n}from"./save-BTy-eVe3.js";import{c as m}from"./createLucideIcon-CMS1EKmC.js";import{B as p}from"./Button-BiVXJ2cY.js";import{T as s}from"./Text-CxFNT2uR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEaTr3Fo.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CS9fCMXG.js";import"./useFocusRing-C-wxtkDE.js";import"./index-DzMaIh1E.js";import"./index-iwjKZAtl.js";import"./Button-CZP9j9FA.js";import"./Hidden-CMfLv80K.js";import"./useLabels-CyIDVwdt.js";import"./useButton-h3Du59Bt.js";import"./useResizeObserver-ChhirTSn.js";import"./useControlledState-D3MUrnpH.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-BAtoVYGO.js";import"./Collection-DDNjRncz.js";import"./index-CF4t0_Q1.js";import"./Separator-BdNCc4Jn.js";import"./SelectionManager-D2GrdEi7.js";import"./useEvent-DReQVrX4.js";import"./scrollIntoView-SfcehlMa.js";import"./SelectionIndicator-Bo5GGMOT.js";import"./useDescription-Cd_q-cvg.js";import"./ListKeyboardDelegate-B7f2bhga.js";import"./Text-DYVOn2Uj.js";import"./PressResponder-8GylUK33.js";import"./useLocalizedStringFormatter-2aSusuIC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTyWSrAF.js";import"./getScrollParent-Dax8D36d.js";import"./VisuallyHidden-En7Y8aD0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D3LPWJw0.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
