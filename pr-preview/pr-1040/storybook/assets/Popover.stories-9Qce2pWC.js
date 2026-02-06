import{j as r}from"./iframe-BMyiRd9K.js";import{P as a}from"./Popover-BqQFbTVc.js";import{$ as i}from"./Dialog-BzEsiJXM.js";import{B as n}from"./Button-EwGc72xf.js";import{S as p}from"./save-Da9HHN_H.js";import{c as m}from"./createLucideIcon-7JtAUgGZ.js";import{T as s}from"./Text-DkNX6WfN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DSIfRBcJ.js";import"./useFocusRing-KDIp_VHj.js";import"./utils-C26E_E_V.js";import"./index-DzAiOFl3.js";import"./index-BSTk-fI9.js";import"./Button-CcqdNx43.js";import"./Hidden-CbMhbGj6.js";import"./useLabels-BskVawR9.js";import"./useButton-C7s-887l.js";import"./useResizeObserver-DMU7hmMI.js";import"./useControlledState-CG4KMb6R.js";import"./RSPContexts-CBk9fMai.js";import"./Collection-DhlHljiD.js";import"./index-B9caRvqr.js";import"./Separator-DwxvodNH.js";import"./SelectionManager-DB-NgXJU.js";import"./useEvent-CWlcVJ27.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8OkqnOyG.js";import"./useDescription-BgY-hAhj.js";import"./ListKeyboardDelegate-Bwq4Qq2J.js";import"./Text-BTUDznp2.js";import"./PressResponder-DQWdEAyb.js";import"./useLocalizedStringFormatter-q3GhEdbW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1SLx_EV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-d5nRRxHR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3VS7mKox.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
