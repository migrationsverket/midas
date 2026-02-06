import{j as r}from"./iframe-X3mj68t3.js";import{P as a}from"./Popover-BPWjBjm2.js";import{$ as i}from"./Dialog-DdIdAC1c.js";import{B as n}from"./Button-BVJ0mzNb.js";import{S as p}from"./save-CPcbvl_E.js";import{c as m}from"./createLucideIcon-DXrZJMlk.js";import{T as s}from"./Text-BWheoq0_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-QCwWccrI.js";import"./useFocusRing-A-SYz4Bz.js";import"./utils-DTPrts_7.js";import"./index-BNiETeWH.js";import"./index-CgJQ_hcF.js";import"./Button-B9l0bgEJ.js";import"./Hidden-ozg39Vr6.js";import"./useLabels-DEY-9MxO.js";import"./useButton-CupICIN9.js";import"./useResizeObserver-DE-yBLqy.js";import"./useControlledState-DGtnjhE_.js";import"./RSPContexts-DnDgit_C.js";import"./Collection-CbMVQR1w.js";import"./index-P7Fh13u4.js";import"./Separator-CBx5I7eG.js";import"./SelectionManager-9uZXtExn.js";import"./useEvent-cKzqiIgZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZmvL6AbJ.js";import"./useDescription-C7T8B3ZX.js";import"./ListKeyboardDelegate-Dt2iVvkm.js";import"./Text-dnG1hIAI.js";import"./PressResponder-QQ1Lti6R.js";import"./useLocalizedStringFormatter-BdsuAGwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwEe7AMO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BBlGikRY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzOxC-Qk.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
