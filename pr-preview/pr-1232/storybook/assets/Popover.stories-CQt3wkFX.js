import{j as r}from"./iframe-Cu_fcUaC.js";import{P as a}from"./Popover-yTDjeowR.js";import{$ as i}from"./Dialog-C-EAIPxB.js";import{S as n}from"./save-D-ArzmGW.js";import{c as m}from"./createLucideIcon-B_FH30vd.js";import{B as p}from"./Button-DbgphF2R.js";import{T as s}from"./Text-CJt2oElV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mLyOZ5qk.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DhYthxRu.js";import"./useFocusRing-Dsj_Rw-j.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./Button-BJB-9Zcd.js";import"./Hidden-D1QpNxPu.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./useResizeObserver-BN_fml5s.js";import"./useControlledState-Cc2dWwpP.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-voJfQs_F.js";import"./Collection-DgS7LPNV.js";import"./index-Bd3BSiq8.js";import"./Separator-oct6uH29.js";import"./SelectionManager-CrVTf4E_.js";import"./useEvent-CwEPxrZU.js";import"./scrollIntoView-ACzs8MHU.js";import"./SelectionIndicator-B3i_o2a7.js";import"./useDescription-BXNyutV1.js";import"./ListKeyboardDelegate-BaQ6if3w.js";import"./Text-BcWcM5HD.js";import"./PressResponder-BV-_NXl-.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YFYmKfCX.js";import"./getScrollParent-DEJhUy4G.js";import"./VisuallyHidden-Bo9ouMME.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
