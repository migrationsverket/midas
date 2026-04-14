import{j as r}from"./iframe-CO-rhcep.js";import{P as a}from"./Popover-CQrfQpeQ.js";import{$ as i}from"./Dialog-pnIFzO4D.js";import{S as n}from"./save-CIZvdLBw.js";import{c as m}from"./createLucideIcon-oXqbvAOH.js";import{B as p}from"./Button-ChDRE6gD.js";import{T as s}from"./Text-BNQMcymU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xXHSLQwD.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-moVMtSdv.js";import"./useFocusRing-DON0ybQn.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./Button-BEB_3r-L.js";import"./Hidden-CWNbbLzJ.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./useResizeObserver-BzyZcqY_.js";import"./useControlledState-ByGhFCbY.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-B-Xm9PzS.js";import"./Collection--YUStxrO.js";import"./index-COspV66_.js";import"./Separator-CfRKzM-t.js";import"./SelectionManager-7j3V1-Q2.js";import"./useEvent-BTYXRaQg.js";import"./scrollIntoView-D7XGELv_.js";import"./SelectionIndicator--9j1Qi6g.js";import"./useDescription-Be4D-VmW.js";import"./ListKeyboardDelegate-CWdsneQG.js";import"./Text-DdPGOhQT.js";import"./PressResponder-D72Vt04O.js";import"./useLocalizedStringFormatter-D2pDPRTj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPoia-Ui.js";import"./getScrollParent-BKQZghjE.js";import"./VisuallyHidden-C7JdZ-qs.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
