import{j as r}from"./iframe-ByNEmIOU.js";import{S as n}from"./save-B8N3hwMy.js";import{c as m}from"./createLucideIcon-HuBhSAyF.js";import{$ as a}from"./Dialog-rhS8pjjc.js";import{P as i}from"./Popover-XMptSfTl.js";import{B as p}from"./Button-BZj1eUaG.js";import{T as s}from"./Text-D_4I_8jd.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CZ3GNczv.js";import"./utils-DTOyoAZG.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8ivFDCG.js";import"./useFocusRing-CytbFWM3.js";import"./index-DBfj5PxR.js";import"./index-CGNcjuez.js";import"./useLabels-lfHEtpRl.js";import"./useButton-DMFyreMT.js";import"./RSPContexts-BsQr0774.js";import"./OverlayArrow-Cdo_-urs.js";import"./useResizeObserver-BvWv9OXJ.js";import"./useControlledState-BenzJtep.js";import"./Collection-ZYN-xnvk.js";import"./index-8PBKq18y.js";import"./Separator-Bo1xWXSP.js";import"./SelectionManager-Dc_WBs_T.js";import"./useEvent-C5ByhIa5.js";import"./scrollIntoView-BsCZGpGi.js";import"./SelectionIndicator-3-Vz_rSI.js";import"./useDescription-BQ4qbpcd.js";import"./ListKeyboardDelegate-C1GO73cs.js";import"./Text-BNZ-1xk8.js";import"./PressResponder-CkYRdWz_.js";import"./useLocalizedStringFormatter-YRte3exA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DTrxB9eS.js";import"./VisuallyHidden-B2loE3ZQ.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-WWUimbhC.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
