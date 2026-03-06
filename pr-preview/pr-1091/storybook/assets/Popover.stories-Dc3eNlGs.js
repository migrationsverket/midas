import{j as r}from"./iframe-BiqtS-LP.js";import{P as a}from"./Popover-BHnQef2W.js";import{$ as i}from"./Dialog-PAPpSH0H.js";import{B as n}from"./Button-HP_18L76.js";import{S as p}from"./save-xiV748fM.js";import{c as m}from"./createLucideIcon-DKP3y2-x.js";import{T as s}from"./Text-BTm6pr0L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DQqBUqzJ.js";import"./useFocusRing-BBdC9X4b.js";import"./utils-DDp3zx2O.js";import"./index-DTfFxrYl.js";import"./index-Bz2sGi_M.js";import"./Button-Dc8C55b6.js";import"./Hidden-DFfMyXk8.js";import"./useLabels-CVc1Ewfj.js";import"./useButton-C1JXpszC.js";import"./useResizeObserver-T8diNOak.js";import"./useControlledState-D31sClCQ.js";import"./RSPContexts-Dx5-en_D.js";import"./Collection-BAHLD-pp.js";import"./index-CR_cbryd.js";import"./Separator-IZUjwWjm.js";import"./SelectionManager-CFase-FQ.js";import"./useEvent-BCPLxZ21.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfyBs16K.js";import"./useDescription-R9tt-U1b.js";import"./ListKeyboardDelegate-C4sdMyQn.js";import"./Text-D-mv30w6.js";import"./PressResponder-Cha579s1.js";import"./useLocalizedStringFormatter-BjTggtdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fsFtW3Vl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-50sq9ta1.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C1qYlgbG.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
