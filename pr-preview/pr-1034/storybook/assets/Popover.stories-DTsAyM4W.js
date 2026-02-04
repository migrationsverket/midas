import{j as r}from"./iframe-DchRICws.js";import{P as a}from"./Popover-C3VRc43s.js";import{$ as i}from"./Dialog-ClvNWqLa.js";import{B as n}from"./Button-DN9SoO3n.js";import{S as p}from"./save-Dbfa6eae.js";import{c as m}from"./createLucideIcon-BN7buoN8.js";import{T as s}from"./Text-B_W1e8Lm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DubmhbKN.js";import"./useFocusRing-D1Td16IF.js";import"./utils-p-d8MzGY.js";import"./index-CaTrEPTS.js";import"./index-HHGf-Rtd.js";import"./Button-BZuMzazd.js";import"./Hidden-0A_8gJrB.js";import"./useLabels-CyoqPhmQ.js";import"./useButton-C2I_u9zB.js";import"./useResizeObserver-C0iu6b-S.js";import"./useControlledState-gODkUqSO.js";import"./RSPContexts-D7mJCwQj.js";import"./Collection-BwFKrD0P.js";import"./index-JFsHF43l.js";import"./Separator-CTNV6czy.js";import"./SelectionManager-BfPFk-Bl.js";import"./useEvent-CMXGpGQb.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmPCdpGD.js";import"./useDescription-C4pVQLvJ.js";import"./ListKeyboardDelegate-iIdfoFIy.js";import"./Text-Dku__uq1.js";import"./PressResponder-LesXuKWX.js";import"./useLocalizedStringFormatter-0XFtpg5d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9V7Ga83.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CsUUod50.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CN3ZQ9-k.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
