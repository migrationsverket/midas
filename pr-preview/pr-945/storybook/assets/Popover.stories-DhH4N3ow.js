import{j as r}from"./iframe-DDE2q2jJ.js";import{S as n}from"./save-tkpBQnVL.js";import{c as m}from"./createLucideIcon-Bl1-P2Iq.js";import{$ as a}from"./Dialog-D_KWzj05.js";import{P as i}from"./Popover-DhDMsT5U.js";import{B as p}from"./Button-Ci_9cuGQ.js";import{T as s}from"./Text-BwkS_7yz.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-HCOG5F4J.js";import"./utils-a9bcQ49A.js";import"./clsx-B-dksMZM.js";import"./Hidden-By32gRxz.js";import"./useFocusRing-B3mA85Wg.js";import"./index-Dbi_VTwK.js";import"./index-lUxujH5K.js";import"./useLabels-DDbF2kwS.js";import"./useButton-fYhOhmoU.js";import"./RSPContexts-CFPL8A-7.js";import"./OverlayArrow-SW753CeG.js";import"./useResizeObserver-1zWkmZ97.js";import"./useControlledState-DAP_JcuQ.js";import"./Collection-DTuUNth6.js";import"./index-D1o6svUE.js";import"./Separator-CJVs4gtu.js";import"./SelectionManager-CzTgUG9I.js";import"./useEvent-tL9OW1cd.js";import"./scrollIntoView-DPCVqvBT.js";import"./SelectionIndicator-Dvh5MI45.js";import"./useDescription-DcQu_PV8.js";import"./ListKeyboardDelegate-Cty5t2Cp.js";import"./Text-Cm5UVo2w.js";import"./PressResponder-bnXcN065.js";import"./useLocalizedStringFormatter-Bcbgr9Cy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BsyS2ene.js";import"./VisuallyHidden-CHq8aofl.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B_ZJeHWO.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
