import{j as r}from"./iframe-B5zOBWL8.js";import{P as a}from"./Popover-DmbJR2Aw.js";import{$ as i}from"./Dialog-5htlTT34.js";import{S as n}from"./save-Dg_fTVKK.js";import{c as m}from"./createLucideIcon-BVioREcM.js";import{B as p}from"./Button-Ctf6p_Bv.js";import{T as s}from"./Text-2qPPhaNY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-eNYL6jem.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BOk6b71y.js";import"./useFocusRing-BLNWzzDa.js";import"./index-BUSmP6HV.js";import"./index-DCfNYjYD.js";import"./Button-Cr4v4jCk.js";import"./Hidden-BfTCrLpu.js";import"./useLabels-BojerJy7.js";import"./useButton-BuCB7CsM.js";import"./useResizeObserver-DqNUo1ux.js";import"./useControlledState-GuUpKA2D.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DY0llAGa.js";import"./Collection-CPa-JUly.js";import"./index-DTZHqRxA.js";import"./Separator-BGsqUNXh.js";import"./SelectionManager-Bb4M-VHn.js";import"./useEvent-CkQwjY1M.js";import"./scrollIntoView-DWtQnOyb.js";import"./SelectionIndicator-CSf-4huf.js";import"./useDescription-Cf4XGtE7.js";import"./ListKeyboardDelegate-CyqzOeGx.js";import"./Text-CneoSpSV.js";import"./PressResponder-DPU8izkm.js";import"./useLocalizedStringFormatter-Cgkn5RBi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wL6M68rN.js";import"./getScrollParent-DhsKx92u.js";import"./VisuallyHidden-BwEmyPT5.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C9omsTZd.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
