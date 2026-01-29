import{j as r}from"./iframe-BvxrP4H_.js";import{P as a}from"./Popover-CXyOYptn.js";import{a as i}from"./Dialog-BntEtIwp.js";import{B as n}from"./Button-A9AEz-p5.js";import{S as p}from"./save-C24rONTo.js";import{c as m}from"./createLucideIcon-B5KIjSHM.js";import{T as s}from"./Text-DeMAVr2b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DUojjDUB.js";import"./useFocusRing-CJdHKEcp.js";import"./utils-DRwSYmkY.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./Button-BEiciYfb.js";import"./Hidden-D4jsxrLb.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./useResizeObserver-BdXrzxcT.js";import"./useControlledState-D2EAi2j4.js";import"./RSPContexts-DEykMfDO.js";import"./Collection-BnA9gHIE.js";import"./index-DMqlofMa.js";import"./Separator-e71TDoZM.js";import"./SelectionManager-BH5HcElr.js";import"./useEvent-CgFksn0F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-pSPS3JIv.js";import"./useDescription-CWz-Nrf1.js";import"./ListKeyboardDelegate-DbICXpzW.js";import"./Text-BJUv6RK-.js";import"./PressResponder-D8B4OF2M.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQJawZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJsqer9T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
