import{j as r}from"./iframe-CkvNFrYQ.js";import{P as a}from"./Popover-BtXLH4Y0.js";import{$ as i}from"./Dialog-Cwzi9hHL.js";import{S as n}from"./save-DecFBVKr.js";import{c as m}from"./createLucideIcon-CeEwKqzx.js";import{B as p}from"./Button-D17vaezS.js";import{T as s}from"./Text-DsB1bVac.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgwUMJBy.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DXo6ErSR.js";import"./useFocusRing-DW5q3Sep.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./Button-vUvfAWls.js";import"./Hidden-Bsx77DlA.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./useResizeObserver-qcJ7l2JQ.js";import"./useControlledState-Dmid9ay2.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DGIABOWW.js";import"./Collection-B_3MCUvb.js";import"./index-TiB-bmTE.js";import"./Separator-D9Pii1fS.js";import"./SelectionManager-BSCYUInq.js";import"./useEvent-DbWchgAK.js";import"./scrollIntoView-CCwmtkiF.js";import"./SelectionIndicator-U0aQAuvT.js";import"./useDescription-CapqPYkv.js";import"./ListKeyboardDelegate-BEgF-Rly.js";import"./Text-DIpvUzoX.js";import"./PressResponder-Bvpu2RL6.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By-NOSqI.js";import"./getScrollParent-Dj3KhtFY.js";import"./VisuallyHidden-DC7QTvoq.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
