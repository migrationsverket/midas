import{j as r}from"./iframe-0ay5Cl7Z.js";import{P as a}from"./Popover-MJVDCkTa.js";import{$ as i}from"./Dialog-CsrRoGz5.js";import{B as n}from"./Button-C9_6wCAg.js";import{S as p}from"./save-BSQkstTI.js";import{c as m}from"./createLucideIcon-C-V0PVLC.js";import{T as s}from"./Text-BGuljUD0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-EcjdagTC.js";import"./useFocusable-B634M_Fb.js";import"./useObjectRef-DG4zbPWe.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-DERZdo11.js";import"./useFocusRing-BCxb_ufh.js";import"./index-9qv7Fem8.js";import"./index-U-aVmNqW.js";import"./useControlledState-BZfBuZ3A.js";import"./utils-OwhIF6Yv.js";import"./Button-DxAruj7U.js";import"./Hidden-BzPJJaE1.js";import"./useLabels-BQsB-eC9.js";import"./useButton-Dk5PjSpe.js";import"./RSPContexts-CAeNAO0k.js";import"./Collection-DvvkxIOw.js";import"./CollectionBuilder-BTJH7Kto.js";import"./index-Dfbi8MRN.js";import"./Separator-hQ70M9LX.js";import"./SelectionManager-Cp7KGgYq.js";import"./useEvent-5vUs9lWK.js";import"./scrollIntoView-DBszQ3_a.js";import"./SelectionIndicator-zqXirjR8.js";import"./useDescription-f161JRhm.js";import"./ListKeyboardDelegate-vxkeYpMQ.js";import"./Text-DfthMNVx.js";import"./PressResponder-4fh9PZSY.js";import"./useLocalizedStringFormatter-Bev7EFEw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-MDYFQ4gP.js";import"./getScrollParent-Bg5c39wC.js";import"./VisuallyHidden-DQAFa958.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CA3dvWhn.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),or={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:e=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...e})]})},o={args:{placement:"top",children:"Spara"},render:e=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const er=["Primary","Placement"];export{o as Placement,t as Primary,er as __namedExportsOrder,or as default};
