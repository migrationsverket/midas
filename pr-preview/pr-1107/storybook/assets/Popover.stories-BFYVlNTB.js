import{j as r}from"./iframe-B6mQtHg_.js";import{P as a}from"./Popover-_YB3zJLu.js";import{$ as i}from"./Dialog-DWvUH0sc.js";import{S as n}from"./save-gyD8mdO0.js";import{c as m}from"./createLucideIcon-BZZ3uCZ8.js";import{B as p}from"./Button-CjEwSg5p.js";import{T as s}from"./Text-CC5_ooHx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BRho1dRj.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-D9hgR9BD.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./Button-fYT3W3-R.js";import"./Hidden-Zr6f3d_F.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./useResizeObserver-CDTc09hL.js";import"./useControlledState-BRStpwCw.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-BXQmSd5O.js";import"./Collection-Dh9iTOnN.js";import"./index-iGuCePgB.js";import"./Separator-CEDzVaUO.js";import"./SelectionManager-Cghfwki6.js";import"./useEvent-CRuitgb9.js";import"./scrollIntoView-5Pop8Kz8.js";import"./SelectionIndicator-DxHOx4Ux.js";import"./useDescription-D1JiDHG9.js";import"./ListKeyboardDelegate-l6tisyI0.js";import"./Text-P1kAvbTC.js";import"./PressResponder-E-1FVKal.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQO17Uvf.js";import"./getScrollParent-D1snmpn8.js";import"./VisuallyHidden-B9plZj9e.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
