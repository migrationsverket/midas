import{j as r}from"./iframe-Bau-Vb-U.js";import{P as a}from"./Popover-DZhOWdrR.js";import{$ as i}from"./Dialog-DiJkuoOJ.js";import{S as n}from"./save-B1qMPw0y.js";import{c as m}from"./createLucideIcon-Di4Tit0m.js";import{B as p}from"./Button-BCWlvYFn.js";import{T as s}from"./Text-CnUTPFtZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzohMAvG.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Cfo-rVtX.js";import"./useFocusRing-DBI5s8iT.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./Button-nyoR5AiN.js";import"./Hidden-ygOXplTE.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./useResizeObserver-kloavf3_.js";import"./useControlledState-B-7lzpTq.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-Ci7lzjgK.js";import"./Collection-zEnqGodL.js";import"./index-OEhMN9pE.js";import"./Separator-C5e4qUB-.js";import"./SelectionManager-fg2ccwC3.js";import"./useEvent-CVCmvDjB.js";import"./scrollIntoView-DtuGpqr3.js";import"./SelectionIndicator-9wEoKMBQ.js";import"./useDescription-kPv3UG3t.js";import"./ListKeyboardDelegate-qWSthOhk.js";import"./Text-CCFXQNDk.js";import"./PressResponder-n2bcd3qr.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaN3JYX9.js";import"./getScrollParent-CNAv_Fjp.js";import"./VisuallyHidden-HpJjECW7.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CNmU83eC.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
