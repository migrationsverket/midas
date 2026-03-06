import{j as r}from"./iframe-BGjWmNYx.js";import{P as a}from"./Popover-CgoIhE9r.js";import{$ as i}from"./Dialog-6GVh3Jeb.js";import{B as n}from"./Button-Dyr0yQHX.js";import{S as p}from"./save-ZqiORs7j.js";import{c as m}from"./createLucideIcon-Df5FTM0K.js";import{T as s}from"./Text-B9EMTagt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-C2Zs6ooA.js";import"./useFocusRing-Cv1kbpvb.js";import"./utils-D7zTzvCU.js";import"./index-CY1Z3dQf.js";import"./index-D-vxhsZL.js";import"./Button-XSu45boX.js";import"./Hidden-lp8KiHTo.js";import"./useLabels-Cv4iHN_P.js";import"./useButton-CFFtuGbm.js";import"./useResizeObserver-BNERkhke.js";import"./useControlledState-CvsrIW6T.js";import"./RSPContexts-D1Qe90-y.js";import"./Collection-BuFB94CH.js";import"./index-BdIeoIee.js";import"./Separator-BHxadz7W.js";import"./SelectionManager-B25YHJY8.js";import"./useEvent-uGEaKInB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dbu_ggjF.js";import"./useDescription-Djzcv64r.js";import"./ListKeyboardDelegate-B0EJnu-g.js";import"./Text-tIbPkLw7.js";import"./PressResponder-DJaNeCdk.js";import"./useLocalizedStringFormatter-ByLY54jA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zIN36Wbs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ClgLzi2l.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B-DKJptC.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
