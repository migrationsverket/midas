import{j as r}from"./iframe-D7hgefFi.js";import{P as a}from"./Popover-CgvIwbeH.js";import{$ as i}from"./Dialog-CPp57JpH.js";import{B as n}from"./Button-rPxCLKTe.js";import{S as p}from"./save-BBS3GTDm.js";import{c as m}from"./createLucideIcon-B4zeiAHI.js";import{T as s}from"./Text-DGN2slpv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CshA3CdM.js";import"./useFocusRing-BEIKl4Np.js";import"./utils-1x5w2eFs.js";import"./index-DPE8HPpB.js";import"./index-Dc5FCrrK.js";import"./Button-BkQQAf76.js";import"./Hidden-BPthAdp1.js";import"./useLabels-BNWiTCFC.js";import"./useButton-fmMn4P32.js";import"./useResizeObserver-CoBEwF8j.js";import"./useControlledState-C_xkaUiB.js";import"./RSPContexts-edSBr0y1.js";import"./Collection-DT-GXrOm.js";import"./index-lLpdZDLW.js";import"./Separator-PRL3nm89.js";import"./SelectionManager-DizDU1Yl.js";import"./useEvent-Bq0KSq8o.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSpOUr3d.js";import"./useDescription-BnUO2d3M.js";import"./ListKeyboardDelegate-B4SqK4yR.js";import"./Text-bVuSsYW4.js";import"./PressResponder-GJNPmhvW.js";import"./useLocalizedStringFormatter-Df3u4y0n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ba7Bng00.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-JgK0gAZ6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_1GwcS9.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
