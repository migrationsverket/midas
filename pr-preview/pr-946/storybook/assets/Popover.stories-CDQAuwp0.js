import{j as r}from"./iframe-B_KOJ0G0.js";import{S as n}from"./save-BLVh2hiK.js";import{c as m}from"./createLucideIcon-C0reiAmG.js";import{$ as a}from"./Dialog-CJGg_q5A.js";import{P as i}from"./Popover-Br_CJh4y.js";import{B as p}from"./Button-Drf_ZmSl.js";import{T as s}from"./Text-ZOMm-Alb.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CnpoiceM.js";import"./utils-BTtkoL8i.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9DtuNar.js";import"./useFocusRing-5nURZfN9.js";import"./index-CXgWkQzh.js";import"./index-CF3jB36m.js";import"./useLabels-FMAmdZ1G.js";import"./useButton-DkRmfz4B.js";import"./RSPContexts-CbVBvrS_.js";import"./OverlayArrow-DMFwF3Tj.js";import"./useResizeObserver-BCTsMvHc.js";import"./useControlledState-CTR0ps1O.js";import"./Collection-qBAPm5HX.js";import"./index-CKx1Vqp3.js";import"./Separator-awFrDq_W.js";import"./SelectionManager-D_LDUR9m.js";import"./useEvent-DxD1kQt5.js";import"./scrollIntoView-BwfxgBXt.js";import"./SelectionIndicator-GcCYW7bK.js";import"./useDescription-7M9C1DQ3.js";import"./ListKeyboardDelegate-BPFL0eMh.js";import"./Text-D3GHA6gq.js";import"./PressResponder-Bk_mNxXq.js";import"./useLocalizedStringFormatter-DGPkZ-8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfLYi2pS.js";import"./VisuallyHidden-C9mO_RkX.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v4d1yczo.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
