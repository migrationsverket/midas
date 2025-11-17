import{j as r}from"./iframe-DAe8TR3I.js";import{S as n}from"./save-3OtzO0kG.js";import{c as m}from"./createLucideIcon-BbUVc_oI.js";import{$ as a}from"./Dialog-DaXh7qKp.js";import{P as i}from"./Popover-DtXC2AXP.js";import{B as p}from"./Button-WqYefckK.js";import{T as s}from"./Text-lURboruh.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Bap4iZb1.js";import"./utils-BjJkJaoq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CuVt48UU.js";import"./useFocusRing-COEuw-4k.js";import"./index-DERiSa9g.js";import"./index-CZrxflW1.js";import"./useLabels-BQ0JFana.js";import"./useButton-Ds14CM6t.js";import"./RSPContexts-BT4NOdPg.js";import"./OverlayArrow-CudUoVWb.js";import"./useResizeObserver-BspGrk0j.js";import"./useControlledState-C7zn0ZYV.js";import"./Collection-DdfKSgUR.js";import"./index-CM89hdJV.js";import"./Separator-C503tOgc.js";import"./SelectionManager-CLMXmqkv.js";import"./useEvent-BoiLyQt3.js";import"./scrollIntoView-4cLwSIyR.js";import"./SelectionIndicator-4hvPECne.js";import"./useDescription-B02KBJwN.js";import"./ListKeyboardDelegate-0ISlHZAc.js";import"./Text-C4Ukkj8G.js";import"./PressResponder-BrygAvvx.js";import"./useLocalizedStringFormatter-B3jEwN9p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DlZ57Qi8.js";import"./VisuallyHidden-Cxmbdpe5.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DpMm3nXz.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
