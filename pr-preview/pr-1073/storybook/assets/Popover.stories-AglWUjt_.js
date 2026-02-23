import{j as r}from"./iframe-BvaNkZ6j.js";import{P as a}from"./Popover-DtBkRFZf.js";import{$ as i}from"./Dialog-C7jCV_Zk.js";import{B as n}from"./Button-BwfGni6y.js";import{S as p}from"./save-Cha0xz7D.js";import{c as m}from"./createLucideIcon-C_AWNDAW.js";import{T as s}from"./Text-Bnqxz3nE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B9ZhQIHK.js";import"./useFocusRing-qCtyWvqN.js";import"./utils-CNgJIKxW.js";import"./index-1t0eXXk7.js";import"./index-CU93jXVK.js";import"./Button-DSPwUnGO.js";import"./Hidden-D5Pu3QcA.js";import"./useLabels-COvNNRTy.js";import"./useButton-DkC5W3Ti.js";import"./useResizeObserver-CAe_3c_T.js";import"./useControlledState-jnjho331.js";import"./RSPContexts-DNdoMlvy.js";import"./Collection-D4B2Y49d.js";import"./index-DHzc84gA.js";import"./Separator-D4vRshlS.js";import"./SelectionManager-MKoByHH0.js";import"./useEvent-07YEmXce.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2ZQPVOX.js";import"./useDescription-DJyGbkRQ.js";import"./ListKeyboardDelegate-B2dZEP_i.js";import"./Text-YlHeMW3d.js";import"./PressResponder-HmiYoH-q.js";import"./useLocalizedStringFormatter-DRG9aNFD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvW5kagd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-QqUieSTF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B1tb5Rk6.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
