import{j as r}from"./iframe-D8kScJOW.js";import{P as a}from"./Popover-B8G8AAdq.js";import{a as i}from"./Dialog-ER62G7Ju.js";import{B as n}from"./Button-yGMt3EcI.js";import{S as p}from"./save-D8lbhgGf.js";import{c as m}from"./createLucideIcon-D86DfHIr.js";import{T as s}from"./Text-dfzJJw2x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BeX7n3Lo.js";import"./useFocusRing-DX0NOpMY.js";import"./utils-DOIpWP0z.js";import"./index-BwG7EFX-.js";import"./index-DoG9K020.js";import"./Button-Calv3qt8.js";import"./Hidden-DrIa5vju.js";import"./useLabels-CiWc5UlF.js";import"./useButton-CsXDdlLu.js";import"./useResizeObserver-CseDl3G8.js";import"./useControlledState-CfPp4VwR.js";import"./RSPContexts-gcY93-hk.js";import"./Collection-BRKsVRuR.js";import"./index-BTX46W9Q.js";import"./Separator-Dp8YfdW3.js";import"./SelectionManager-cqgo4LjN.js";import"./useEvent-CoP0H9dt.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Fg0uBFlh.js";import"./useDescription-B5GMnvdp.js";import"./ListKeyboardDelegate-h55wbdAx.js";import"./Text-C9haNyBE.js";import"./PressResponder-C5evyjsn.js";import"./useLocalizedStringFormatter-yHRbMNWv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-iBO0widl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CmWP6aGN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CnhkruPy.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
