import{j as r}from"./iframe-BRlibj-k.js";import{P as a}from"./Popover-BKrQFK9O.js";import{$ as i}from"./Dialog-i8Of-r3D.js";import{S as n}from"./save-DQm8G4rn.js";import{c as m}from"./createLucideIcon-p72J_6hu.js";import{B as p}from"./Button-BCeszJe0.js";import{T as s}from"./Text-fpqzAeYU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bx0A40Hz.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-ALUXgoOq.js";import"./useFocusRing-CE-jlBYc.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./Button-B0keB5Wy.js";import"./Hidden-BrLnFV9D.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./useResizeObserver-BsDMDtB2.js";import"./useControlledState-CerSLXPK.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CV3yeRAb.js";import"./Collection-m61hGjFH.js";import"./index-Djsdy0km.js";import"./Separator-BxZTZnnw.js";import"./SelectionManager-BL0dIx3d.js";import"./useEvent-CVRknVnX.js";import"./scrollIntoView-DIdzgJq7.js";import"./SelectionIndicator-6jBuleUJ.js";import"./useDescription-By1zY_hH.js";import"./ListKeyboardDelegate-Dpjn_onP.js";import"./Text-Ck72NiTG.js";import"./PressResponder-Cd--8JpT.js";import"./useLocalizedStringFormatter-zTincOmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DHkAtzL7.js";import"./getScrollParent-BNETjxTj.js";import"./VisuallyHidden-DAewgK18.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-nyGG6W03.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
