import{j as r}from"./iframe-Ds-nK5jC.js";import{P as a}from"./Popover-BBEs0hju.js";import{a as i}from"./Dialog-CgtvtU2F.js";import{B as n}from"./Button-CQLlpX_U.js";import{S as p}from"./save-fyVciB_y.js";import{c as m}from"./createLucideIcon-xY7bNo4d.js";import{T as s}from"./Text-cOJkqGeS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CI4gjp7u.js";import"./useFocusRing-DSAS5gOz.js";import"./utils-BWcc9EPK.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./Button-dHl8uENq.js";import"./Hidden-4dstmqQY.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./useResizeObserver-CtwwyWpt.js";import"./useControlledState-B9M6c-Zi.js";import"./RSPContexts-CMueCVj4.js";import"./Collection-C010Bm6D.js";import"./index-BBm7PgdT.js";import"./Separator-ChORmL44.js";import"./SelectionManager-DUDgU4NN.js";import"./useEvent-BAAt4FlS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-qsNA4q.js";import"./useDescription-CfEhRarO.js";import"./ListKeyboardDelegate-ujXyInoy.js";import"./Text-D4nZVrIm.js";import"./PressResponder-DyEMu65E.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Rm77TLpy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BeRc1dUa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
