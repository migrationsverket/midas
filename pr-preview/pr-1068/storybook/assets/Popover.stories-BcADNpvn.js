import{j as r}from"./iframe-C_UZb0UH.js";import{P as a}from"./Popover-CYNzPQ3Q.js";import{$ as i}from"./Dialog-BmWKRA9T.js";import{B as n}from"./Button-BjJn1zqZ.js";import{S as p}from"./save-0wf3bqr4.js";import{c as m}from"./createLucideIcon-BfmkpqwG.js";import{T as s}from"./Text-CjhPc_0v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DRDTdGBd.js";import"./useFocusRing-wq3XW6c-.js";import"./utils-Dtmguja_.js";import"./index-wR3qBpGD.js";import"./index-Fx4upXIZ.js";import"./Button-eLbcham7.js";import"./Hidden-BKqaL7Fi.js";import"./useLabels-BiEGdf9t.js";import"./useButton-WC7GcBqe.js";import"./useResizeObserver-R3UE-3dT.js";import"./useControlledState-BekthKbk.js";import"./RSPContexts-B5lp79pf.js";import"./Collection-00eAIKUn.js";import"./index-cLCQ2pnu.js";import"./Separator-C4nS5Ig_.js";import"./SelectionManager-DJjA2lCL.js";import"./useEvent-CZxhJAPd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DOZU75KG.js";import"./useDescription-D2LaqLM1.js";import"./ListKeyboardDelegate-BI-VV3g9.js";import"./Text-AP-S6Ty1.js";import"./PressResponder-Dw94lZ8y.js";import"./useLocalizedStringFormatter-DsjdFjoX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhGadu9e.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--mkN2Z69.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZJYQAWH.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
