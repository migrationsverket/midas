import{j as r}from"./iframe-CDna8jjE.js";import{P as a}from"./Popover-DzgQSo6r.js";import{a as i}from"./Dialog-ovFgl49I.js";import{B as n}from"./Button-BzWf_0Ce.js";import{S as p}from"./save-CuocNtsq.js";import{c as m}from"./createLucideIcon-DXyy-duf.js";import{T as s}from"./Text-CTMNSfQo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B2RREcmi.js";import"./useFocusRing-Cui58P_W.js";import"./utils-DLwzmocV.js";import"./index-CqO8KTpm.js";import"./index-C1kBw2K3.js";import"./Button-CasiqzJU.js";import"./Hidden-CL_R-LHP.js";import"./useLabels-DJeip4q-.js";import"./useButton-DgzyzFaT.js";import"./useResizeObserver-BQELvLCX.js";import"./useControlledState-ZH1c28y-.js";import"./RSPContexts-BA89GZqc.js";import"./Collection-di033Ejc.js";import"./index-DNb6Ybde.js";import"./Separator-BcBMNXce.js";import"./SelectionManager-AXLlcPMo.js";import"./useEvent-DNIo1dKq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cycbd7PC.js";import"./useDescription-qt3ADn-9.js";import"./ListKeyboardDelegate-BRRLhSx7.js";import"./Text-DFouRg6c.js";import"./PressResponder-B361EnvG.js";import"./useLocalizedStringFormatter-Ce-PtoG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvVo2JDq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxQZRWoC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-T78m4mfD.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
