import{j as r}from"./iframe-Hg8hxll6.js";import{S as n}from"./save-DnQ5AAyK.js";import{c as m}from"./createLucideIcon-CorD8qZx.js";import{$ as a}from"./Dialog-Bt01w8AN.js";import{P as i}from"./Popover-BEWd7qbM.js";import{B as p}from"./Button-BHcDCTkB.js";import{T as s}from"./Text-CbJwjeA3.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D6s1rIHb.js";import"./utils-DkBAlQaP.js";import"./clsx-B-dksMZM.js";import"./Hidden-CW8eyMJF.js";import"./useFocusRing-BHhaWYLO.js";import"./index-C9pUtnOL.js";import"./index-QbllegrG.js";import"./useLabels-Dhhk-JlN.js";import"./useButton-C_20Yccn.js";import"./RSPContexts-CUKDrdkA.js";import"./OverlayArrow-C3YpQDvv.js";import"./useResizeObserver-B4anKBbX.js";import"./useControlledState-B9N8h_ty.js";import"./Collection-C-gv1rI3.js";import"./index-x-LGDK9V.js";import"./Separator-DJhUtRxR.js";import"./SelectionManager-BdusSTK8.js";import"./useEvent-DcZb6QTG.js";import"./scrollIntoView-QWj_UH7z.js";import"./SelectionIndicator-BUZofeGN.js";import"./useDescription-DDUPD-SO.js";import"./ListKeyboardDelegate-C9e4k2u4.js";import"./Text-g8ihhCC7.js";import"./PressResponder-CI1P2mdv.js";import"./useLocalizedStringFormatter-BuwzLtaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D5TELs7H.js";import"./VisuallyHidden-DEAPyNKO.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Kb9GHVVg.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Primary","Placement"];export{e as Placement,t as Primary,Y as __namedExportsOrder,X as default};
