import{j as r}from"./iframe-FULtcQ5y.js";import{P as a}from"./Popover-CwZ7GKO1.js";import{a as i}from"./Dialog-ChnS1c7i.js";import{B as n}from"./Button-C3cOR8o0.js";import{S as p}from"./save-D7lUXMk0.js";import{c as m}from"./createLucideIcon-rSkXk1i2.js";import{T as s}from"./Text-Ccs4qaSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B4xHAU9K.js";import"./useFocusRing-Cf9gdL2X.js";import"./utils-BZWW7WJA.js";import"./index-DZLJKQEi.js";import"./index-DEQebrT3.js";import"./Button-D0gHO-KH.js";import"./Hidden-DwNxrma0.js";import"./useLabels-0cbaIQ_Y.js";import"./useButton-Okn-2P08.js";import"./useResizeObserver-DzkMWGBj.js";import"./useControlledState-b-x_Bn66.js";import"./RSPContexts-DakiloPX.js";import"./Collection-DhJEN3cp.js";import"./index-RRdF-DV5.js";import"./Separator-DCgd4plg.js";import"./SelectionManager-fkm3gmUA.js";import"./useEvent-zOk05Ty3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5fKujRu.js";import"./useDescription-B6nXjKiy.js";import"./ListKeyboardDelegate-BgoZQiFu.js";import"./Text-DnzX-OyP.js";import"./PressResponder-DIxYZTyT.js";import"./useLocalizedStringFormatter-CzRjru41.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zs0ohSnu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BAXKzm-M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRhb472R.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
